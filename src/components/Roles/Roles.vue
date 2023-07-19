<template>
  <v-container class="lighten-5 uscontainer">
    <br />
    <br />
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
      <v-spacer> </v-spacer>
      <v-btn small color="success" :href="add.route">
        {{ add.button }}
      </v-btn>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp;
    <v-data-table :headers="headers" :items="roles" :search="search">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.edit.title"
          class="mr-2"
          @click="editRole(item.id)"
          >{{ actions.edit.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detailRole(item.name)"
          >{{ actions.detail.icon }}</v-icon
        >
        <v-icon
          medium
          :title="actions.delete.title"
          class="mr-2"
          @click="deleteRole(item.id)"
          >{{ actions.delete.icon }}</v-icon
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import RoleService from "../../services/roles";

export default {
  name: "roles-list",
  data() {
    return {
      h1: { text: "Listado de roles", icon: "mdi-account" },
      search: "",
      find: { label: "Buscar por email", button: "Buscar" },
      add: { button: "Agregar", route: "/roles/add" },
      roles: [],
      title: "",
      headers: [
        {
          text: "Nombre",
          value: "name",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        { text: "Descripción", value: "description", sortable: true, class: "text-button" },
        { text: "Acción", value: "action", sortable: true, class: "text-button" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-button",
        },
      ],
      actions: {
        edit: { title: "Editar rol", icon: "mdi-pencil" },
        detail: {
          title: "Detalle de rol",
          icon: " mdi-format-list-bulleted",
        },
        delete: { title: "Eliminar rol", icon: "mdi-delete" },
      },
    };
  },
  methods: {
    retrieveRoles() {
      RoleService.getRoles()
        .then((response) => {
          this.roles = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveRoles();
    },

    removeAllRoles() {},

    searchTitle() {
      RoleService.getRolesByEmail(this.title)
        .then((response) => {
          this.roles = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editRole(id) {
      this.$router.push({ name: "editroles", params: { id: id } });
    },
    detailRole(id) {
      this.$router.push({ name: "detailroles", params: { id: id } });
    },
    deleteRole(id) {
      RoleService.deleteRolesById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayRole(role) {
      return {
        id: role.id,
        title:
          role.title.length > 30
            ? role.title.substr(0, 30) + "..."
            : role.title,
        description:
          role.description.length > 30
            ? role.description.substr(0, 30) + "..."
            : role.description,
        status: role.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveRoles();
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
