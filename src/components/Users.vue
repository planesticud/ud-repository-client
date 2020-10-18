<template>
 <v-container class="grey lighten-5">
   <div>
    <h1>{{h1}}</h1>
    </div>
  <v-row align="center" class="list px-3 mx-auto">
    
    <v-col cols="12" md="8">
      <v-text-field v-model="title" :label="search.label"></v-text-field>
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
          :items="users"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editUser(item.email)">mdi-pencil</v-icon>
            <v-icon small class="mr-2" @click="detailUser(item.email)">mdi-domain</v-icon>
            <v-icon small @click="deleteUser(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="users.length > 0">

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
import moodle from '../services/moodle';
import MoodleService from "../services/moodle";
export default {
  name: "users-list",
  data() {
    return {
      h1: 'LIST USERS',
      search: {label: 'Buscar por email', button: 'Buscar'},
      add: {button: 'Agregar', route: '/users/add'},
      users: [],
      title: "",
      headers: [
        { text: "Nombre de usuario",  value: "username", align: "start", sortable: false },
        { text: "email", value: "email", sortable: false },
        { text: "firstname", value: "firstname", sortable: false },
        { text: "ultimo acceso", value: "lastaccess", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveUsers() {
      
          
      
      MoodleService.getUsers()
        .then((response) => {
          this.users = response.data.users
        })
        .catch((e) => {
          console.log(e);
        });
        
    },

    refreshList() {
      this.retrieveUsers();
    },

    removeAllUsers() {
      
    },

    searchTitle() {
       MoodleService.getUsersByEmail(this.title)
        .then((response) => {
          this.users = response.data.users
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editUser(id) {
      this.$router.push({ name: "editusers", params: { id: id } });
    },
        detailUser(id) {
      this.$router.push({ name: "detailusers", params: { id: id } });
    },
    deleteUser(id) {
      moodle.deleteUsersById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayUser(user) {
      return {
        id: user.id,
        title: user.title.length > 30 ? user.title.substr(0, 30) + "..." : user.title,
        description: user.description.length > 30 ? user.description.substr(0, 30) + "..." : user.description,
        status: user.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
