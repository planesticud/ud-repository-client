<template>
  <v-container class="lighten-5">
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

    <v-data-table :headers="headers" :items="files" :search="search">
          <template v-slot:[`item.state`]="{ item }">
      <v-chip
        :color="getColor(item.state)"
        dark
      >
        {{ item.state }}
      </v-chip>
    </template>

      <template v-slot:[`item.location`]="{ item }">
        <a target="_blank" :href="item.location">
          {{ url }}
        </a>
      </template>

     <template v-slot:[`item.actions`]="{ item }">
            <v-icon small :title="actions.edit.title"  class="mr-2" @click="editFiles(item.id)">{{actions.edit.icon}}</v-icon>
            <v-icon small :title="actions.detail.title" class="mr-2" @click="detailFiles(item.id)">{{actions.detail.icon}}</v-icon>
            <v-icon small :title="actions.delete.title" class="mr-2" @click="deleteFiles(item.id)">{{actions.delete.icon}}</v-icon>
          </template>
    </v-data-table>
  </v-container>
</template>

<script>
import filesService from "../../services/files";
export default {
  name: "files-list",
  data() {
    return {
      filEmail: "",
      h1: { text: "Listado de recursos", icon: "mdi-file-outline" },
      search: "",
      find: { label: "Buscar por correo electronico", button: "Buscar" },
      add: { button: "Agregar", route: "/files/add" },
      files: [],
      title: "",
      url: "Ver recurso",
      headers: [
        { text: "Título", value: "title", align: "start", sortable: true },
        {
          text: "Descripción",
          value: "description",
          align: "start",
          sortable: true,
        },
        { text: "Estado", value: "state", sortable: true, align: "start" },
        { text: "Formato", value: "format", sortable: true, align: "start" },
        {
          text: "Clasificación",
          value: "purpose",
          sortable: true,
          align: "start",
        },
        { text: "Recurso", value: "location", sortable: true, align: "start" },
        { text: "Acciones", value: "actions", sortable: true, align: "start" },
      ],
              actions:{
    edit: {  title: "Editar recurso", icon: "mdi-pencil" },
    detail:{  title: "Detalle de recurso", icon: " mdi-format-list-bulleted" },
    delete:{ title: "Eliminar recurso", icon: "mdi-delete" },
    },
    };
    
  },
  methods: {
    retrieveFiles() {
      filesService
        //.getFiles()
        .getFilesByEmail(localStorage.email)
        .then((response) => {
          this.files = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
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
    },
    getColor(state) {
      if (state == "Inactivo") return "red";
      if (state == "Activo") return "green";
      else return "blue";
    },
  },
  mounted() {
    this.retrieveFiles();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
