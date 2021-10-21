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

      &nbsp; &nbsp; &nbsp;
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-data-table :headers="headers" :items="files" :search="search">
      <template v-slot:[`item.state`]="{ item }">
        <v-chip :color="getColor(item.state)" dark>
          {{ item.state }}
        </v-chip>
      </template>

      <template v-slot:[`item.location`]="{ item }">
        <a
          target="_blank"
          :href="item.location"
          v-on:click="view_resource(item.id)"
        >
          {{ url }}
        </a>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detailFiles(item.id)"
          >{{ actions.detail.icon }}
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import filesService from "../../services/files";
import stadisticsService from "../../services/stadistics";

export default {
  name: "files-list-buscar",
  data() {
    return {
      h1: {
        text: "Repositorio de Recusrsos Digitales",
        icon: "mdi-file-outline",
      },
      search: "",
      files: [],
      title: "",
      url: "Ver recurso",
      //josedavid
      counter: 1,
      stadistic: {},
      //end josedavid
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
          text: "Detalles",
          value: "actions",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      actions: {
        detail: {
          title: "Detalle de recurso",
          icon: " mdi-format-list-bulleted",
        },
      },
    };
  },
  methods: {
    retrieveFiles() {
      if (localStorage.rol === "DOCENTE" || localStorage.rol === "ESTUDIANTE") {
        filesService
          .getFilesByState("Aprobado")
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
 //josedavid
    view_resource(id_obj) {
      stadisticsService
        .getStadisticsByid(id_obj)
        .then((response) => {
          this.stadistic = response.data;
          this.stadistic[0].num_view = this.stadistic[0].num_view +=
            this.counter;
          stadisticsService.updateStadistics(
            this.stadistic[0],
            this.stadistic[0].id
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //end josedavid
    refreshList() {
      this.retrieveFiles();
    },

    detailFiles(id) {
      this.$router.push({ name: "detailfiles", params: { id: id } });
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
