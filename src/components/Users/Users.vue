<template>
  <v-container class="lighten-5 uscontainer">
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
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp;
    <v-data-table :headers="headers" :items="users" :search="search" >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.edit.title"
          class="mr-2"
          @click="editUser(item.id)"
          >{{ actions.edit.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detailUser(item.id)"
          >{{ actions.detail.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.delete.title"
          class="mr-2"
          @click="deleteUser(item.id)"
          >{{ actions.delete.icon }}</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import UserService from "../../services/users";

export default {
  name: "users-list",
  data() {
    return {
      h1: { text: "Listado de usuarios", icon: "mdi-account" },
      search: "",
      find: { label: "Buscar por email", button: "Buscar" },
      add: { button: "Agregar", route: "/users/add" },
      users: [],
      title: "",
      headers: [
        { text: "Nombre", value: "name", align: "start", sortable: true, class:"text-button" },
        { text: "email", value: "email", sortable: true, class:"text-button" },
        { text: "Rol", value: "rol", sortable: true, class:"text-button" },
        { text: "Actions", value: "actions", sortable: false, class:"text-button" },
      ],
      actions: {
        edit: { title: "Editar usuario", icon: "mdi-pencil" },
        detail: {
          title: "Detalle de usuario",
          icon: " mdi-format-list-bulleted",
        },
        delete: { title: "Eliminar usuario", icon: "mdi-delete" },
      },
    };
  },
  methods: {
    retrieveUsers() {
      UserService.getUsers()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveUsers();
    },

    removeAllUsers() {},

    searchTitle() {
      UserService.getUsersByEmail(this.title)
        .then((response) => {
          this.users = response.data;
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
      UserService.deleteUsersById(id)
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
        title:
          user.title.length > 30
            ? user.title.substr(0, 30) + "..."
            : user.title,
        description:
          user.description.length > 30
            ? user.description.substr(0, 30) + "..."
            : user.description,
        status: user.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>

<style scoped>
.list {
  max-width: 800px;
}
.uscontainer {
  max-width: 1024px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
