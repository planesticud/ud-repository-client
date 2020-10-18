<template>
 <v-container class="grey lighten-5">
   <div>
    <h1>{{h1}}</h1>
    </div>
  <v-row align="center" class="list px-3 mx-auto">
    
    <v-col cols="12" md="8">
      <v-text-field v-model="filEmail" :label="search.label"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        {{search.button}}
      </v-btn>
      &nbsp;
      <v-btn small color="success" :href="add.route">
        {{add.button}}
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>{{title}}</v-card-title>

        <v-data-table
          :headers="headers"
          :items="files"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editFiles(item.id)">mdi-pencil</v-icon>
            <v-icon small class="mr-2" @click="detailFiles(item.id)">mdi-domain</v-icon>
            <v-icon small @click="deleteFiles(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="files.length > 0">

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
import filesService from '../../services/files';
export default {
  name: "files-list",
  data() {
    return {
      h1: 'LIST FILES',
      search: {label: 'Buscar por email', button: 'Buscar'},
      add: {button: 'Agregar', route: '/files/add'},
      files: [],
      title: "",
      headers: [
        { text: "titulo",  value: "general", align: "start", sortable: false },
         { text: "descripcion",  value: "lifecycle", align: "start", sortable: false },
        { text: "email", value: "email", sortable: false },
        { text: "url recurso", value: "anotation", sortable: false },
         { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveFiles() {
       
      
      filesService.getFiles()
        .then((response) => {
          this.files = response.data
        })
        .catch((e) => {
          console.log(e);
        });
        
    },

    refreshList() {
      this.retrieveFiles();
    },

    removeAllFiles() {
      
    },

    searchTitle() {
       filesService.getFilesByEmail(this.filEmail)
        .then((response) => {
          this.files = response.data
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
      filesService.deleteFilesById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayFiles(files) {
      return {
        id: files.id,
        title: files.title.length > 30 ? files.title.substr(0, 30) + "..." : files.title,
        description: files.description.length > 30 ? files.description.substr(0, 30) + "..." : files.description,
        status: files.published ? "Published" : "Pending",
      };
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
