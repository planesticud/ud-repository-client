<template>
  <v-container class="lighten-5 rvcontainer">
    <div>
      <h1 align="center">
        {{ h1.text }} <v-icon :title="title.text" medium> {{ h1.icon }}</v-icon>
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

    <v-data-table :headers="headers" :items="files" :search="search" class="text-h3">
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
          :title="actions.detail.title"
          class="mr-2"
          @click="detalleFiles(item.id)"
          >{{ actions.detail.icon }}</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import filesService from "../../services/files";
export default {
  name: "files-list-revisar",
  data() {
    return {
      filEmail: "",
      h1: { text: "Revisar recursos", icon: "mdi-notebook-check" },
      search: "",
      files: [],
      title: "",
      url: "Ver recurso",
      headers: [
        { text: "Título", value: "title", align: "start", sortable: true, class:"text-button" },
        {
          text: "Descripción",
          value: "description",
          align: "start",
          sortable: true,
          class:"text-button"
        },
        { text: "Estado", value: "state", sortable: true, align: "start", class:"text-button" },
        { text: "Formato", value: "format", sortable: true, align: "start", class:"text-button" },
        {
          text: "Clasificación",
          value: "purpose",
          sortable: true,
          align: "start",
          class:"text-button"
        },
        { text: "Acciones", value: "actions", sortable: true, align: "start", class:"text-button" },
      ],
      actions: {
        detail: {
          title: "Revisar el recurso",
          icon: " mdi-clipboard-edit-outline", // mdi-format-list-bulleted",
        },
      },
    };
  },
  methods: {
    retrieveFiles() {
      //.getFiles()
      if (localStorage.rol == "EVALUADOR") {
        filesService
          .getFiles()
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    refreshList() {
      this.retrieveFiles();
    },

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

    detalleFiles(id) {
      this.$router.push({ name: "valorar", params: { id: id } });
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
  max-width: 750px;
}
.rvcontainer {
  max-width: 1536px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
