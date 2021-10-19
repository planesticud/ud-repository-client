<template>
  <v-container class="container" fluid grid-list-xl>
    <div>
      <h1>
        {{ title.text }} <v-icon :title="title.text">{{ title.icon }}</v-icon>
      </h1>

      <v-layout row wrap>
        <v-flex d-flex xl4 lg4 sm6 xs12>
          <v-card v-if="exi" class="container">
            <v-card-title class="justify-center"
              >ESTADOS DE LOS RECURSOS</v-card-title
            >
            <div v-show="showT">
              <pie-chart
                :data="esta_std"
                :colors="['#4CAF50', '#2196F3', '#F44336']"
                legend="right"
                download="estados_de_recursos"
                :donut="showD"
              ></pie-chart>
            </div>
            &nbsp;
            <div v-show="showB">
              <column-chart
                :data="[
                  ['Aprobado', esta_std.Aprobado],
                  ['Por Aprobar', esta_std.Por_Aprobar],
                  ['No Aprobado', esta_std.No_Aprobado],
                ]"
                :colors="[['#4CAF50', '#2196F3', '#F44336']]"
                download="estados_de_recursos"
              ></column-chart>
            </div>
            <v-card-actions>
              <v-btn @click="actualizaData()" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Refrescar"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-refresh
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioA(1)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Torta"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-pie
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioA(2)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Barras"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-bar
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioA(3)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Dona"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-donut
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show0 = !show0">
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Ver datos fuente"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >{{
                      show0 ? "mdi-information-outline" : "mdi-information"
                    }}</v-icon
                  >
                </v-hover>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show0">
                <v-divider></v-divider>
                <v-card-text>
                  <v-simple-table>
                    <caption>
                      Datos
                    </caption>
                    <thead>
                      <tr>
                        <th>
                          <strong class="text_tab">
                            Estado de los Recursos</strong
                          >
                        </th>
                        <th><strong class="text_tab">Cantidad</strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Aprobados</td>
                        <td>{{ esta_std.Aprobado }}</td>
                      </tr>
                      <tr>
                        <td>No aprobados</td>
                        <td>{{ esta_std.No_Aprobado }}</td>
                      </tr>
                      <tr>
                        <td>Por aprobar</td>
                        <td>{{ esta_std.Por_Aprobar }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
        <!--------- ------------>

        <v-flex d-flex xl4 lg4 sm6 xs12>
          <v-card v-if="showIdioma" class="container">
            <v-card-title class="justify-center"
              >IDIOMA DE LOS RECURSOS</v-card-title
            >
            <div v-show="showT_idioma">
              <pie-chart
                :data="esta_idioma"
                :colors="[
                  '#ffff75',
                  '#ff7575',
                  '#75ffff',
                  '#ff75ff',
                  '	#75ff75',
                ]"
                legend="right"
                download="idioma_de_recursos"
                :donut="showD_idioma"
              ></pie-chart>
            </div>
            &nbsp;
            <div v-show="showB_idioma">
              <column-chart
                :data="[
                  ['Español', esta_idioma.Español],
                  ['Inglés', esta_idioma.Inglés],
                  ['Francés', esta_idioma.Francés],
                  ['Alemán', esta_idioma.Alemán],
                  ['Portugués', esta_idioma.Portugués],
                ]"
                :colors="[
                  ['#ffff75', '#ff7575', '#75ffff', '#ff75ff', '	#75ff75'],
                ]"
                download="idioma_de_recursos"
              ></column-chart>
            </div>
            <v-card-actions>
              <v-btn @click="actualizaData()" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Refrescar"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-refresh
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_idioma(1)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Torta"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-pie
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_idioma(2)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Barras"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-bar
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_idioma(3)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Dona"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-donut
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show0_idioma = !show0_idioma">
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Ver datos fuente"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >{{
                      show0_idioma
                        ? "mdi-information-outline"
                        : "mdi-information"
                    }}</v-icon
                  >
                </v-hover>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show0_idioma">
                <v-divider></v-divider>
                <v-card-text>
                  <v-simple-table>
                    <caption>
                      Datos
                    </caption>
                    <thead>
                      <tr>
                        <th>
                          <strong class="text_tab"> Idioma</strong>
                        </th>
                        <th><strong class="text_tab">Cantidad</strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Español</td>
                        <td>{{ esta_idioma.Español }}</td>
                      </tr>
                      <tr>
                        <td>Inglés</td>
                        <td>{{ esta_idioma.Inglés }}</td>
                      </tr>
                      <tr>
                        <td>Francés</td>
                        <td>{{ esta_idioma.Francés }}</td>
                      </tr>
                      <tr>
                        <td>Alemán</td>
                        <td>{{ esta_idioma.Alemán }}</td>
                      </tr>
                      <tr>
                        <td>Portugués</td>
                        <td>{{ esta_idioma.Portugués }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
        <!--------- ------------>

        <v-flex d-flex xl4 lg4 sm6 xs12>
          <v-card v-if="showContexto" class="container">
            <v-card-title class="justify-center"
              >CONTEXTO DE LOS RECURSOS</v-card-title
            >
            <div v-show="showT_contexto">
              <pie-chart
                :data="esta_contexto"
                :colors="['#ffff75', '#ff7575', '#75ffff', '#ff75ff']"
                legend="right"
                download="estados_de_recursos"
                :donut="showD_contexto"
              ></pie-chart>
            </div>
            &nbsp;
            <div v-show="showB_contexto">
              <column-chart
                :data="[
                  ['Superior', esta_contexto.Superior],
                  ['Tecnológica', esta_contexto.Tecnológica],
                  ['Media ', esta_contexto.Media],
                  ['Inicial', esta_contexto.Inicial],
                ]"
                :colors="[['#ffff75', '#ff7575', '#75ffff', '#ff75ff']]"
                download="estados_de_recursos"
              ></column-chart>
            </div>
            <v-card-actions>
              <v-btn @click="actualizaContexto()" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Refrescar"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-refresh
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_contexto(1)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Torta"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-pie
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_contexto(2)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Barras"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-bar
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="cambioG_contexto(3)" icon>
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Tipo Dona"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >mdi-chart-donut
                  </v-icon>
                </v-hover>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show0_contexto = !show0_contexto">
                <v-hover v-slot="{ hover }" open-delay="200">
                  <v-icon
                    title="Ver datos fuente"
                    :size="hover ? '48px' : '36px'"
                    :class="{ 'on-hover': hover }"
                    >{{
                      show0_contexto
                        ? "mdi-information-outline"
                        : "mdi-information"
                    }}</v-icon
                  >
                </v-hover>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show0_contexto">
                <v-divider></v-divider>
                <v-card-text>
                  <v-simple-table>
                    <caption>
                      Datos
                    </caption>
                    <thead>
                      <tr>
                        <th>
                          <strong class="text_tab">
                            Contexto de los Recursos</strong
                          >
                        </th>
                        <th><strong class="text_tab">Cantidad</strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Educación Superior</td>
                        <td>{{ esta_contexto.Superior }}</td>
                      </tr>
                      <tr>
                        <td>Educación Tecnologica</td>
                        <td>{{ esta_contexto.Tecnológica }}</td>
                      </tr>
                      <tr>
                        <td>Educación Media</td>
                        <td>{{ esta_contexto.Media }}</td>
                      </tr>
                      <tr>
                        <td>Educación Inicial</td>
                        <td>{{ esta_contexto.Inicial }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>

      <!--
    <template v-for="item in header">
      <p :class="item.class" v-if="item" :key="item.key">
        <strong v-if="item.value" :key="item.value">{{ item.value }} </strong>
      </p>
    </template>
-->
    </div>
  </v-container>
</template>


<script>
//import FilesService from "../../services/files";
//import PublicarService from "../../services/publicar";
import FilesService from "../../services/files";

export default {
  data() {
    return {
      title: { text: "Estadísticas de Recusrsos", icon: "mdi-chart-pie" },
      max: 10,

      showT: true,
      showD: false,
      showB: false,
      show0: false,
      exi: false,
      esta_std: { Aprobado: 0, Por_Aprobar: 0, No_Aprobado: 0 },

      showIdioma: false,
      esta_idioma: {
        Español: 0,
        Inglés: 0,
        Francés: 0,
        Alemán: 0,
        Portugués: 0,
      },
      showT_idioma: false,
      showD_idioma: false,
      showB_idioma: true,
      show0_idioma: false,

      showContexto: false,
      esta_contexto: {
        Superior: 0,
        Tecnológica: 0,
        Media: 0,
        Inicial: 0,
      },
      showT_contexto: true,
      showD_contexto: true,
      showB_contexto: false,
      show0_contexto: false,
    };
  },
  methods: {
    getConteosP() {
      const std_obj1 = { state: "Aprobado" };
      FilesService.getListLifecyConteo(std_obj1)
        .then((response) => {
          this.otro(response.data, 1);
        })
        .catch((e) => {
          console.log(e);
        });
      const std_obj2 = { state: "No aprobado" };
      FilesService.getListLifecyConteo(std_obj2)
        .then((response) => {
          this.otro(response.data, 2);
        })
        .catch((e) => {
          console.log(e);
        });
      const std_obj3 = { state: "Por aprobar" };
      FilesService.getListLifecyConteo(std_obj3)
        .then((response) => {
          this.otro(response.data, 3);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    otro(ola, eti) {
      switch (eti) {
        case 1: {
          this.esta_std.Aprobado = ola;
          break;
        }
        case 2: {
          this.esta_std.No_Aprobado = ola;
          break;
        }
        case 3: {
          this.esta_std.Por_Aprobar = ola;
          this.exi = true;
          break;
        }
      }

      // console.log("datos5: " + JSON.stringify(this.esta_std));
    },
    actualizaData() {
      this.exi = false;
      this.getConteosP();
      console.log("datosActual: " + JSON.stringify(this.esta_std));
      this.exi = true;
    },
    cambioA(graf) {
      switch (graf) {
        case 1: {
          this.showT = true;
          this.showB = false;
          this.showD = false;
          break;
        }
        case 2: {
          this.showT = false;
          this.showB = true;
          this.showD = false;
          break;
        }
        case 3: {
          this.showT = true;
          this.showB = false;
          this.showD = true;
          break;
        }
      }
    },
    getConteoIdioma() {
      const datoIdioma1 = { language: "Español" };
      FilesService.getGeneralConteo(datoIdioma1)
        .then((response) => {
          this.otroIdioma(response.data, 1);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoIdioma2 = { language: "Inglés" };
      FilesService.getGeneralConteo(datoIdioma2)
        .then((response) => {
          this.otroIdioma(response.data, 2);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoIdioma3 = { language: "Francés" };
      FilesService.getGeneralConteo(datoIdioma3)
        .then((response) => {
          this.otroIdioma(response.data, 3);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoIdioma4 = { language: "Alemán" };
      FilesService.getGeneralConteo(datoIdioma4)
        .then((response) => {
          this.otroIdioma(response.data, 4);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoIdioma5 = { language: "Portugués" };
      FilesService.getGeneralConteo(datoIdioma5)
        .then((response) => {
          this.otroIdioma(response.data, 5);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    otroIdioma(dato, eti) {
      switch (eti) {
        case 1: {
          this.esta_idioma.Español = dato;
          break;
        }
        case 2: {
          this.esta_idioma.Inglés = dato;
          break;
        }
        case 3: {
          this.esta_idioma.Francés = dato;
          break;
        }
        case 4: {
          this.esta_idioma.Alemán = dato;
          break;
        }
        case 5: {
          this.esta_idioma.Portugués = dato;
          this.showIdioma = true;
          break;
        }
      }
    },
    cambioG_idioma(graf) {
      switch (graf) {
        case 1: {
          this.showT_idioma = true;
          this.showB_idioma = false;
          this.showD_idioma = false;
          break;
        }
        case 2: {
          this.showT_idioma = false;
          this.showB_idioma = true;
          this.showD_idioma = false;
          break;
        }
        case 3: {
          this.showT_idioma = true;
          this.showB_idioma = false;
          this.showD_idioma = true;
          break;
        }
      }
    },

    actualizaIdioma() {
      this.showIdioma = false;
      this.getConteoIdioma();
      this.showIdioma = true;
    },

    getConteoContexto() {
      const datoContexto1 = { context: "Educación superior" };
      FilesService.getPedagogicalConteo(datoContexto1)
        .then((response) => {
          this.otroContexto(response.data, 1);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoContexto2 = { context: "Educación tecnológica" };
      FilesService.getPedagogicalConteo(datoContexto2)
        .then((response) => {
          this.otroContexto(response.data, 2);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoContexto3 = { context: "Educación media" };
      FilesService.getPedagogicalConteo(datoContexto3)
        .then((response) => {
          this.otroContexto(response.data, 3);
        })
        .catch((e) => {
          console.log(e);
        });
      const datoContexto4 = { context: "Educación inicial" };
      FilesService.getPedagogicalConteo(datoContexto4)
        .then((response) => {
          this.otroContexto(response.data, 4);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    otroContexto(dato, eti) {
      switch (eti) {
        case 1: {
          this.esta_contexto.Superior = dato;
          break;
        }
        case 2: {
          this.esta_contexto.Tecnológica = dato;
          break;
        }
        case 3: {
          this.esta_contexto.Media = dato;
          break;
        }
        case 4: {
          this.esta_contexto.Inicial = dato;
          this.showContexto = true;
          break;
        }
      }
    },
    cambioG_contexto(graf) {
      switch (graf) {
        case 1: {
          this.showT_contexto = true;
          this.showB_contexto = false;
          this.showD_contexto = false;
          break;
        }
        case 2: {
          this.showT_contexto = false;
          this.showB_contexto = true;
          this.showD_contexto = false;
          break;
        }
        case 3: {
          this.showT_contexto = true;
          this.showB_contexto = false;
          this.showD_contexto = true;
          break;
        }
      }
    },
    actualizaContexto() {
      this.showContexto = false;
      this.getConteoContexto();
      this.showContexto = true;
    },
  },
  mounted() {
    this.message = "";
    this.getConteosP();
    this.getConteoIdioma();
    this.getConteoContexto();
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
  max-width: 100%;
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

.text_tab {
  font-size: 15px;
  font-weight: bold;
}
</style>