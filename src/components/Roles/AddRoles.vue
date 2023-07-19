<template>
  <v-container class="lighten-5 aduscontainer">
    <br/> <br/>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <v-row align="center" class="list px-3 mx-auto">
      <div class="panel-body">
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
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

import RoleService from "../../services/roles";

export default {
  data() {
    return {
      model: {},
      title: "Crear rol",
      result: { state: false },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Acción",
            model: "action",
            placeholder: "Escriba la accion que desea activar",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "text",
            label: "Descripción",
            model: "description",
            placeholder: "Escriba la descripcion de la accion que desea activar",
            featured: true,
            required: true,
          },
          {
            type: "select",
            inputType: "text",
            label: "Rol",
            model: "name",
            placeholder: "Rol del rol en la plataforma",
            featured: true,
            required: true,
            values: ["VISUALIZADOR", "CREADOR", "EVALUADOR", "ADMINISTRADOR",],
            default: "ESTUDIANTE",
            help: `rol que tendra el rol en la plataforma`,
          },
          {
            type: "submit",
            buttonText: "Crear Rol",
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
      RoleService.createRole(model)
        .then(({ data }) => {
          this.result = {
            text: `el rol ${data[0].name} fue creado con el id ${data[0].id}`,
            color: "green lighten-2",
            state: true,
          };
          this.model = {};
        })
        .catch((e) => {
          this.result = {
            text: `error: ${e}`,
            color: "red lighten-2",
            state: true,
          };
        });
    },
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
  max-width: 700px;
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