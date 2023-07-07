
import FilesService from "../../services/files";
import StadisticsService from "../../services/statistics";

export default {
  data() {
    const formatDate = new Date().toISOString().slice(0, 10);

    return {
      msjVal: "",
      file: [],
      
      statistic: {
        id_obj: 0,
        name_obj: "",
        ranking: 0,
        num_view: 0,
        num_download: 0,
        autor: "",
      },
     

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
      title: "Carga Recursos",
      result: { state: false },
      schema: {
        fields: [
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
                this.statistic.id_obj = response.data.id;
                this.statistic.autor = localStorage.name;
                this.statistic.name_obj = model.title;
                StadisticsService.addStadistics(this.statistic);
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
