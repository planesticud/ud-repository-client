<template>
  <v-container class="lighten-5 container">
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
      <p class="blue lighten-4 text-md-center">
        <strong>Revisión</strong>
      </p>
      <p>
        <v-switch
          :v-model="swi.activar"
          :input-value="swi.activar"
          :label="`${swi.name}`"
          @change="(value) => changeState(value)"
        ></v-switch>
      </p>
      <p>
        <v-flex xs12>
          <v-textarea
            solo
            name="txtObs"
            label="Observaciones:"
            v-model="modrev.observacion"
          ></v-textarea>
        </v-flex>
        <v-btn type="submit" color="info" @click="editar(model)"
          >Guardar Revisión</v-btn
        >
      </p>
    </div>
    <!-- Dilog confirmacion-->
    <v-dialog v-model="dialog" width="30%" persistent>
      <v-card>
        <v-card-title>¿Desea guardar los cambios?</v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="guardar(model, modrev)">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog --->
    <!-- Dialog de resultados-->
    <v-dialog v-model="resdialog" max-width="290">
      <v-card>
        <v-card-title class="headline"> Resultado </v-card-title>
        <v-card-text>
          <v-alert v-if="result.state" border="top" :color="result.color" dark>
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
      </v-card>
    </v-dialog>
    <!--- fin dialog resultados-->
  </v-container>
</template>

<script>
import FilesService from "../../services/files";
import PublicarService from "../../services/publicar";

export default {
  data() {
    return {
      title: { text: "Revisión de recurso", icon: "mdi-file-outline" },
      model: {},
      modrev: {
        idobj: "",
        revisor: "",
        observacion: "",
        estado: "",
      },
      result: { state: false },
      mymodel: {},
      dialog: false,
      resdialog: false,
      header: [
        { class: "blue lighten-4 text-md-center ", value: "General" },
        { class: "", key: "title", value: "Titulo:" },
        { class: "", key: "language", value: "Idioma:" },
        { class: "", key: "description", value: "Descripción:" },
        { class: "", key: "key_words", value: "Palabras clave:" },
        {
          class: "blue lighten-4 text-md-center",
          value: "Caracteristicas pedagogicas",
        },
        /*{ class: "", key: "class_learning", value: "Tipo de apdrendizaje:" },*/
        {
          class: "",
          key: "type_of_educational_resource",
          value: "Clasificación de recurso educativo:",
        },
       /* {
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
        {
          class: "blue lighten-4 text-md-center",
          value: "Requerimientos tecnicos",
        },
        { class: "", key: "format", value: "Formato:" },
        { class: "", key: "size", value: "Tamaño:" },
        { class: "", key: "location", value: "Ubicacion:" },
        { class: "blue lighten-4 text-md-center", value: "Ciclo de vida" },
        { class: "", key: "version", value: "Versión:" },
        { class: "", key: "state", value: "Estado:" },
        { class: "", key: "participants", value: "Autores:" },
      ],

      url: "Ver recurso",
      text: {
        email: "Email:",
        general: "Nombre:",
        lifecycle: "Descripción:",
        anotation: "Recurso:",
      },

      swi: {
        activar: false,
        name: "No aprobado",
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
           // class_learning: response.class_learning,
            type_of_educational_resource: response.type_of_educational_resource,
          //  level_of_interaction: response.level_of_interaction,
            objetive_poblation: response.objetive_poblation,
            context: response.context,
            cost: response.cost || "",
            copyright: response.copyright,
            entity: response.entity,
            date: formatDate,
            purpose: response.purpose,
            email: response.email,
          };
          if (response.state == "Aprobado") {
            this.changeState(true);
          } else {
            this.changeState(false);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editar(model) {
      this.dialog = true;
      this.mymodel = model;
    },
    guardar(model, modrev) {
      this.dialog = false;
      this.resdialog = true;
      const id = this.$route.params.id;
      this.modrev.idobj = "" + id;
      this.modrev.revisor = localStorage.email;
      const titu = this.model.title;
      FilesService.updateFiles(model, id)
        .then(({ dataupd }) => {
          PublicarService.createPublicar(modrev)
            .then(({ data }) => {
              this.result = {
                text: `la revisión del recurso ${titu} fue creado con el id ${data[0].id} `,
                color: "green lighten-2",
                state: true,
              };
            })
            .catch((e1) => {
              this.result = {
                text: `error e1: ${e1}`,
                color: "red lighten-2",
                state: true,
              };
            });
          console.log(dataupd);
        })
        .catch((e2) => {
          this.result = {
            text: `error e2: ${e2}`,
            color: "red lighten-2",
            state: true,
          };
        });
      this.model = {};
      this.modrev = {};
    },
    volver() {
      this.$router.push({ name: "revisar" });
    },
    getColor(state) {
      if (state == "No aprobado") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    changeState(valor) {
      this.swi.activar = valor;
      this.header.state = valor;

      if (this.swi.activar) {
        this.swi.name = "Publicar";
        this.model.state = "Aprobado";
        this.modrev.estado = "Aprobado";
      } else {
        this.swi.name = "No aprobado";
        this.model.state = "No aprobado";
        this.modrev.estado = "No aprobado";
      }
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