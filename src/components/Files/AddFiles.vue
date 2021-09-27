<template>
  <v-container class="lighten-5 container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <v-row align="center" class="list px-3 mx-auto">
      <div class="panel-body">
        <h3 class="blue lighten-4 text-md-center">Recurso</h3>
        <p>&nbsp;</p>
        <p>
          Para cargar el recurso tenga en cuenta las siguientes extensiones en
          los archivos a cargar: (imagen, audio, video, Zip, Rar, Tar, HTML,
          htm, PDF, Word, Excel)
        </p>
        <input
          type="file"
          id="file"
          ref="file"
          @change="selectFile"
          title=" "
          label="Adjuntar archivo"
          accept="image/*, audio/*, video/*, application/pdf, .docx, .xlsx, 
                    application/zip, application/rar, application/rar, application/tar, 
                    application/docx, application/vnd.ms-excel, application/msword, 
                    application/vnd.ms-powerpoint, text/html, text/htm"
        />

        <p>&nbsp;</p>

        <div v-if="currentFile">
          <v-progress-linear
            v-model="progress"
            color="light-blue"
            height="10"
            value="10"
            striped
          >
            <template>
              <strong>{{ progress }}%</strong>
            </template>
          </v-progress-linear>
          <br />
        </div>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
        </vue-form-generator>
      </div>
      <div>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline"> Resultado </v-card-title>
            <v-card-text>
              <v-alert
                v-if="result.state"
                border="top"
                :color="result.color"
                dark
              >
                {{ result.text }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-if="result.state"
                color="green darken-1"
                text
                @click="volver()"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-alert
                v-if="!result.state"
                border="top"
                :color="result.color"
                dark
              >
                {{ result.text }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-if="!result.state" @click="cerrar()"> Cerrar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import FilesService from "../../services/files";

//import AddFilesModel from "../../models/addFilesModel"
export default {
  data() {
    const formatDate = new Date().toISOString().slice(0, 10);
    return {
      file: "",
      progress: 0,
      currentFile: undefined,
      dialog: false,
      model: {
        entity: "Universidad Distrital Francisco José de Caldas",
        email: localStorage.email,
        state: "Por aprobar",
        date: formatDate,
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
            placeholder:
              "Escriba el título del recurso que sea preciso, llamativo y no se extienda más de 100 caracteres",
            featured: true,
            required: true,
            help: "Nombre asignado al recurso educativo",
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
            default: "Español",
            help: "Seleccione el idioma en el cual está escrito su recurso",
          },
          {
            type: "textArea",
            label: "Descripción",
            model: "description",
            hint: "Se recomienda no superar los 100 caracteres.",
            max: 120,
            placeholder: "Descripción del recurso",
            featured: true,
            required: true,
            help: "Escriba de manera breve el objetivo del recurso, qué intención tiene para el aprendizaje de la temática en particular que desea compartir.",
          },
          {
            type: "textArea",
            label: "Palabras clave",
            model: "key_words",
            hint: "Máximo 5 palabras",
            max: 200,
            placeholder: "Máximo 5 palabras separadas por ,",
            rows: 2,
            help: "Relacione las palabras clave con las que su recurso podrá ser filtrado de manera rápida y precisa en la búsqueda al interior del repositorio.",
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
            placeholder: "Número de la versión del recurso",
            featured: true,
            required: true,
            help: "Seleccione la versión del recurso. En caso que lo desee reemplazar, pordrá cargarlo en este mismo espacio y actualizar la versión correspondiente.",
          },
          {
            type: "input",
            inputType: "text",
            label: "Estado",
            model: "state",
            placeholder: "Estado del recurso",
            featured: true,
            required: true,
            disabled: true,
            help: "Estado o condición en el que se encuentra el recurso educativo en su ciclo de producción.",
          },
          {
            type: "textArea",
            label: "Autores",
            model: "participants",
            hint: "Autores del recurso",
            max: 200,
            placeholder: "Nombres de los autores separados por coma",
            rows: 2,
            help: "Relacione su nombre completo como autor intelectual del recurso a carga. ",
          },
          {
            type: "label",
            label: "<h3>Características pedagógicas</h3>",
            model: "created",
            styleClasses: "blue lighten-4 text-md-center",
          },
          /* {
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
            help: "Tipo de interactividad que permite el recurso educativo. Sus atributos definen el esquema del vocabulario controlado que se está utilizando. ",
          },*/
          {
            type: "select",
            inputType: "text",
            label: "Tipo de recurso educativo",
            model: "type_of_educational_resource",
            placeholder: "Tipo de recurso educativo",
            featured: true,
            required: true,
            values: [
              "OVA",
              "Video",
              "Videotutorial",
              "Manual",
              "Plantilla",
              "Infografía, podcast",
            ],
            help: "Los tipos de recursos mediante los cuales se muestra el contenido del recurso.",
          },
          /*{
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
            help: `Nivel de complejidad del contenido del recurso educativo.`,
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
              "Educación Inicial",
            ],
            help: "Entorno educativo en el que se utilizara el recurso.",
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
            help: `para mas información <a target="_blank" href="https://co.creativecommons.net/tipos-de-licencias/">Creative Commons</a>`,
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
         /* {
            type: "input",
            inputType: "text",
            label: "Fecha",
            model: "date",
            disabled: true,
          },*/
          {
            type: "checklist",
            label: "Clasificación",
            model: "purpose",
            listBox: true,
            values: [
              "Agronomía, Veterinaria y afines",
              "Artes",
              "Ciencias y Educación",
              "Ciencias de la Salud",
              "Ciencias Sociales y Humanas",
              "Economía, Administración, Contaduría y afines",
              "Ingeniería, Arquitectura, Urbanismo y afines",
              "Matemáticas y Ciencia Naturales",
            ],
            help: "Areas donde se determina que pertence el recurso",
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
            help: "Correo de quien clasifica y sube el recurso",
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
        // validateAsync: true,
      },
    };
  },
  methods: {
    submit(model) {
      const file = this.file;
      this.progress = 0;
      this.currentFile = true;
      FilesService.upload(file, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then(({ data }) => {
          model.format = data.format;
          model.location = data.url;
          model.size = data.size.size;
          FilesService.createFile(model)
            .then((response) => {
              this.dialog = true;
              this.result = {
                text: `el recurso fue creado ${response.data.id}`,
                color: "green lighten-2",
                state: true,
              };
              this.model = {};
              this.file = "";
              this.progress = 0;
              this.currentFile = undefined;
            })
            .catch((e) => {
              this.dialog = true;
              this.result = {
                text: `error: ${e}`,
                color: "red lighten-2",
                state: false,
              };
            });
        })
        .catch((e) => {
          this.dialog = true;
          this.result = {
            text: `error: ${e}`,
            color: "red lighten-2",
            state: false,
          };
        });
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    volver() {
      this.$router.push({ name: "files" });
    },
    cerrar() {
      this.dialog = false;
    },
  },
};
</script>

 <style >
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