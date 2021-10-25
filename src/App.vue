<template>
  <div>
    <div v-if="!isMobile" class="banner-all" :style="myStyle">
      <img class="logo-planestic1" src="./assets/images/logo_rdigital.png" />
      <img
        class="logo-planestic2"
        src="./assets/images/logo_planestic2-01.png"
      />
    </div>
    <v-app>
      <v-app-bar app style="position: absolute">
        <div v-if="!isMobile" class="d-flex align-center mr-2">
          {{ title }}
        </div>
        <v-menu left bottom v-if="isMobile">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              :to="button.route"
              v-for="(button, index) in buttons"
              :key="index"
              text
            >
              <v-list-item-title>{{ button.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else>
          <div v-if="token">
            <v-btn
              :to="button.route"
              v-for="(button, index) in buttons"
              :key="index"
              text
            >
              <v-hover v-slot="{ hover }" open-delay="200">
                <label :class="hover ? 'osc' : ''">
                  {{ button.text }}
                </label>
              </v-hover>
            </v-btn>
          </div>
        </div>
        <div>
          <v-tooltip v-if="$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small fab @click="darkMode">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </div>
        <div class="pull-right">
          <div class="pull-right" v-if="isLogin">
            <v-avatar class="pull-right">
              <img :src="url_image" :alt="name" />
            </v-avatar>
            &nbsp;{{ name }}&nbsp;
            <a @click="logout">
              <v-icon title="Salir" size="36px"> mdi-exit-run </v-icon>
            </a>
            <p class="nombre mx-4">{{ rol }}</p>
          </div>
          <a
            class="pull-right sinLine mr-2"
            v-else
            href="https://apirepository.planestic.udistrital.edu.co/api/google"
          >
            <v-icon> mdi-account </v-icon>
            Iniciar Sesion
          </a>
        </div>
      </v-app-bar>

      <!-- cmbnoe1 -->
      <br />
      <v-container class="lighten-5">
        <br />
        <v-carousel :show-arrows="true" v-if="!isMobile2" height="auto">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <!--Fin cmbnoe1 -->
      <router-view />
      <v-card dark padless>
        <v-card flat tile color="#8b1919" class="white--text text-center">
          <v-card-text>
            <v-btn
              :href="lik.route"
              :target="lik.route"
              v-for="lik in linkk"
              :key="lik.icons"
              class="mx-6 white--text"
              icon
            >
              <v-hover v-slot="{ hover }" open-delay="200">
                <v-icon
                  :title="lik.des"
                  :size="hover ? '64px' : '36px'"
                  :class="{ 'on-hover': hover }"
                >
                  {{ lik.icons }}
                </v-icon>
              </v-hover>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-card>
      <v-footer dark padless>
        <div class="row row--dense">
          <!------------- columna 1 ---------------->
          <div class="col-sm-4 col-lg-5 col-12">
            <div class="overflow-hidden v-sheet v-sheet--outlined rounded">
              <div>
                <v-card-title class="justify-center">
                  Universidad Distrital Francisco José de Caldas
                </v-card-title>
                <v-card-subtitle class="text-lg-center">
                  NIT. 899.999.230.7
                </v-card-subtitle>
                <v-card-text class="text-lg-center">
                  Institución de Educación Superior sujeta a inspección y
                  vigilancia por el Ministerio de Educación Nacional.
                  <v-spacer></v-spacer>
                  Acuerdo de creación Nº 10 de 1948 del Concejo de Bogotá.
                  <v-spacer></v-spacer>
                  Acreditación Institucional de Alta Calidad
                  <br />
                  Resolución Nº 23096 del 15 de diciembre de 2016.
                </v-card-text>
                <v-divider></v-divider>

                <v-card-title class="justify-center">
                  Planestic - UD
                </v-card-title>
                <v-card-text class="text-lg-center">
                  Plan Estratégico en Tecnologías de la Información y la
                  Comunicación
                  <v-spacer></v-spacer>
                  Resolución No. 053 - 2013
                  <v-spacer></v-spacer>
                  Acuerdo No. 001 de 2013
                </v-card-text>
                <v-divider></v-divider>
              </div>
            </div>
          </div>
          <!------------- Fin columna 1 ---------------->

          <!------------- columna 2 ---------------->
          <div class="col-sm-4 col-lg-4 col-12">
            <div class="overflow-hidden v-sheet v-sheet--outlined rounded">
              <div class="row row--dense">
                <div class="col-sm-6 col-lg-4 col-12">
                  <div
                    class="overflow-hidden v-sheet v-sheet--outlined rounded"
                  >
                    <div>
                      <v-card-title class="justify-center">
                        Nosotros
                      </v-card-title>
                      <v-card-text class="text-lg-center">
                        <v-spacer v-for="nos in nosotros" :key="nos.name">
                          <a
                            :target="nos.route"
                            :href="nos.route"
                            class="white--text sinLine"
                          >
                            {{ nos.name }}
                          </a>
                          <br /><br />
                        </v-spacer>
                      </v-card-text>
                      <v-divider></v-divider>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-12">
                  <div
                    class="overflow-hidden v-sheet v-sheet--outlined rounded"
                  >
                    <div>
                      <v-card-title class="justify-center">
                        Servicios
                      </v-card-title>
                      <v-card-text class="text-lg-center">
                        <v-spacer v-for="nos in servicios" :key="nos.name">
                          <a
                            :target="nos.route"
                            :href="nos.route"
                            class="white--text sinLine"
                          >
                            {{ nos.name }}
                          </a>
                          <br /><br />
                        </v-spacer>
                      </v-card-text>
                      <v-divider></v-divider>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-12">
                  <div
                    class="overflow-hidden v-sheet v-sheet--outlined rounded"
                  >
                    <div>
                      <v-card-title class="justify-center">
                        Novedades
                      </v-card-title>
                      <v-card-text class="text-lg-center">
                        <v-spacer v-for="nos in novedades" :key="nos.name">
                          <a
                            :target="nos.route"
                            :href="nos.route"
                            class="white--text sinLine"
                          >
                            {{ nos.name }}
                          </a>
                          <br /><br />
                        </v-spacer>
                      </v-card-text>
                      <v-divider></v-divider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!------------- Fin  columna 2 ---------------->
          <!------------- columna 3 ---------------->
          <div class="col-sm-4 col-lg-3 col-12">
            <div class="overflow-hidden v-sheet v-sheet--outlined rounded">
              <div>
                <v-card-title class="justify-center">
                  <strong>Contáctenos</strong>
                </v-card-title>
                <v-card-text class="text-lg-center">
                  Coordinador José Ignacio Palacios
                  <br />
                  coordinadorplanestic@udistrital.edu.co
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="text-lg-center">
                  Avenida Ciudad de quito # 64 - 81
                  <br />
                  Bogotá D.C. Republica de Colombia
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="text-lg-center">
                  3239300 ext: 6368 planesticud@udistrital.edu.co
                  <br />
                  Lunes a viernes de 8 a.m. a 5 p.m.
                </v-card-text>
                <v-divider></v-divider>
              </div>
            </div>
          </div>
          <!------------- Fin columna 3 ---------------->
        </div>
      </v-footer>

      <v-card dark flat tile class="white--text text-center">
        <v-card-text>
          <strong>
            © Copyright {{ new Date().getFullYear() }} — Sitio creado y
            administrado por Planestic-UD</strong
          >
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      linkk: [
        {
          icons: "mdi-home",
          route: "/home",
          des: "Inicio",
        },
        {
          icons: "mdi-facebook",
          route: "https://www.facebook.com/PlanesticudUniversidadDistrital",
          des: "Facebook",
        },
        {
          icons: "mdi-twitter",
          route: "https://twitter.com/PlanEsTICUD",
          des: "Twitter",
        },
        {
          icons: "mdi-youtube",
          route:
            "https://www.youtube.com/channel/UCT75A2ENF7b0_NK9k0qrTVw/videos",
          des: "YouTube",
        },
        {
          icons: "mdi-instagram",
          route: "https://www.instagram.com/planesticud/",
          des: "Instagram",
        },
        {
          icons: "mdi-email",
          route: "https://planestic.udistrital.edu.co/contact",
          des: "Contacto",
        },
      ],
      title: "RDigital UD",
      isLogin: false,
      url_image: "",
      buttons: [],
      name: "",
      token: "",
      isMobile: false,
      myStyle: {
        backgroundColor: "#8b1919",
        width: 700,
      },
      backStyle: {
        "background-color": "#F3F3F3",
      },
      items: [
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635204858047banner-01ok.jpg",
        },
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635123148623banner-03.jpg",
        },
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635123301914banner-04.jpg",
        },
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635123404214banner-05.jpg",
        },
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635204972706banner-06ok.jpg",
        },
      ],
      isMobile2: false,
      rol: "",
      nosotros: [
        {
          name: "Acerca de Planestic",
          route: "https://planestic.udistrital.edu.co/acerca-de-planestic",
        },
        {
          name: "Comité Planestic",
          route: "https://planestic.udistrital.edu.co/comite-planestic",
        },
        {
          name: "Grupo Planestic",
          route: "https://planestic.udistrital.edu.co/grupo_planestic",
        },
        {
          name: "Campos de Acción",
          route: "https://planestic.udistrital.edu.co/campos-de-accion",
        },
        {
          name: "Observatorio UD",
          route: "https://planestic.udistrital.edu.co/observatorio-ud",
        },
        {
          name: "Educación virtual",
          route: "https://planestic.udistrital.edu.co/educaci%C3%B3n_virtual",
        },
      ],

      servicios: [
        {
          name: "Solicitud Turnitin ",
          route: "https://planestic.udistrital.edu.co/form/turnitin",
        },
        {
          name: "Inscripción cursos ",
          route: "https://planestic.udistrital.edu.co/cursos",
        },
        {
          name: "Video tutoriales ",
          route: "https://planestic.udistrital.edu.co/video_tutoriales",
        },
        {
          name: "Centro de ayuda ",
          route: "https://planestic-ud.tawk.help/",
        },
        {
          name: "Facultades ",
          route: "https://planestic.udistrital.edu.co/facultades",
        },
        {
          name: "Portafolio de servicios",
          route: "https://planestic.udistrital.edu.co/portafolio-servicio",
        },
      ],
      novedades: [
        {
          name: "Noticias",
          route: "https://planestic.udistrital.edu.co/noticias",
        },
        {
          name: "Publicaciones",
          route: "https://planestic.udistrital.edu.co/publicaciones",
        },
        {
          name: "Galería",
          route: "https://planestic.udistrital.edu.co/galeria",
        },
        {
          name: "Blog",
          route: "https://planestic.udistrital.edu.co/blog",
        },
      ],
    };
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    image() {
      if (localStorage.url_image) {
        this.isLogin = true;
        this.url_image = localStorage.url_image;
        // cmbnoe1
        this.isMobile2 = true;
        this.rol = localStorage.rol;
        // fin cmbnoe1
      } else {
        this.isLogin = false;
      }
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.backStyle = {
          "background-color": "#1e1e1e",
        };
      } else {
        this.backStyle = {
          "background-color": "#F3F3F3",
        };
      }
    },
    logout() {
      localStorage.clear();
      this.image();
      this.$router.push({ name: "login" });
      location.reload();
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.token) {
      this.token = localStorage.token;
      this.buttons = [{ text: "Inicio", route: "/home" }];
      if (localStorage.rol === "ADMINISTRADOR") {
        this.buttons.push({ text: "Administrar Recursos", route: "/files" });
        this.buttons.push({ text: "Usuarios", route: "/users" });
        this.buttons.push({ text: "Estadísticas", route: "/stadistics" });
      }
      if (localStorage.rol === "EVALUADOR") {
        this.buttons.push({ text: "Revisar", route: "/revisar" });
        this.buttons.push({ text: "Mis Recursos", route: "/files" });
        this.buttons.push({ text: "Estadísticas", route: "/stadistics" });
      }
      if (localStorage.rol === "DOCENTE") {
        this.buttons.push({
          text: "Busqueda de Recursos",
          route: "/filesbuscar",
        });
        this.buttons.push({ text: "Mis Recursos", route: "/files" });
        this.buttons.push({ text: "Estadísticas", route: "/stadistics" });
      }
      if (localStorage.rol === "ESTUDIANTE") {
        this.buttons.push({
          text: "Busqueda de Recursos",
          route: "/filesbuscar",
        });
      }
    }
    this.image();
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style >
.pull-right {
  margin-left: auto;
  padding-top: 4px;
}
.banner-all {
  background-color: #8b1919;
  max-height: 170px;
}
.logo-planestic1 {
  margin-left: 20px;
}
.logo-planestic2 {
  max-height: 100px;
  margin: auto;
  margin-top: 5px;
  float: right;
}
.backStyle {
  background-color: #f3f3f3;
}
.sinLine {
  text-decoration: none;
}
.osc {
  background-color: #393939;
  color: #f3f3f3;
}
.cla {
  background-color: #f3f3f3;
}

.nombre {
  line-height: 0;
  padding-left: 55px;
  font-size: 12px;
}
</style>