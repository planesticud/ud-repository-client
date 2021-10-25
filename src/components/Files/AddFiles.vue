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
          Para cargar el recurso tenga en cuenta que el tamaño máximo es de 100
          MB y las siguientes extensiones en los archivos a cargar:
          <br />Imagen (JPG, PNG) <br />Página Web (HTML, htm) <br />Comprimido
          (Zip, Rar, Tar.Gz) <br />Documento portable (PDF, Word, Excel)
          <br />Video (WMV, AVI, MOV, MPG) *Audio (WAV, MP3)
        </p>
        <v-file-input
          v-model="file"
          :rules="rules"
          show-size
          counter
          required
          label="Adjuntar archivo"
          accept="image/*, audio/*, video/*, application/pdf, .docx, .xlsx, 
                    application/zip, application/rar, application/rar, application/tar, 
                    application/docx, application/vnd.ms-excel, application/msword, 
                    application/vnd.ms-powerpoint, text/html, text/htm"
        ></v-file-input>

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
        <v-dialog v-model="dialog" max-width="350">
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
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog v-model="dialog_der" persistent max-width="70%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Autorización de derechos de autor
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">AUTORIZACIÓN DE DERECHOS DE AUTOR </span>
            </v-card-title>
            <p></p>

            <v-card-text class="textcent">
              <span class="textder"
                >PRIMERO. -ALCANCE DE LA AUTORIZACIÓN:
              </span>
              <br />
              <span class="textcent">
                La presente autorización, no exclusiva, para usos académicos y
                promocionales de la investigación de la Universidad Distrital
                Francisco José de Caldas, se otorga para: •La reproducción por
                cualquier forma o procedimiento, en especial para medios
                impresos o electrónicos; •La inclusión en bases de datos de la
                Universidad Distrital Francisco José de Caldas o de entidades
                aliadas para fines académicos; •La inclusión de referencia en
                catálogos, bases de datos e índices bibliográficos, jornadas de
                socialización y portales web de la Universidad Distrital
                Francisco José de Caldas; •La comunicación pública por cualquier
                medio que sirva para difundir las palabras, los signos, los
                sonidos o las imágenes en canales de difusión de la Universidad
                Distrital Francisco José de Caldas; •La puesta a disposición del
                público ya sea en cualquier red informática o en Internet de la
                Universidad Distrital Francisco José de Caldas; •La distribución
                pública de ejemplares de la obra para la comunidad académica de
                la Universidad Distrital Francisco José de Caldas; •La
                adaptación, traducción, modificación o arreglos, u otra
                transformación de la obra para los usos académicos y de
                investigación de la Universidad Distrital Francisco José de
                Caldas; •La inclusión en soportes multimedia, colecciones,
                recopilaciones, o en general, servir de base para cualquier otra
                obra derivada.
              </span>
              <br />
              <span class="textder">PARÁGRAFO ÚNICO:</span>
              <span class="textcent">
                La presente autorización de los anteriores derechos mencionados
                en este artículo implica, de igual forma, el respeto al derecho
                moral de autor, bajo el reconocimiento del autor y su obra y a
                oponerse a toda deformación o desfiguración de la misma. Sin
                embargo, los cambios, adaptaciones y transformaciones que
                realice la Universidad son consentidos y no afectarán ningún
                derecho moral.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"
                >SEGUNDA. -DURACIÓN Y CAMPO DE APLICACIÓN:</span
              >
              <br />
              <span class="textcent">
                presente autorización se otorga a título gratuito, por una
                duración de 70 años de acuerdo con el artículo 4º de la Ley 1915
                de 2018, contados a partir del presente escrito y sin ningún
                tipo de limitación dentro del ámbito territorial, para los fines
                académicos o de difusión científica.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"> TERCERA. -DECLARACIÓN DE LEGALIDAD: </span>
              <br />
              <span class="textcent">
                Manifiesto que detento la titularidad originaria de los derechos
                patrimoniales sobre la obra que autorizo mediante el presente
                documento y, por lo tanto, no infrinjo o usurpo derechos de
                autor de terceros. Además, manifiesto que la obra no contiene
                citas ni transcripciones de otras obras protegidas por fuera de
                los límites autorizados por la ley, según los usos honrados para
                los fines previstos; ni tampoco contiene declaraciones
                difamatorias contra terceros, respetando su derecho a la imagen,
                intimidad, buen nombre y demás derechos Constitucionales.
                [Adicionalmente, afirmo que las tablas, figuras, imágenes,
                videos y sonidos también son originales, y en aquellos casos que
                se han tomado de otras contribuciones y que han sido
                reproducidas total o parcialmente en el artículo autorizado,
                cuentan con la debida autorización escrita de los titulares de
                los derechos en el caso que sea necesario].
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">CUARTA. -INDEMNIDAD:</span>
              <br />
              <span class="textcent">
                Manifiesto que los derechos sobre la obra objeto de la presente
                autorización no han sido cedidos con antelación y que sobre
                ellos no pesa ningún gravamen ni limitación en su uso o
                utilización. Por lo anterior, manifiesto que, en caso de
                presentarse cualquier reclamación o acción por parte de un
                tercero en cuanto a los derechos de autor sobre el recurso
                digital en cuestión, asumiré toda la responsabilidad y saldré en
                defensa de los derechos que consagra la autorización respectiva;
                para los efectos la Universidad Distrital Francisco José de
                Caldas actúa como un tercero de buena fe.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"
                >QUINTA -IMÁGENES DE TERCEROS Y DE MENORES DE EDAD:</span
              >
              <br />
              <span class="textcent">
                Manifiesto que las imágenes que han sido captadas en fotografías
                y/o videos y/o de terceros o de menores de edad, incluidos en la
                obra la cual autorizado o que soportan el mismo, cuentan con la
                debida autorización, atendiendo que las mimas tienen por
                finalidad destinarlas a la promoción institucional y académica
                en los medios que la Universidad Distrital Francisco José de
                Caldas considere pertinentes.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">SEXTA- LEGISLACIÓN APLICABLE: </span>
              <br />
              <span class="textcent">
                La legislación aplicable para efectos de interpretar la presente
                autorización será la Decisión Andina 351 de 1993, la Ley 23 de
                1982, Ley 1915 de 2018 y el artículo 181 de la Ley 1955 de 2019.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">SÉPTIMA. -NOTIFICACIONES: </span>
              <br />
              <span class="textcent">
                Manifiesto que, para todos los efectos relacionados con la
                ejecución de esta autorización, recibiré notificaciones y
                correspondencia en la dirección de correo electrónico registrada
                en el repositorio.
              </span>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog_der = acepto(false)"
              >
                No Acepto
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog_der = acepto(true)"
              >
                Acepto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="auto">
        <template>
          <v-btn
            :disabled="!swi.activar"
            type="submit"
            color="primary"
            @click="submit(model)"
          >
            Crear Recurso
          </v-btn>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilesService from "../../services/files";
import StadisticsService from "../../services/stadistics";

export default {
  data() {
    const formatDate = new Date().toISOString().slice(0, 10);

    return {
      msjVal: "",
      file: [],
      //beginning josedavid
      stadistic: {
        id_obj: 0,
        name_obj: "",
        ranking: 0,
        num_view: 0,
        num_download: 0,
        autor: "",
      },
      //end josedavid

      rules: [
        (value) =>
          !value || value.size < 100000000 || "El tamaño máximo son 100 MB!",
      ],
      progress: 0,
      currentFile: undefined,
      dialog: false,
      dialog_der: false,
      model: {
        entity: "Universidad Distrital Francisco José de Caldas",
        email: localStorage.email,
        state: "Por aprobar",
        date: formatDate,
      },
      swi: {
        activar: false,
        name: "No, Acepto",
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
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
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
            help: "Escriba de manera breve el objetivo del recurso, qué intención tiene para el aprendizaje de la temática en particular que desea compartir. Se recomienda no superar los 100 caracteres.",
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
            min: 1,
            max: 200,
            placeholder: "Número de la versión del recurso",
            featured: true,
            required: true,
            help: "Seleccione la versión del recurso. En caso que lo desee reemplazar, podrá cargarlo en este mismo espacio y actualizar la versión correspondiente.",
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
            help: "Relacione su nombre completo como autor intelectual del recurso a cargar. En caso de ser varios autores, podrá incluir los que desee y separarlos por coma (,). Aclaración: tenga en cuenta que la relación de autor en esta plataforma, no será considerada en la descarga del recurso. ",
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
            help: "Seleccione la clasificación de su recurso.",
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
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
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
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
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
            help: "Seleccione el área de conocimiento con el cual está relacionado su recurso. Puede seleccionar varias opciones si así lo considera",
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
            type: "label",
            label: "<h3>Derechos de uso</h3>",
            model: "created",
            styleClasses: "blue lighten-4 text-md-center",
          },
          {
            type: "label",
            label: `<p>Actuando en nombre propio como autor o representante del contenido creado <strong class="textder"> autorizo previa y expresamente </strong> a la Universidad Distrital Francisco José de Caldas para la utilización de la obra adjunta, conceptualización, de mi autoría, bajo la licencia que se relaciona a continuación:</p>`,
            model: "texto1",
            styleClasses: "lighten-4 text-md-left",
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
            selectOptions: {
              noneSelectedText: "Haga clic para seleccionar una opción",
            },
            default: "Atribución",
            help: `para mas información <a target="_blank" href="https://co.creativecommons.net/tipos-de-licencias/">Creative Commons</a>`,
          },
          /*{
            type: "submit",
            buttonText: "Crear Recurso",
            onSubmit: (model) => this.submit(model),
          },
          */
        ],
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  methods: {
    submit(model) {
      if (this.validadata(model)) {
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
                //josedavid
                this.stadistic.id_obj = response.data.id;
                this.stadistic.autor = localStorage.name;
                this.stadistic.name_obj = model.title;
                StadisticsService.addStadistics(this.stadistic);
                //end josedavid
                this.dialog = true;
                this.result = {
                  text: `el recurso fue creado ${response.data.id}`,
                  color: "green lighten-2",
                  state: true,
                };
                this.model = {};
                this.file = [];
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
      } else {
        this.dialog = true;
        this.result = {
          text:
            "Verifique los siguientes campos obligatorios para poder crear el recurso: " +
            this.msjVal,
          color: "red lighten-2",
          state: false,
        };
      }
    },

    validadata(model) {
      this.msjVal = "";
      let x = true;
      if (!model.language) {
        x = false;
        this.msjVal = "idioma, " + this.msjVal;
      }
      if (!model.description) {
        x = false;
        this.msjVal = "descripción, " + this.msjVal;
      }
      if (!model.key_words) {
        x = false;
        this.msjVal = "palabras clave, " + this.msjVal;
      }
      if (!model.title) {
        x = false;
        this.msjVal = "título, " + this.msjVal;
      }
      if (!model.version) {
        x = false;
        this.msjVal = "versión, " + this.msjVal;
      }
      if (!model.state) {
        x = false;
        this.msjVal = "estado, " + this.msjVal;
      }
      if (!model.participants) {
        x = false;
        this.msjVal = "autores, " + this.msjVal;
      }
      if (!model.type_of_educational_resource) {
        x = false;
        this.msjVal = "tipo de recurso educativo, " + this.msjVal;
      }
      if (!model.objetive_poblation) {
        x = false;
        this.msjVal = "población objetivo, " + this.msjVal;
      }

      if (!model.context) {
        x = false;
        this.msjVal = "contexto, " + this.msjVal;
      }
      if (!model.purpose) {
        x = false;
        this.msjVal = "clasificación, " + this.msjVal;
      }
      if (!model.copyright) {
        x = false;
        this.msjVal = "copyright, " + this.msjVal;
      }

      if (this.file) {
        if (this.file.size > 100000000) {
          x = false;
          this.msjVal = "archivo excede el máximo , " + this.msjVal;
        }
      } else {
        x = false;
        this.msjVal = "adjuntar archivo, " + this.msjVal;
      }
      return x;
    },

    acepto(valor) {
      this.swi.activar = valor;
      if (this.swi.activar) {
        this.swi.name = "Si, Acepto";
      } else {
        this.swi.name = "No, Acepto";
        console.log("Entro No");
      }
      return false;
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

.textder {
  font-size: 14px;
  font-weight: bold;
  color: black;
}

.textcent {
  font-size: 14px;
  color: black;
}
</style>