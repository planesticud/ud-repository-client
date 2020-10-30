<template>
 <v-container class="grey lighten-5">
         <div>
    <h1>{{title}}</h1>
    </div>
  <v-row align="center" class="list px-3 mx-auto">
    <div class="panel-body">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions" >

      </vue-form-generator>
    </div>
    <div>
      <v-alert v-if="result.state" border="top" :color="result.color" dark>
        {{ result.text }}
      </v-alert>
    </div>
  </v-row>
 </v-container>
</template>

<script>
import UsersService from "../../services/users";
import UserModel from "../../models/userModel"
export default {
  data() {
    return UserModel.UpdateUsersModel;
  },
  methods: {
    submit(model) {

      UsersService.updateUser(model, model.id)
        .then(({ data }) => {
        
            this.result = {
              text: `el usuario ${data} fue actualizado con el id ${data}`,
              color: "green lighten-2",
              state: true
            }
            this.model = {};
        
          
        })
        .catch((e) => {
          this.result = {
              text: `error: ${e}`,
              color: "red lighten-2",
              state: true
            };
        });
    },
  
    getUser(id){
    UsersService.getUsersByid(id)
        .then((response) => {
          console.log(response.data)
          this.model = {
            id: response.data[0].id,
            name: response.data[0].name,
            rol: response.data[0].rol,
            email: response.data[0].email
            }
        
        })
        .catch((e) => {
          console.log(e);
        });
  }
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