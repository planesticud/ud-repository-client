<template>
  <v-container class="lighten-5">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <v-row align="center" class="list px-3 mx-auto">
      <div class="panel-body">

          <h3 class="blue lighten-4 text-md-center">Recurso</h3>
        <p>&nbsp;</p>
        <input
          type="file"
          id="file"
          ref="file"
          @change="selectFile"
          title=" "
        />
        <p>&nbsp;</p>
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
import FilesService from "../../services/files";
//import AddFilesModel from "../../models/addFilesModel"
export default {
  data() {
    return {
    file: "",
    model: {
      entity: "Universidad Distrital Francisco José de Caldas",
    },
    title: "Crear recursos",
    result: { state: false },
    schema: {
      fields: [
        {
          type: "label",
          label: "<h3>General</h3>",
          model: "created",
          styleClasses: "blue lighten-4 text-md-center",
        },
        {
          type: "input",
          inputType: "text",
          label: "Título",
          model: "title",
          placeholder: "Título del recurso",
          featured: true,
          required: true,
        },
        {
          type: "select",
          inputType: "text",
          label: "Idioma",
          model: "language",
          placeholder: "Idioma del recurso",
          featured: true,
          required: true,
          values: ["Español", "Ingles", "Frances", "Aleman"],
          default: "Español",
        },
        {
          type: "input",
          inputType: "text",
          label: "Descripción",
          model: "description",
          placeholder: "Descripción del recurso",
          featured: true,
          required: true,
        },
        {
          type: "textArea",
          label: "Palabras clave",
          model: "key_words",
          hint: "Maximo 5 palabras",
          max: 200,
          placeholder: "Maximo 5 palabras separadas por ,",
          rows: 2,
        },
        {
          type: "label",
          label: "<h3>Ciclo de vida</h3>",
          model: "created",
          styleClasses: "blue lighten-4 text-md-center",
        },
        {
          type: "input",
          inputType: "number",
          label: "Versión",
          model: "version",
          min: 0,
          max: 200,
          placeholder: "Número de la version del recurso",
          featured: true,
          required: true,
        },
        {
          type: "select",
          inputType: "text",
          label: "Estado",
          model: "state",
          placeholder: "Estado del recurso",
          featured: true,
          required: true,
          values: ["Activo", "Inactivo"],
          default: "Activo",
        },
        {
          type: "textArea",
          label: "Autores",
          model: "participants",
          hint: "Autores del recurso",
          max: 200,
          placeholder: "Nombres de los autores separados por coma",
          rows: 2,
        },
        {
          type: "label",
          label: "<h3>Características pedagógicas</h3>",
          model: "created",
          styleClasses: "blue lighten-4 text-md-center",
        },
        {
          type: "select",
          inputType: "text",
          label: "Tipo de aprendizaje",
          model: "class_learning",
          placeholder:
            "El tipo de aprendizaje predominante soportado por este recurso.",
          featured: true,
          required: true,
          values: ["Activo", "Expositivo", "Combinado"],
          default: "Activo",
        },
        {
          type: "input",
          inputType: "text",
          label: "Tipo de recurso educativo",
          model: "type_of_educational_resource",
          placeholder: "Tipo de recurso educativo",
          featured: true,
          required: true,
        },
        {
          type: "select",
          inputType: "text",
          label: "Nivel de interación",
          model: "level_of_interaction",
          placeholder:
            "El tipo de aprendizaje predominante soportado por este recurso.",
          featured: true,
          required: true,
          values: ["Muy bajo", "Bajo", "Medio Alto", "Muy alto"],
          default: "Muy bajo",
        },
        {
          type: "input",
          inputType: "text",
          label: "Población objetivo",
          model: "objetive_poblation",
          placeholder:
            "El usuario principal para el que ha sido diseñado este recurso.",
          featured: true,
          required: true,
        },
        {
          type: "input",
          inputType: "text",
          label: "Contexto",
          model: "context",
          placeholder: "El entorno principal en el que se utilizará.",
          featured: true,
          required: true,
        },
        {
          type: "label",
          label: "<h3>Derechos de uso</h3>",
          model: "created",
          styleClasses: "blue lighten-4 text-md-center",
        },
        {
          type: "select",
          inputType: "text",
          label: "Copyright",
          model: "copyright",
          placeholder: "Tipo de derechos",
          featured: true,
          required: true,
          values: [
            "Atribución",
            "Atribución-CompartirIgual",
            "Atribución-SinDerivadas",
            "Atribución-NoComercial",
            "Atribución-NoComercial-CompartirIgual",
            "Atribución-NoComercial-SinDerivadas",
          ],
          default: "Atribución",
          help: `para mas información <a target="_blank" href="https://creativecommons.org/licenses/?lang=es">Creative Commons</a>`,
        },
        {
          type: "label",
          label: "<h3>Anotación</h3>",
          model: "created",
          styleClasses: "blue lighten-4 text-md-center",
        },
        {
          type: "input",
          inputType: "text",
          label: "Entidad",
          model: "entity",
          placeholder: "Entidad",
          value: "Universidad Distrital Francisco José de Caldas",
          disabled: true,
          featured: true,
          required: true,
        },
        {
          type: "input",
          inputType: "date",
          label: "Fecha",
          model: "date",
        },
        {
          type: "checklist",
          label: "Clasificación",
          model: "purpose",
          listBox: true,
          values: [
            "Agronomía, Veterinaria y afines",
            "Bellas Artes",
            "Ciencias de la Educación",
            "Ciencias de la Salud",
            "Ciencias Sociales y Humanas",
            "Economía, Administración, Contaduría y afines",
            "Ingeniería, Arquitectura, Urbanismo y afines",
            "Matemáticas y Ciencia Naturales",
          ],
          help: `para mas información <a target="_blank" href="https://creativecommons.org/licenses/?lang=es">Areas del conocimiento</a>`,
        },
        {
          type: "input",
          inputType: "text",
          label: "Correo electronico",
          model: "email",
          placeholder: "Correo electronico",
          featured: true,
          required: true,
        },
        {
          type: "submit",
          buttonText: "Crear Recurso",
          onSubmit: (model) => this.submit(model),
        },
      ],
    },
    formOptions: {
      validateAfterLoad: false,
      validateAfterChanged: true,
      validateAsync: true,
    },
  }
  },
  methods: {
    submit(model) {
      const file = this.file;
      FilesService.upload(file)
        .then(({ data }) => {
          model.format = data.format;
          model.location = data.url;
          model.size = data.size.size
          FilesService.createFile(model)
            .then((response) => {
              this.result = {
                text: `el recurso fue creado ${response.data.id}`,
                color: "green lighten-2",
                state: true,
              };
              this.model = {};
              this.file = "";
            })
            .catch((e) => {
              this.result = {
                text: `error: ${e}`,
                color: "red lighten-2",
                state: true,
              };
            });
        })
        .catch((e) => {
          this.result = {
            text: `error: ${e}`,
            color: "red lighten-2",
            state: true,
          };
        });
    },
    selectFile() {
      this.file = this.$refs.file.files[0];

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