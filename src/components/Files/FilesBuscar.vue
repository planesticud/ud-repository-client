<template>
  <v-container class="lighten-5 flcontainer">
    <br />
    <br />
    <div>
      <h1 align="center">
        {{ h1.text }} <v-icon :title="title.text">{{ h1.icon }}</v-icon>
      </h1>
    </div>
    <v-row align="center" class="list px-3 mx-auto">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>

      &nbsp; &nbsp; &nbsp;
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-data-table :headers="headers" :items="files" :search="search">
      <template v-slot:[`item.state`]="{ item }">
        <v-chip :color="getColor(item.state)" dark>
          {{ item.state }}
        </v-chip>
      </template>

      <template v-slot:[`item.location`]="{ item }">
        <a v-on:click="view_resource(item)">
          {{ url }}
        </a>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detailFiles(item.id)"
        >
          {{ actions.detail.icon }}
        </v-icon>
      </template>
    </v-data-table>

    <!--////////////////////////////// Otros formatos ///////////// -->

    <v-dialog
      v-model="ver_otros"
      transition="dialog-bottom-transition"
      persistent
      max-width="40%"
      max-height="50%"
    >
      <v-card>
        <v-toolbar color="primary" class="justify-center" dark>
          <v-toolbar-title>Vista previa otros formatos </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="ver_otros = salir()"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="7">
                &nbsp;
                <v-row>
                  <p class="textder">Título:</p>
                  <p>{{ objact.title }}</p>
                </v-row>
                <v-row>
                  <p class="textder">Descripción:</p>
                  <p>{{ objact.description }}</p>
                </v-row>
                <v-row>
                  <p class="textder">Palabras claves</p>
                  <p>{{ objact.key_words }}</p>
                </v-row>
                <v-row>
                  <p class="textder">Autores:</p>
                  <p>{{ objact.participants }}</p>
                </v-row>
                <v-row>
                  <p class="textder">Formato:</p>
                  <p>{{ objact.format }}</p>
                </v-row>
                <v-row>
                  <p class="textder">Copyright:</p>
                </v-row>
                <v-row>
                  <p>
                    <v-img
                      :src="img_lic"
                      max-height="34"
                      max-width="107"
                      :alt="objact.copyright"
                      :title="objact.copyright"
                    ></v-img>
                    <br />
                    {{ objact.copyright }}
                  </p>
                </v-row>

                <v-row>
                  <p class="textder">
                    Valoración:
                    <span class="text-caption mr-2"> ({{ rt }}) </span>
                    <v-rating
                      readonly
                      v-model="stadistic.ranking"
                      background-color="green"
                      color="green"
                      half-increments
                      dark
                      :title="stadistic.ranking"
                    >
                      {{ stadistic.ranking }}
                    </v-rating>
                  </p>
                </v-row>
              </v-col>

              <v-col cols="5">
                <center>
                  <v-img
                    id="my_img"
                    width="230"
                    contain
                    src="https://repository-planesticud.s3.amazonaws.com/1645505004405no_disponible.jpg"
                    alt="Imagen"
                    title="Vista previa No disponible"
                    @mouseenter="onMenuContex('my_img')"
                  ></v-img>
                </center>
                <br />

                <v-divider color="#E0E0E0"></v-divider>
                <br />
                <br />
                <v-row>
                  <span class="text-h6 blue--text">
                    {{ stadistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp; &nbsp; &nbsp;

                  <v-btn color="primary" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container
          >
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--////////////////////////////// Fin vista previa Otros Formatos /////////////-->

    <!--////////////////////////////// vista previa IMAGEN ///////////// -->

    <v-dialog
      v-model="ver_img"
      transition="dialog-bottom-transition"
      persistent
      max-width="70%"
      max-height="90%"
    >
      <v-card>
        <v-toolbar color="primary" class="justify-center" dark>
          <v-toolbar-title>Vista previa imagen </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="ver_img = salir()"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <p class="margen"></p>
                <p class="textder">Título:</p>
                <p>{{ objact.title }}</p>
                <p class="textder">Descripción:</p>
                <p>{{ objact.description }}</p>
                <p class="textder">Palabras claves</p>
                <p>{{ objact.key_words }}</p>
                <p class="textder">Autores:</p>
                <p>{{ objact.participants }}</p>
                <p class="textder">Formato:</p>
                <p>{{ objact.format }}</p>

                <p class="textder">Copyright:</p>
                <p>
                  <v-img
                    :src="img_lic"
                    max-height="34"
                    max-width="107"
                    :alt="objact.copyright"
                    :title="objact.copyright"
                  ></v-img>
                  <br />
                  {{ objact.copyright }}
                </p>
                <p class="textder">
                  Valoración:
                  <span class="text-caption mr-2"> ({{ rt }}) </span>
                </p>
                <p>
                  <v-rating
                    readonly
                    v-model="stadistic.ranking"
                    background-color="green"
                    color="green"
                    half-increments
                    dark
                    :title="stadistic.ranking"
                  >
                    {{ stadistic.ranking }}
                  </v-rating>
                </p>
              </v-col>
              <v-col cols="12" md="8">
                <div
                  class="d-flex flex-column justify-space-between align-center"
                >
                  <v-slider
                    v-model="amp_img"
                    class="align-self-stretch"
                    min="200"
                    max="1000"
                    step="1"
                  ></v-slider>

                  <v-img
                    id="my_img"
                    :aspect-ratio="13 / 9"
                    :width="100 + amp_img"
                    contain
                    :src="objact.location"
                    alt="Imagen"
                    title="recurso tipo imagen"
                    @mouseenter="onMenuContex('my_img')"
                  ></v-img>
                  &nbsp; &nbsp;
                </div>
                <v-divider color="#E0E0E0"></v-divider>
                &nbsp;
                <v-row>
                  <span class="text-h6 blue--text">
                    {{ stadistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp; &nbsp;
                  <v-spacer></v-spacer>
                  <v-btn color="primary" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container
          >
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--////////////////////////////// Fin vista previa IMAGEN /////////////-->

    <!--////////////////////////////// vista previa Video ///////////// -->

    <v-dialog
      v-model="ver_video"
      transition="dialog-bottom-transition"
      persistent
      max-width="70%"
    >
      <v-card>
        <v-toolbar color="primary" class="justify-center" dark>
          <v-toolbar-title>Vista previa </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="ver_video = salir()"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="3">
                <p class="margen"></p>
                <p class="textder">Título:</p>
                <p>{{ objact.title }}</p>
                <p class="textder">Descripción:</p>
                <p>{{ objact.description }}</p>
                <p class="textder">Palabras claves</p>
                <p>{{ objact.key_words }}</p>
                <p class="textder">Autores:</p>
                <p>{{ objact.participants }}</p>
                <p class="textder">Formato:</p>
                <p>{{ objact.format }}</p>

                <p class="textder">Copyright:</p>
                <p>
                  <v-img
                    :src="img_lic"
                    max-height="34"
                    max-width="107"
                    :alt="objact.copyright"
                    :title="objact.copyright"
                  ></v-img>
                  <br />
                  {{ objact.copyright }}
                </p>
                <p class="textder">
                  Valoración:
                  <span class="text-caption mr-2"> ({{ rt }}) </span>
                </p>
                <p>
                  <v-rating
                    readonly
                    v-model="stadistic.ranking"
                    background-color="green"
                    color="green"
                    half-increments
                    dark
                    :title="stadistic.ranking"
                  >
                    {{ stadistic.ranking }}
                  </v-rating>
                </p>
                <!---<v-divider color="#E0E0E0"></v-divider>
                <center>
                  <v-btn class="my-4" color="primary" width="80%" dark>
                    <v-icon dark left>mdi-download </v-icon>
                    Descargar
                  </v-btn>
                </center>-->
              </v-col>
              <v-col cols="9">
                <video
                  id="myVideo"
                  width="100%"
                  height="93%"
                  :src="objact.location"
                  type="video/mp4"
                  @mouseenter="onMenuContex('myVideo')"
                  @click="onclickMplay()"
                ></video>
                <v-row>
                  <br />
                  <span class="text-h6 blue--text">
                    {{ stadistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp;
                  <v-spacer></v-spacer>
                  <v-btn color="primary" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container
          >
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--////////////////////////////// Fin vista previa Video /////////////-->

    <!--//////////////////// Ventana de calificacion y descarga////////////--->
    <v-dialog v-model="dialog" persistent max-width="390">
      <v-card>
        <center>
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
            @input="calcu()"
          ></v-rating>
          <p>{{ rating }}</p>
        </center>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cancelarCal()">
            No calificar
          </v-btn>
          <!-- <v-btn color="green darken-1" text @click="dialog = false">-->
          <v-btn
            color="green darken-1"
            :disabled="btnd"
            text
            @click="calificarRecurso()"
          >
            Guardar y Descargar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--//////////////////// Finnn Ventana de calificacion y descarga////////////--->

    <!--////////////////////////////// vista previa PDF ///////////// -->
    <v-dialog
      v-model="ver_pdf"
      max-width="70%"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card>
        <v-toolbar color="primary" dark absolute width="100%" height="58px">
          <v-toolbar-title>Vista previa </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="ver_pdf = salir()"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="9">
                <center>
                  <iframe class="myframe" :src="objact.location"></iframe>
                </center>
                &nbsp; &nbsp;
                <v-row>
                  &nbsp;
                  <v-btn color="primary" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <span class="text-h6 blue--text">
                    {{ stadistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp;
                </v-row>
              </v-col>

              <v-col cols="3">
                <p class="margen"></p>
                <p class="textder">Título:</p>
                <p>{{ objact.title }}</p>
                <p class="textder">Descripción:</p>
                <p>{{ objact.description }}</p>
                <p class="textder">Palabras claves</p>
                <p>{{ objact.key_words }}</p>
                <p class="textder">Autores:</p>
                <p>{{ objact.participants }}</p>
                <p class="textder">Formato:</p>
                <p>{{ objact.format }}</p>

                <p class="textder">Copyright:</p>
                <p>
                  <v-img
                    :src="img_lic"
                    max-height="34"
                    max-width="107"
                    :alt="objact.copyright"
                    :title="objact.copyright"
                  ></v-img>
                  <br />
                  {{ objact.copyright }}
                </p>
                &nbsp;
                <p class="textder">
                  Valoración:
                  <span class="text-caption mr-2"> ({{ rt }}) </span>
                </p>
                <v-rating
                  readonly
                  v-model="stadistic.ranking"
                  background-color="green"
                  color="green"
                  dark
                  half-increments
                  :title="stadistic.ranking"
                >
                  {{ stadistic.ranking }}
                </v-rating>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--////////////////////////////// Fin vista previa PDF /////////////-->
  </v-container>
</template>

<script>
import filesService from "../../services/files";
import stadisticsService from "../../services/stadistics";

export default {
  name: "files-list-buscar",
  data() {
    return {
      dialog: false,
      btnd: true,
      rating: 0,
      mplay: true,
      ver_pdf: false,
      ver_video: false,
      ver_img: false,
      ver_otros: false,
      amp_img: 200,
      img_lic: "",
      h1: {
        text: "Repositorio de Recursos Digitales",
        icon: "mdi-file-outline",
      },
      search: "",
      files: [],
      title: "",
      url: "Ver recurso",

      counter: 1,
      stadistic: {},
      rt: "",
      objact: {},

      headers: [
        {
          text: "Título",
          value: "title",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Descripción",
          value: "description",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Estado",
          value: "state",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Formato",
          value: "format",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Clasificación",
          value: "purpose",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Recurso",
          value: "location",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Detalles",
          value: "actions",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      actions: {
        detail: {
          title: "Detalle de recurso",
          icon: " mdi-format-list-bulleted",
        },
      },
    };
  },

  methods: {
    retrieveFiles() {
      if (
        localStorage.rol === "DOCENTE" ||
        localStorage.rol === "ESTUDIANTE" ||
        localStorage.rol === "ADMINISTRADOR" ||
        localStorage.rol === "EVALUADOR"
      ) {
        filesService
          .getFilesByState("Aprobado")
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    view_resource(id_obj) {
      //console.log(JSON.stringify(id_obj));

      this.objact = id_obj;
      if (id_obj.format === "video/mp4") {
        this.ver_video = true;
      } else if (id_obj.format === "application/pdf") {
        //  id_obj.location = id_obj.location + "#toolbar=0";
        this.ver_pdf = true;
      } else if (
        id_obj.format === "image/png" ||
        id_obj.format === "image/jpeg" ||
        id_obj.format === "image/gif"
      ) {
        //  id_obj.location = id_obj.location + "#toolbar=0";
        this.ver_img = true;
      } else {
        this.ver_otros = true;
      }
      switch (id_obj.copyright) {
        case "Atribución": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645315018077atribucion.png";
          break;
        }
        case "Atribución-NoComercial": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645317823844no_comercial.png";
          break;
        }
        case "Atribución-NoComercial-CompartirIgual": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645576514016no_comercial_compartir_igual.png";
          break;
        }
        case "Atribución-CompartirIgual": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645576609401compartir_igual.png";
          break;
        }
        default: {
          break;
        }
      }

      stadisticsService
        .getStadisticsByid(id_obj.id)
        .then((response) => {
          this.stadistic = response.data[0];
          this.stadistic.num_view = this.stadistic.num_view + 1;
          this.rt = ("" + this.stadistic.ranking).substring(0, 3);
          //console.log(JSON.stringify(this.stadistic));
        })
        .catch((e) => {
          console.log(e);
        });
    },

    salir() {
      stadisticsService
        .updateStadistics(this.stadistic, this.stadistic.id)
        .catch((e) => {
          console.log(e);
          return false;
        });
      return false;
    },

    refreshList() {
      this.retrieveFiles();
    },

    detailFiles(id) {
      this.$router.push({ name: "detailfiles", params: { id: id } });
    },

    getColor(state) {
      if (state == "No aprobado") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    onMenuContex(idc) {
      var vido = document.getElementById(idc);
      vido.oncontextmenu = function () {
        return false;
      };
    },
    onclickMplay() {
      var vid = document.getElementById("myVideo");
      this.mplay = !this.mplay;
      if (this.mplay) {
        vid.play();
      } else {
        vid.pause();
      }
    },
    calcu() {
      this.btnd = false;
    },
    cancelarCal() {
      this.dialog = false;
      this.btnd = true;
      this.rating = 0;
    },
    calificarRecurso() {
      this.dialog = false;
      this.ver_video = false;
      this.ver_pdf = false;
      this.ver_img = false;
      this.ver_otros = false;
      this.btnd = true;
      this.rating = 0;
      if (this.stadistic.ranking === null || this.stadistic.ranking === 0.0) {
        //  console.log("es un mulo jaja " + this.ranking);
        this.stadistic.num_download = 1;
        this.stadistic.ranking = this.rating;
      } else {
        //      console.log("no es nulo");
        //this.stadistic[0].ranking =   (this.stadistic[0].ranking + this.ranking) / 2;
        this.stadistic.ranking =
          (this.stadistic.ranking * this.stadistic.num_download + this.rating) /
          (this.stadistic.num_download + 1);
        this.stadistic.num_download = this.stadistic.num_download + 1;
      }
      stadisticsService
        .updateStadistics(this.stadistic, this.stadistic.id)
        .catch((e) => {
          console.log(e);
        });

      window.open(this.objact.location, "_blank");
    },
  },
  mounted() {
    this.retrieveFiles();
  },
};
</script>

<style scoped>
.list {
  max-width: 800px;
}
.flcontainer {
  max-width: 1536px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.myframe {
  height: 630px;
  width: 100%;
  border: 3px;
}
.textder {
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding-right: 15px;
  padding-left: 5px;
}
.margen {
  margin-top: 60px;
}
</style>
