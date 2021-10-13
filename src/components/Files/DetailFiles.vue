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
            <v-icon small class="mr-2" title="Copiar recurso"
              >mdi-checkbox-multiple-blank-outline</v-icon
            >
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
    </div>
  </v-container>
</template>

<script>
import FilesService from "../../services/files";
export default {
  data() {
    return {
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