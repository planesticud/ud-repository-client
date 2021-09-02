<template>
  <v-container class="lighten-5">
    <h1>{{title}}</h1>
    <v-row align="center" class="list px-3 mx-auto">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        ></v-img>

        <v-card-text>
          <h3 class="title primary--text">
            {{ text.name }} {{ model.name }}
          </h3>
          <h3 class="title primary--text">
            {{ text.rol }} {{ model.rol }}
          </h3>
          <h3 class="title primary--text">
            {{ text.email }} {{ model.email }}
          </h3>
          <v-icon small class="mr-2" @click="editUser(model.id)"
            >mdi-pencil</v-icon
          >
          <v-icon small @click="deleteUser(mddel.id)">mdi-delete</v-icon>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../../services/users";
export default {
  data() {
    return {
    title: 'Detalle de usuario',
    model: {},
    text: {
      name: "Nombres:",
      rol: "Rol:",
      email: "Email:",
    },
  };
  },
  methods: {
    getUser(id) {
      UserService.getUsersByid(id)
        .then((response) => {
          this.model = {
            id: response.data[0].id,
            name: response.data[0].name,
            rol: response.data[0].rol,
            email: response.data[0].email,
          };
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editUser(id) {
      this.$router.push({ name: "editusers", params: { id: id } });
    },
    deleteUser(id) {
      UserService
        .deleteUsersById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.message = "";
    this.getUser(this.$route.params.id);
  },
};
</script>

 <style scoped>
html {
  font-family: Tahoma;
  font-size: 14px;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

.container {
  max-width: 1024px;
  padding-right: 5%;
  padding-left: 5%;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

fieldset {
  border: 0;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}

.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;

  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 15px;
}
</style>