<template>
  <v-container class="lighten-5 flcontainer">
    <div>
      <h1 align="center">
        {{ h1.text }} <v-icon :title="title.text">{{ h1.icon }}</v-icon>
      </h1>
    </div>
    <v-row align="center" class="list px-3 mx-auto">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
      <v-btn small color="success" :href="add.route">
        {{ add.button }}
      </v-btn>
      &nbsp; &nbsp; &nbsp;
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-data-table
      :headers="headers"
      :items="files"
      :search="search"
      :loading="espera"
      loading-text="Cargando registros"
    >
      <template v-slot:[`item.state`]="{ item }">
        <v-chip :color="getColor(item.state)" dark>
          {{ item.state }}
        </v-chip>
      </template>

      <template v-slot:[`item.location`]="{ item }">
        <a target="_blank" :href="item.location">
          {{ url }}
        </a>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.edit.title"
          class="mr-2"
          @click="editFiles(item.id)"
          >{{ actions.edit.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detailFiles(item.id)"
          >{{ actions.detail.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.delete.title"
          class="mr-2"
          @click="eliminar(item.id)"
          >{{ actions.delete.icon }}</v-icon
        >
      </template>
    </v-data-table>
    <!-- cmbnoe --->
    <!-- Dilog confirmacion-->
    <v-dialog v-model="dialog" width="30%" persistent>
      <v-card>
        <v-card-title>¿Seguro de eliminar este recurso?</v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="deleteFiles(elim)">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog --->
    <!-- Fin cmbnoe --->
  </v-container>
</template>

<script>
import filesService from "../../services/files";
import stadisticsService from "../../services/stadistics";
export default {
  name: "files-list",
  data() {
    return {
      espera: true,
      filEmail: "",
      dialog: false,
      elim: "",
      h1: { text: "Listado de recursos", icon: "mdi-file-outline" },
      search: "",
      find: { label: "Buscar por correo electrónico", button: "Buscar" },
      add: { button: "Agregar", route: "/files/add" },
      files: [],
      title: "",
      url: "Ver recurso",
      headers: [
        {
          text: "Título",
          value: "title",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Descripción",
          value: "description",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Estado",
          value: "state",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Formato",
          value: "format",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Clasificación",
          value: "purpose",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Recurso",
          value: "location",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Acciones",
          value: "actions",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      actions: {
        edit: { title: "Editar recurso", icon: "mdi-pencil" },
        detail: {
          title: "Detalle de recurso",
          icon: " mdi-format-list-bulleted",
        },
        delete: { title: "Eliminar recurso", icon: "mdi-delete" },
      },
    };
  },
  methods: {
    retrieveFiles() {
      if (localStorage.rol == "DOCENTE" || localStorage.rol == "EVALUADOR") {
        filesService
          .getFilesByEmail(localStorage.email)
          .then((response) => {
            this.files = response.data;
            this.espera = false;
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (localStorage.rol == "ADMINISTRADOR") {
        filesService
          .getFiles()
          .then((response) => {
            this.files = response.data;
            this.espera = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    eliminar(dato) {
      this.dialog = true;
      this.elim = dato;
    },
    refreshList() {
      this.retrieveFiles();
    },

    removeAllFiles() {},

    searchTitle() {
      filesService
        .getFilesByEmail(this.filEmail)
        .then((response) => {
          this.files = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editFiles(id) {
      this.$router.push({ name: "editfiles", params: { id: id } });
    },
    detailFiles(id) {
      this.$router.push({ name: "detailfiles", params: { id: id } });
    },
    deleteFiles(id) {
      filesService
        .deleteFilesById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
      stadisticsService
        .getStadisticsByid(id)
        .then((response) => {
          let idStadistic = response.data[0].id;
          stadisticsService.deleteStadisticsById(idStadistic);
        })
        .catch((e) => {
          console.log(e);
        });
      this.dialog = false;
    },
    getColor(state) {
      if (state == "No aprobado") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
  },
  mounted() {
    this.retrieveFiles();
  },
};
</script>

<style scoped>
.list {
  max-width: 800px;
}
.flcontainer {
  max-width: 1536px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
