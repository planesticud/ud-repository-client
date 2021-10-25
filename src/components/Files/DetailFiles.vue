<template>
  <v-container class="lighten-5 dtcontainer">
    <div>
      <h1>
        {{ title.text }} <v-icon :title="title.text">{{ title.icon }}</v-icon>
      </h1>
      <template v-for="item in header">
        <p :class="item.class" v-if="item" :key="item.key">
          <strong v-if="item.value" :key="item.value">{{ item.value }} </strong>
          <a
            v-if="item.key == 'location'"
            :href="model[item.key]"
            target="_blank"
          >
            Ver recurso
          </a>
          <v-chip
            v-else-if="item.key == 'state'"
            :color="getColor(model[item.key])"
            dark
          >
            {{ model[item.key] }}
          </v-chip>
          <span v-else :class="item.class">{{ model[item.key] }}</span>
        </p>
      </template>
      <!--josedavid -->
      <v-row justify-lg="center" v-show="showranking">
        <v-rating
          readonly
          v-model="rating"
          background-color="yellow"
          color="green"
          large
          half-icon="$ratingHalf"
          half-increments
          dark
        ></v-rating>
      </v-row>

      <v-row justify="center" v-show="true">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-show="dialogo"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="consultarranking"
            >
              Calificar Recurso
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Que tanto te gusto el recurso?
            </v-card-title>
            <v-rating
              v-model="rating"
              background-color="yellow"
              color="green"
              large
              half-icon="$ratingHalf"
              half-increments
              dark
            ></v-rating>
            <p>{{ rating }}</p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                No calificar
              </v-btn>
              <!-- <v-btn color="green darken-1" text @click="dialog = false">-->
              <v-btn color="green darken-1" text @click="calificarRecurso">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--end josedavid -->
    </div>
  </v-container>
</template>

<script>
import FilesService from "../../services/files";
import stadisticsService from "../../services/stadistics";
export default {
  data() {
    return {
      //josedavid
      showranking: false,
      stateranking: false,
      dialogo: true,
      dialog: false,
      stadistic: [],
      rating: 0,
      rankingold: 0,
      value: 0,
      //end josedavid
      title: { text: "Detalle de recurso", icon: "mdi-file-outline" },
      model: {},
      header: [
        { class: "blue lighten-4 text-md-center", value: "General" },
        { class: "", key: "title", value: "Título:" },
        { class: "", key: "language", value: "Idioma:" },
        { class: "", key: "description", value: "Descripción:" },
        { class: "", key: "key_words", value: "Palabras clave:" },
        { class: "blue lighten-4 text-md-center", value: "Ciclo de vida" },
        { class: "", key: "version", value: "Versión:" },
        { class: "", key: "state", value: "Estado:" },
        { class: "", key: "participants", value: "Autores:" },
        {
          class: "blue lighten-4 text-md-center",
          value: "Requerimientos tecnicos",
        },
        { class: "", key: "format", value: "Formato:" },
        { class: "", key: "size", value: "Tamaño:" },
        { class: "", key: "location", value: "Ubicacion:" },
        {
          class: "blue lighten-4 text-md-center",
          value: "Caracteristicas pedagogicas",
        },
        /* { class: "", key: "class_learning", value: "Tipo de apdrendizaje:" },*/
        {
          class: "",
          key: "type_of_educational_resource",
          value: "Clasificación de recurso educativo:",
        },
        /*{
          class: "",
          key: "level_of_interaction",
          value: "Nivel de interación:",
        },*/
        { class: "", key: "objetive_poblation", value: "Población objetivo:" },
        { class: "", key: "context", value: "Contexto:" },
        { class: "blue lighten-4 text-md-center", value: "Derechos de uso" },
        { class: "", key: "copyright", value: "Copyright:" },
        { class: "blue lighten-4 text-md-center", value: "Anotación" },
        { class: "", key: "entity", value: "Entidad:" },
        { class: "", key: "date", value: "Fecha:" },
        { class: "blue lighten-4 text-md-center", value: "Clasificación" },
        { class: "", key: "purpose", value: "Clasificación:" },
        { class: "", key: "email", value: "Correo electronico:" },
      ],

      url: "Ver recurso",
      text: {
        email: "Email:",
        general: "Nombre:",
        lifecycle: "Descripción:",
        anotation: "Recurso:",
      },
    };
  },
  methods: {
    getFile(id) {
      FilesService.getFilesByid(id)
        .then(({ data }) => {
          const response = data.filter((file) => file.id == id)[0];
          var formatDate = new Date(
            parseInt(response.date, 10)
          ).toLocaleDateString("en-US");

          this.model = {
            title: response.title,
            language: response.language,
            description: response.description,
            key_words: response.key_words,
            version: response.version,
            state: response.state,
            participants: response.participants,
            format: response.format,
            size: `${response.size / 1024 / 1024} MB`,
            location: response.location,
            requierements: response.requierements || "",
            class_learning: response.class_learning,
            type_of_educational_resource: response.type_of_educational_resource,
            level_of_interaction: response.level_of_interaction,
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
    editFile(id) {
      this.$router.push({ name: "editfiles", params: { id: id } });
    },
    deleteFile(id) {
      FilesService.deleteFilesById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getColor(state) {
      if (state == "No aprobado") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    //Jose David
    consultarranking() {
      stadisticsService
        .getStadisticsByid(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.rating = response.data[0].ranking;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    calificarRecurso() {
      stadisticsService
        .getStadisticsByid(this.$route.params.id)
        .then((response) => {
          this.stadistic = response.data;
          if (this.stadistic[0].ranking === 0) {
            this.stadistic[0].ranking = this.rating;
          } else {
            this.stadistic[0].ranking =
              (this.stadistic[0].ranking + this.ranking) / 2;
          }
          stadisticsService.updateStadistics(
            this.stadistic[0],
            this.stadistic[0].id
          );
          this.dialog = false;
          this.dialogo = false;
          this.showranking = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Jose David
  },

  mounted() {
    this.message = "";
    this.getFile(this.$route.params.id);
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

.dtcontainer {
  max-width: 1021px;
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