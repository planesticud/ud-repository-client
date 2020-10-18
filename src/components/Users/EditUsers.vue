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
import VueFormGenerator from "vue-form-generator";
import MoodleService from "../../services/moodle";
export default {
  data() {
    return {
      model: {},
      title: 'EDIT USERS',
      result: { state: false},
      schema: {
        fields: [
           {
            type: "input",
            inputType: "text",
            label: "Id",
            model: "id",
            placeholder: "",
            featured: true,
            required: true,
            enabled:false
          },
          {
            type: "input",
            inputType: "text",
            label: "Nombre de usuario",
            model: "userName",
            placeholder: "Your name",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "text",
            label: "Contraseña",
            model: "password",
            min: 6,
            required: true,
            hint: "Minimo 6 caracteres",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "input",
            inputType: "text",
            label: "Nombres",
            model: "firstName",
            placeholder: "Your first name",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "text",
            label: "Apellidos",
            model: "lastName",
            placeholder: "Your last name",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "email",
            label: "correo electronico",
            model: "email",
            placeholder: "Your mail",
            validator: VueFormGenerator.validators.email,
          },
          {
            type: "submit",
            buttonText: "Actualizar Usuario",
            onSubmit: (model) => this.submit(model),
          },
        ],
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  methods: {
    submit(model) {
      //const user = MoodleService.mapDataUser(model);
      MoodleService.updateUsers(model)
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
  
    getUser(email){
    MoodleService.getUsersByEmail(email)
        .then((response) => {
          this.model = {
            id: response.data.users[0].id,
            userName: response.data.users[0].username,
            password: response.data.users[0].password,
            firstName: response.data.users[0].firstname,
            lastName: response.data.users[0].lastname,
            email: response.data.users[0].email
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