<template>
  <v-container class="lighten-5 flcontainer">
    <br />
    <br />
    <div>
      <h1>
        {{ h1.text }}
      </h1>
    </div>

    <div class="row">

      <div class="col-1">
        <v-spacer></v-spacer>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <p></p>
        &nbsp;
        &nbsp;
        <p></p>
        <div class="circle">
          &nbsp;
          <router-link to="/files">
            <v-btn class="mx-2" fab dark small color="#8B1919">
              <v-icon dark>
                mdi-file-multiple
              </v-icon>
            </v-btn>
          </router-link>

          <p></p>
          <router-link to="/files/add">
            <v-btn class="mx-2" fab dark small color="#8B1919">
              <v-icon dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </router-link>

          <p></p> <router-link to="/profile">
            <v-btn class="mx-2" fab dark small color="#8B1919">
              <v-icon dark>
                mdi-heart
              </v-icon>
            </v-btn>
          </router-link>

          <p></p> <router-link to="/profile">
            <v-btn class="mx-2" fab dark small color="#8B1919">
              <v-icon dark>
                mdi-heart
              </v-icon>
            </v-btn>
          </router-link>

          <p></p>
        </div>
      </div>
      <div class="col">
        <v-row align="center" class="list px-3 mx-auto">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="¿Que recurso estas buscando?" single-line
            hide-details></v-text-field>

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
            <v-icon medium :title="actions.detail.title" class="mr-2" @click="detailFiles(item.id)">
              {{ actions.detail.icon }}
            </v-icon>
          </template>
        </v-data-table>
      </div>
    </div>


    <!--////////////////////////////// Otros formatos ///////////// -->

    <v-dialog v-model="ver_otros" transition="dialog-bottom-transition" persistent max-width="40%" max-height="50%">
      <v-card>
        <v-toolbar color="#8B1919" class="justify-center" dark>
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
                    <v-img :src="img_lic" max-height="34" max-width="107" :alt="objact.copyright"
                      :title="objact.copyright"></v-img>
                    <br />
                    {{ objact.copyright }}
                  </p>
                </v-row>

                <v-row>
                  <p class="textder">
                    Valoración:
                    <span class="text-caption mr-2"> ({{ rt }}) </span>
                    <v-rating readonly v-model="statistic.ranking" background-color="green" color="green" half-increments
                      dark :title="statistic.ranking">
                      {{ statistic.ranking }}
                    </v-rating>
                  </p>
                </v-row>
              </v-col>

              <v-col cols="5">
                <center>
                  <v-img id="my_img" width="230" contain
                    src="https://repository-planesticud.s3.amazonaws.com/1645505004405no_disponible.jpg" alt="Imagen"
                    title="Vista previa No disponible" @mouseenter="onMenuContex('my_img')"></v-img>
                </center>
                <br />

                <v-divider color="#E0E0E0"></v-divider>
                <br />
                <br />
                <v-row>
                  <span class="text-h6 blue--text">
                    {{ statistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp; &nbsp; &nbsp;

                  <v-btn color="#8B1919" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--////////////////////////////// Fin vista previa Otros Formatos /////////////-->

    <!--////////////////////////////// vista previa IMAGEN ///////////// -->

    <v-dialog v-model="ver_img" transition="dialog-bottom-transition" persistent max-width="70%" max-height="90%">
      <v-card>
        <v-toolbar color="#8B1919" class="justify-center" dark>
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
                  <v-img :src="img_lic" max-height="34" max-width="107" :alt="objact.copyright"
                    :title="objact.copyright"></v-img>
                  <br />
                  {{ objact.copyright }}
                </p>
                <p class="textder">
                  Valoración:
                  <span class="text-caption mr-2"> ({{ rt }}) </span>
                </p>
                <p>
                  <v-rating readonly v-model="statistic.ranking" background-color="green" color="green" half-increments
                    dark :title="statistic.ranking">
                    {{ statistic.ranking }}
                  </v-rating>
                </p>
              </v-col>
              <v-col cols="12" md="8">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-slider v-model="amp_img" class="align-self-stretch" min="200" max="1000" step="1"></v-slider>

                  <v-img id="my_img" :aspect-ratio="13 / 9" :width="100 + amp_img" contain :src="objact.location"
                    alt="Imagen" title="recurso tipo imagen" @mouseenter="onMenuContex('my_img')"></v-img>
                  &nbsp; &nbsp;
                </div>
                <v-divider color="#E0E0E0"></v-divider>
                &nbsp;
                <v-row>
                  <span class="text-h6 blue--text">
                    {{ statistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp; &nbsp;
                  <v-spacer></v-spacer>
                  <v-btn color="#8B1919" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--////////////////////////////// Fin vista previa IMAGEN /////////////-->

    <!--////////////////////////////// vista previa Video ///////////// -->

    <v-dialog v-model="ver_video" transition="dialog-bottom-transition" persistent max-width="70%" max-height="70%">
      <v-card>
        <v-toolbar color="#8B1919" class="justify-center" dark>
          <v-toolbar-title>{{ objact.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="ver_video = salir()"> Salir </v-btn>
          </v-toolbar-items>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          &nbsp;
        </v-toolbar>

        <v-card-text>
          <v-container>

            <v-row>
              <v-col cols="12">
                <video id="myVideo" width="100%" height="93%" :src="objact.location" type="video/mp4"
                  @mouseenter="onMenuContex('myVideo')" @click="onclickMplay()"></video>
                <v-row>
                  <br />
                  <span class="text-h6 blue--text">
                    {{ statistic.num_view }} Visitas
                  </span>
                  <v-icon color="blue darken-2" right> mdi-eye-check </v-icon>
                  &nbsp; &nbsp;
                  <v-spacer></v-spacer>
                  <v-btn color="#8B1919" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row></v-container>
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

          <v-rating v-model="rating" background-color="yellow" color="green" large half-icon="$ratingHalf" half-increments
            dark @input="calcu()"></v-rating>
          <p>{{ rating }}</p>
        </center>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cancelarCal()">
            No calificar
          </v-btn>
          <!-- <v-btn color="green darken-1" text @click="dialog = false">-->
          <v-btn color="green darken-1" :disabled="btnd" text @click="calificarRecurso()">
            Guardar y Descargar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--//////////////////// Finnn Ventana de calificacion y descarga////////////--->

    <!--////////////////////////////// vista previa PDF ///////////// -->
    <v-dialog v-model="ver_pdf" max-width="70%" transition="dialog-bottom-transition" persistent>
      <v-card>
        <v-toolbar color="#8B1919" dark absolute width="100%" height="58px">
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
                  <v-btn color="#8B1919" dark @click="dialog = true">
                    Descargar
                    <v-icon dark right> mdi-cloud-download </v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <span class="text-h6 blue--text">
                    {{ statistic.num_view }} Visitas
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
                  <v-img :src="img_lic" max-height="34" max-width="107" :alt="objact.copyright"
                    :title="objact.copyright"></v-img>
                  <br />
                  {{ objact.copyright }}
                </p>
                &nbsp;
                <p class="textder">
                  Valoración:
                  <span class="text-caption mr-2"> ({{ rt }}) </span>
                </p>
                <v-rating readonly v-model="statistic.ranking" background-color="green" color="green" dark half-increments
                  :title="statistic.ranking">
                  {{ statistic.ranking }}
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
<script src="./files.js"></script>
<style src="./files.css"></style>