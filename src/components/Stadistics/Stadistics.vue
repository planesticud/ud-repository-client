<template>
  <v-container class="lighten-5 rvcontainer">
    <div>
      <h1 align="center">
        {{ h1.text }} <v-icon :title="title.text" medium> {{ h1.icon }}</v-icon>
      </h1>
      <br />
    </div>
    <v-row>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-center">
                Total recursos publicados
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row>
              <v-col class="text-h3 text-right" cols="6">
                {{ publicados }}
              </v-col>
              <v-col cols="6">
                <v-icon size="64px">mdi-file-eye-outline</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
        <br />
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-center">
                Total recursos descargados
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row>
              <v-col class="text-h3 text-right" cols="6">
                {{ totaldescargas }}
              </v-col>
              <v-col cols="6">
                <v-icon size="64px">mdi-download-multiple</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
        <br />
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-center">
                Total recursos vistos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row>
              <v-col class="text-h3 text-right" cols="6">
                {{ totalvistas }}
              </v-col>
              <v-col cols="6">
                <v-icon size="64px">mdi-eye-check</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
        <br />
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-center">
                Total recursos publicados mes
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row>
              <v-col class="text-h4 text-right" cols="6"> 10 </v-col>
              <v-col cols="6">
                <v-icon size="64px">mdi-calendar-check</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
        <br />
      </v-col>
      <v-col>
        <v-card class="mx-auto h" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 text-center">
                Total de usuarios en el sistema
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row>
              <v-col class="text-h3 text-right" cols="6">
                {{ usuarios }}
              </v-col>

              <v-col cols="6">
                <v-icon size="64px">mdi-account-group</v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
        <br />
      </v-col>
      <v-col>
        <a href="/estadisticas">
          <v-card class="mx-auto h" max-width="400">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 text-center">
                  Ver gráficas
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>
              <v-row>
                <v-col class="text-center" cols="12">
                  <v-icon size="64px">mdi-chart-bar</v-icon>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
          <br />
        </a>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-form align="center" class="list px-3 mx-auto">
      <v-row md-12>
        <v-col>
          <v-text-field
            v-model="search"
            append-icon="mdi-account-box"
            label="Autor"
            single-line
            hide-details
            @keyup="authorExists"
          ></v-text-field>
          <span>{{ message }}</span>
        </v-col>
      </v-row>
    </v-form>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    &nbsp; &nbsp; &nbsp;

    <v-data-table
      :headers="headers"
      :items="stadistics"
      :search="search"
      class="text-h3"
    >
      <template v-slot:[`item.ranking`]="{ item }">
        <v-rating
          readonly
          v-model="item.ranking"
          background-color="green"
          color="green"
          large
          dark
        >
          {{ item.ranking }}
        </v-rating>
      </template>
      <!--
      <template v-slot:[`item.view`]="{ item }">
        <v-chip :color="getColor(item.num_view)" dark>
          {{ item.num_view }}
        </v-chip>
      </template>

      <template v-slot:[`item.location`]="{ item }">
        <a target="_blank" :href="item.location">
          {{ item.autor }}
        </a>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          medium
          :title="actions.detail.title"
          class="mr-2"
          @click="detalleFiles(item.id)"
          >{{ actions.detail.icon }}</v-icon
        >
      </template>
      -->
    </v-data-table>
  </v-container>
</template>

<script>
import stadisticsService from "../../services/stadistics";
import filesService from "../../services/files";
import usersService from "../../services/users";

export default {
  name: "stadistics-list",
  data() {
    return {
      publicados: 0,
      usuarios: 0,
      filEmail: "",
      h1: {
        text: "Estadisticas de Recursos ",
        icon: "mdi-chart-histogram",
        color: "red",
      },
      message: "",
      totaldescargas: 0,
      totalvistas: 0,
      totalrecursos: 0,
      search: "",
      files: [],
      stadistics: [],
      filterselection: [],
      title: "",
      url: "Ver recurso",
      headers: [
        {
          text: "Recurso",
          value: "name_obj",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Ranking",
          value: "ranking",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Numero de Vistas",
          value: "num_view",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Numero de Descargas",
          value: "num_download",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Autor",
          value: "autor",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      buttons: [
        {
          model: "ranking",
          label: "Ranking",
          color: "sucess",
          value: "ranking",
        },
        {
          model: "visitas",
          label: "Visitas",
          color: "success",
          value: "visitas",
        },

        {
          model: "descargas",
          label: "Descargas",
          color: "success",
          value: "descargas",
        },
      ],
      actions: {
        detail: {
          title: "Revisar el recurso",
          icon: " mdi-clipboard-edit-outline", // mdi-format-list-bulleted",
        },
      },
    };
  },
  methods: {
    retrieveFiles() {
      if (
        localStorage.rol == "ADMINISTRADOR" ||
        localStorage.rol == "DOCENTE" ||
        localStorage.rol == "EVALUADOR"
      ) {
        stadisticsService
          .getStadistics()
          .then((response) => {
            this.stadistics = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
        const std = { state: "Aprobado" };
        filesService
          .getListLifecyConteo(std)
          .then((response) => {
            this.publicados = response.data;
          })
          .catch((e) => {
            console.log(e);
          });

        usersService
          .getUserConteo()
          .then((response) => {
            this.usuarios = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    refreshList() {
      this.retrieveFiles();
    },

    searchTitle() {
      stadisticsService
        .getStadistics()
        .then((response) => {
          this.stadistics = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    authorExists() {
      stadisticsService
        .getStadisticsByAutor(this.search)
        .then((response) => {
          if (response.data.length != 0) {
            this.message = "";
          } else {
            this.message = "No existen registros para el Autor: " + this.search;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    reiniciar() {
      this.stadistics = [];
    },
    detalleFiles(id) {
      this.$router.push({ name: "valorar", params: { id: id } });
    },
    getColor(state) {
      if (state == "Sin aprobar") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    contarDatos() {
      stadisticsService
        .getStadistics()
        .then((response) => {
          for (let index = 0; index < response.data.length; index++) {
            this.totaldescargas =
              this.totaldescargas + response.data[index].num_download;
          }
          for (let index = 0; index < response.data.length; index++) {
            this.totalvistas = this.totalvistas + response.data[index].num_view;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveFiles();
    this.contarDatos();
  },
};
</script>

<style scoped>
.list {
  max-width: 750px;
}
.rvcontainer {
  max-width: 1536px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
