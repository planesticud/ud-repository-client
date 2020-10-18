<template>
  <v-container class="grey lighten-5">
    <h1>{{title}}</h1>
    <v-row align="center" class="list px-3 mx-auto">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        ></v-img>

        <v-card-text>
          <h3 class="title primary--text">
            {{ text.firstName }} {{ model.firstName }}
          </h3>
          <h3 class="title primary--text">
            {{ text.lastName }} {{ model.lastName }}
          </h3>
          <h3 class="title primary--text">
            {{ text.email }} {{ model.email }}
          </h3>
          <h3 class="title primary--text">
            {{ text.userName }} {{ model.userName }}
          </h3>
          <v-icon small class="mr-2" @click="editUser(model.email)"
            >mdi-pencil</v-icon
          >
          <v-icon small @click="deleteUser(mddel.id)">mdi-delete</v-icon>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import moodle from '../../services/moodle';
import MoodleService from "../../services/moodle";
export default {
  data() {
    return {
      title: 'DETAIL USER',
      model: {},
      text: {
        firstName: "Nombre:",
        lastName: "Apellido:",
        email: "Email:",
        userName: "Nombre de usuario:",
      },
    };
  },
  methods: {
    getUser(email) {
      MoodleService.getUsersByEmail(email)
        .then((response) => {
          this.model = {
            id: response.data.users[0].id,
            userName: response.data.users[0].username,
            password: response.data.users[0].password,
            firstName: response.data.users[0].firstname,
            lastName: response.data.users[0].lastname,
            email: response.data.users[0].email,
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
      moodle
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

 <style>
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
  max-width: 970px;
  padding-right: 15px;
  padding-left: 15px;
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