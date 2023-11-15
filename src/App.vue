<template>
  <div>
    <div v-if="!isMobile" class="banner-all" :style="logoStyle">
      <img class="logo-planestic1" src="./assets/images/logo2.png" />
      <img class="logo-planestic2" src="./assets/images/logo_planestic.png" />
      <div class="trapezoid">
        <div v-if="isLogin">
          <v-icon style="color: aliceblue;"> mdi-account </v-icon>
          {{ rol }}
          <v-hover v-slot="{ hover }">
          <v-btn rounded style="background-color: #8B1919; color: aliceblue;" @click="logout() " :class="{ 'btns': hover }">
              Cerrar sesión
            </v-btn>
          </v-hover>
        </div>

        <div class="login" v-else>
          <v-hover v-slot="{ hover }">
            <v-btn rounded @click="dialog2 = true" style="background-color: #8B1919; color: aliceblue;"
              :class="{ 'btns': hover }">Crear cuenta</v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn rounded style="background-color: #8B1919; color: aliceblue;" @click="dialog = true" :class="{ 'btns': hover }">
              Iniciar Sesión</v-btn>
          </v-hover>

        </div>


      </div>
      <v-dialog v-model="dialog" activator="parent" width="auto" style="background-color:#940611 ;">
        <v-card style="background-color:#940611 ;">
          <v-card-actions>

            <v-btn style="background-color: aliceblue; color: black;" icon="mdi-calendar" size="x-large"
              @click="dialog = false">X</v-btn>
          </v-card-actions>
          <v-card-text>

            <h2 style="color: aliceblue; padding: 15px; ">¡Únete y conoce todos los recursos que te ayudarán!</h2>
           
            <p style="color: aliceblue; padding: 10px; padding-left: 20%; font-size: 18px;">Comienza utilizando tu cuenta
              Microsoft</p>

            <a href="https://rdigital.planestic.udistrital.edu.co/api/microsoft" style="padding-left: 35%;">
              <v-btn v-if="!isLogin" rounded style="background-color: aliceblue;  " class="btn btn-ligh">
                <img class="ms-icon center" src="./assets/images/microsoftlogo.png" />

              </v-btn>
              <!--href="http://localhost:3000/google"-->
            </a>





          </v-card-text>

        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" activator="parent" width="auto" style="background-color:#940611 ;">
        <v-card style="background-color:#940611 ;">
          <v-card-actions>
            <v-btn style="background-color: aliceblue; color: black;" icon="mdi-calendar" size="x-large"
              @click="dialog2 = false">X</v-btn>
          </v-card-actions>
          <v-card-text>

            <h2 style="color: aliceblue; padding: 15px;text-align: center; ">Crea tu cuenta</h2>
            <p style="color: aliceblue; padding: 10px;text-align: center; font-size: 18px;">Accede a nuestro contenido,
              publica y
              avanza en tu conocimiento.</p>
            <a href="https://rdigital.planestic.udistrital.edu.co/api/microsoft" style="padding-left: 35%;">
              <v-btn v-if="!isLogin" rounded style="background-color: aliceblue;  " class="btn btn-ligh">
                <img class="ms-icon center" src="./assets/images/microsoftlogo.png" />

              </v-btn>
              <!--href="http://localhost:3000/google"-->
            </a>
            <div style="text-align: center;padding-top: 2%;">
              <v-btn v-if="!isLogin" rounded style="background-color: aliceblue;" class="btn btn-ligh"
                @click="dialog3 = true">
                Conecta con correo
              </v-btn>
            </div>
            <v-hover v-slot="{ hover }">
            <v-btn rounded style="background-color: #8B1919; color: aliceblue;" @click="logout() " :class="{ 'btns': hover }">
              Cerrar sesión
            </v-btn></v-hover>
            
            
  

          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" activator="parent" width="auto" style="background-color:#940611 ;">
        <v-card style="background-color:#940611 ;">
          <v-card-actions>
            <v-btn style="background-color: aliceblue; color: black;" icon="mdi-calendar" size="x-large"
              @click="dialog3 = false">X</v-btn>
          </v-card-actions>
          <v-card-text>

            <h2 style="color: aliceblue; padding: 15px;text-align: center; ">Completa tu registro
              llenando tus datos</h2>
            <v-form>
              <h3 style="color: aliceblue;padding-bottom: 2%;">Nombres y apellidos</h3>
              <v-text-field class="form"> </v-text-field>
              <h3 style="color: aliceblue;padding-bottom: 2%; padding-top: 4%;">Correo electrónico</h3>
              <v-text-field class="form"> </v-text-field>
              <h3 style="color: aliceblue;padding-bottom: 2%; padding-top: 4%;">Contraseña</h3>
              <v-text-field class="form"> </v-text-field>
              <h3 style="color: aliceblue;padding-bottom: 2%; padding-top: 4%;">Número de teléfono (opcional)</h3>
              <v-text-field class="form"> </v-text-field>

              <v-checkbox color="white" v-model="checkbox" :rules="[v => !!v || 'Debes aceptar para continuar!']"
                label="Autorizo el tratamiento de mis datos" required></v-checkbox>
              <v-checkbox color="white" v-model="checkbox" label="Deseo recibir actualizaciones" required></v-checkbox>
              <div style="text-align:center">
                <v-btn rounded style="background-color:  aliceblue; color:black;" class="btn btn-ligh">Continuar </v-btn>
              </div>

            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>




    </div>
    <hr class="solid">
    <v-app class="myFont">
      <v-app-bar app style="position: absolute;">
        <v-app-bar-nav-icon @click="menu_izq = !menu_izq" v-if="isMobile"></v-app-bar-nav-icon>


        <v-tabs centered color="black" v-if="!isMobile">
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
          <v-col sm="5">
            <h2 style="text-align: right;padding: 4%;">Síguenos en redes sociales</h2>
          </v-col>
          <v-col sm="6">
            <v-card flat tile color="#8b1919" class="white--text text-center" style="background-color: #8B1919;">
              <v-card-text style="padding-left: 0%;">
                <v-btn :href="lik.route" :target="lik.route" v-for="lik in linkk" :key="lik.icons"
                  class="mx-4 white--text" icon>
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
      <v-footer dark padless>

        <div style="background-color:#373737; width:100%;">
          <v-row style="padding-top: 1%;font-size: 14px;padding-right: 10%;padding-left: 8%;">
            <v-col sm="4">
              <strong>Universidad Distrital Francisco José de Caldas</strong><br>
              <strong>NIT.899.999.230-7</strong><br><br>
              <p>Institución de Educación Superior sujeta
                a inspección y vigilancia por el
                Ministerio de Educación Nacional</p><br>
              <p>Acuerdo de creación N° 10 de 1948 del
                Concejo de Bogotá
                Acreditación Institucional de Alta
                Calidad - Resolución N° 23096 del 15 de
                diciembre del 2016</p>
            </v-col>
            <v-col>
              <strong>Nosotros</strong><br><br>

              <a v-for="nos in nosotros" :key="nos.name" style="color: aliceblue;" target="_blank" :href="nos.route"> {{
                nos.name }} <br><br>
              </a>
            </v-col>
            <v-col>
              <strong>Servicios</strong><br><br>
              <a v-for="servicio in servicios" :key="servicio.name" style="color: aliceblue;" target="_blank"
                :href="servicio.route"> {{ servicio.name }} <br><br>
              </a>
            </v-col>
            <v-col>
              <strong>Novedades</strong><br><br>
              <a v-for="novedad in novedades" :key="novedad.name" style="color: aliceblue;" target="_blank"
                :href="novedad.route"> {{ novedad.name }} <br><br>
              </a>
            </v-col>
            <v-col>
              <strong>Contáctenos</strong><br><br>
              <p>Coordinador<br>
                Carlos Enrique Montenegro Marín
                cemontenegrom@udistrital.edu.co</p><br>
              <p>Cl. 13 #31-75<br>
                Bogotá D.C. República de Colombia</p><br>
              <p>323 9300 ext: 6368<br>
                planesticud@udistrital.edu.co<br>
                Lunes a viernes de 8 a.m. a 5 p.m</p>
            </v-col>
          </v-row>
        </div>


        <div class="px-4 py-8 bg-black"></div>
      </v-footer>



    </v-app>
  </div>
</template>
<script src="./App.js"></script>
<style src="./App.css"></style>
