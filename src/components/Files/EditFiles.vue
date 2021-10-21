<template>
  <v-container class="lighten-5 efcontainer">
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

    <!-- Dilog confirmacion-->
    <v-dialog v-model="dialog" width="30%" persistent>
      <v-card>
        <v-card-title>Confirmar Acción</v-card-title>
        <v-card-text>¿Desea guardar los cambios?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="submit(mymodel)">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog --->

    <!-- Dilog confirmacion resultado-->
    <v-dialog v-model="result.state" width="30%" dark persistent>
      <v-card>
        <v-card-title>Resultado</v-card-title>
        <v-card-text> {{ result.text }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="volver()">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog resultado--->
  </v-container>
</template>

<script>
import FilesService from "../../services/files";
//import EditFilesModel from "../../models/editFilesModel"
export default {
  data() {
    return {
      file: "",
      model: {
        entity: "Universidad Distrital Francisco José de Caldas",
        state: "Por aprobar",
      },
      title: "Editar recursos",
      result: { state: false },

      dialog: false,
      mymodel: { entity: "Universidad Distrital Francisco José de Caldas" },

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
            placeholder: "Titulo del recurso",
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
            values: ["Español", "Inglés", "Francés", "Alemán", "Portugués"],
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
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
            hint: "Máximo 5 palabras",
            max: 200,
            placeholder: "Máximo 5 palabras separadas por ,",
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
            min: 1,
            max: 200,
            placeholder: "Número de la versión del recurso",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "text",
            label: "Estado",
            model: "state",
            placeholder: "Estado del del recurso",
            featured: true,
            required: true,
            disabled: true,
          },
          {
            type: "textArea",
            label: "Autores",
            model: "participants",
            hint: "Autores del recurso",
            max: 200,
            placeholder: "Nombres de los utores separados por coma",
            rows: 2,
          },
          {
            type: "label",
            label: "<h3>Características pedagógicas</h3>",
            model: "created",
            styleClasses: "blue lighten-4 text-md-center",
          },
          /*
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
              selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
            default: "Activo",
          },
          */
          {
            type: "select",
            inputType: "text",
            label: "Clasificación de recurso educativo",
            model: "type_of_educational_resource",
            placeholder: "Seleccione la tipología de su recurso",
            featured: true,
            required: true,
            values: [
              "Infografía",
              "Mapa conceptual",
              "Grabación de voz propia",
              "Podcast",
              "Animación",
              "Videotutorial",
              "Vídeo infográfico",
              "Video motion grafics",
              "Video explicativo (grabación de autor)",
              "Manual",
              "Plantilla",
              "Documento de investigación",
              "Documento de trabajo",
              "Documento interactivo",
            ],
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
            help: "Seleccione la tipología de su recurso.",
          },
          /* {
            type: "select",
            inputType: "text",
            label: "Nivel de interación",
            model: "level_of_interaction",
            placeholder:
              "El tipo de aprendizaje predominante soportado por este recurso.",
            featured: true,
            required: true,
            values: ["Muy bajo", "Bajo", "Medio Alto", "Muy alto"],
              selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
            default: "Muy bajo",
          },*/
          {
            type: "select",
            inputType: "text",
            label: "Población objetivo",
            model: "objetive_poblation",
            featured: true,
            required: true,
            values: ["Estudiantes", "Docentes", "Investigadores"],

            help: "Seleccione la población a quien va dirigido este recurso.",
          },
          {
            type: "select",
            inputType: "text",
            label: "Contexto",
            model: "context",
            featured: true,
            required: true,
            values: [
              "Educación superior",
              "Educación tecnológica",
              "Educación media",
              "Educación inicial",
            ],

            help: "Entorno educativo en el que se utilizara el recurso.",
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
          /*{
            type: "input",
            inputType: "date",
            label: "Fecha",
            model: "date",
          },*/
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
            disabled: true,
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
              "Atribución-NoComercial",
              "Atribución-NoComercial-CompartirIgual",
              "Atribución-CompartirIgual",
            ],

            default: "Atribución",
            help: `para mas información <a target="_blank" href="https://co.creativecommons.net/tipos-de-licencias/">Creative Commons</a>`,
          },
          {
            type: "submit",
            buttonText: "Actualizar Recurso",
            // onSubmit: (model) => this.submit(model),
            onSubmit: (model) => this.editar(model),
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
      this.dialog = false;
      const id = this.$route.params.id;
      model.state = "Por aprobar";
      FilesService.updateFiles(model, id)
        .then(({ data }) => {
          this.result = {
            text: `el recurso ${this.model.title} ${data}`,
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

    editar(model) {
      this.dialog = true;
      this.mymodel = model;
    },

    volver() {
      this.$router.push({ name: "files" });
    },

    getFile(id) {
      FilesService.getFilesByid(id)
        .then(({ data }) => {
          const response = data.filter((file) => file.id == id)[0];
          const formatDate = new Date(parseInt(response.date, 10))
            .toISOString()
            .slice(0, 10);
          this.model = {
            title: response.title,
            language: response.language,
            description: response.description,
            key_words: response.key_words,
            version: response.version,
            state: response.state,
            participants: response.participants,
            format: response.format,
            size: response.size,
            requierements: response.requierements || "",
            // class_learning: response.class_learning,
            type_of_educational_resource: response.type_of_educational_resource,
            //level_of_interaction: response.level_of_interaction,
            objetive_poblation: response.objetive_poblation,
            context: response.context,
            cost: response.cost || "",
            copyright: response.copyright,
            entity: response.entity,
            date: formatDate,
            purpose: response.purpose,
            email: response.email,
          };
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.message = "";
    this.getFile(this.$route.params.id);
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

.efcontainer {
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