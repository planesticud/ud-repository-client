<template>
  <div>
    <div v-if="!isMobile" class="banner-all" :style="logoStyle">
      <img class="logo-planestic1" src="./assets/images/logo2.png" />
      <img class="logo-planestic2" src="./assets/images/logo_planestic.png" />
      <div class="trapezoid" @click="dialog = true">
        <div v-if="isLogin">
          <v-icon style="color: aliceblue;"> mdi-account </v-icon>
          {{ rol }}
          {{ name }}

        </div>
        <div v-else>
          Iniciar Sesión
        </div>
      </div>
      <v-dialog v-model="dialog" activator="parent" width="auto" style="background-color:#940611 ;">

        <v-card style="background-color:#940611 ;">
          <v-card-actions>

            <v-btn style="background-color: black; color: aliceblue;" icon="mdi-calendar" size="x-large"
              @click="dialog = false">X</v-btn>
          </v-card-actions>
          <v-card-text>

            <a href="https://rdigital.planestic.udistrital.edu.co/api/microsoft">
              <v-btn v-if="!isLogin" rounded style="background-color: aliceblue;" class="btn btn-light">
                <img class="ms-icon center" src="./assets/images/microsoftlogo.png" />

              </v-btn>
              <!--href="http://localhost:3000/google"-->
            </a>


            <v-btn v-if="isLogin" rounded style="background-color: aliceblue;" class="btn btn-light" @click="logout()">
              Cerrar sesion

            </v-btn>


          </v-card-text>

        </v-card>
      </v-dialog>

    </div>
    <hr class="solid">
    <v-app>
      <v-app-bar app style="position: absolute;">
        <v-app-bar-nav-icon @click="menu_izq = !menu_izq" v-if="isMobile"></v-app-bar-nav-icon>


        <v-tabs align-with-title v-if="!isMobile">
          <v-tab :to="button.route" v-for="(button, index) in buttons" :key="index" text>
            {{ button.text }}
          </v-tab>

        </v-tabs>

        <v-spacer></v-spacer>

      </v-app-bar>
      <v-navigation-drawer v-model="menu_izq" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense>
          <v-list-item :to="button.route" v-for="(button, index) in buttons" :key="index" link>
            <v-list-item-content>
              <v-list-item-title> {{ button.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!------- Menu Usuario------>
      <v-navigation-drawer app v-model="drawer" right absolute temporary>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="url_image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ rol }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <!-- <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          --->
          <v-divider></v-divider>
          <v-list-item @click="logout()">
            <v-list-item-icon>
              <v-icon>mdi-exit-run</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-------Fin Menu Usuario------>

      <br />

      <router-view />
      <v-card dark padless>
        <v-row style="background-color: #8B1919;"> 
          <v-col sm="4" >
           <h2 style="text-align: right;padding: 4%;">Síguenos en redes sociales</h2>
          </v-col>
          <v-col sm="6"> 
        <v-card flat tile color="#8b1919" class="white--text text-center" style="background-color: #8B1919;">
          <v-card-text style="padding-left: 0%;"> 
            <v-btn :href="lik.route" :target="lik.route" v-for="lik in linkk" :key="lik.icons" class="mx-4 white--text"
              icon>
              <v-hover v-slot="{ hover }" open-delay="200">
                <v-icon :title="lik.des" :size="hover ? '64px' : '36px'" :class="{ 'on-hover': hover }">
                  {{ lik.icons }}
                </v-icon>
              </v-hover>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col> 
      </v-row>
      </v-card>



    </v-app>
  </div>
</template>
<script src="./App.js"></script>
<style src="./App.css"></style>
