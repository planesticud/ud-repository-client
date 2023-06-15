<template>
  <div>
    <div v-if="!isMobile" class="banner-all" :style="logoStyle">
      <img class="logo-planestic1" src="./assets/images/logo2.png" />
      <img
        class="logo-planestic2"
        src="./assets/images/logo_planestic.png"
      />
       <div class="trapezoid">
        <v-icon style="color: aliceblue;"> mdi-account </v-icon> 
       <p> {{rol}}</p> 
       <p>{{name}}</p> 
       
      </div>
      
    </div>
    <hr class="solid">
    <v-app>
      <v-app-bar app style="position: absolute;">
        <v-app-bar-nav-icon
          @click="menu_izq = !menu_izq"
          v-if="isMobile"
        ></v-app-bar-nav-icon>


        <v-tabs align-with-title v-if="!isMobile">
          <v-tab
            :to="button.route"
            v-for="(button, index) in buttons"
            :key="index"
            text
          >
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
          <v-list-item
            :to="button.route"
            v-for="(button, index) in buttons"
            :key="index"
            link
          >
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



    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      acerca: false,
      menu_izq: false,
      drawer: false,
      isLogin: false,
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
      url_image: "",
      buttons: [
        { text: "Inicio", route: "/home" },
        { text: "Nosotros", route: "/acercade" },
      ],
      name: "",
      token: "",
      isMobile: false,
      logoStyle: {
        backgroundColor: "#FFFFFF",
        width: 500,
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
    getName() {
      if (localStorage.name) {
        this.name = localStorage.name;
        this.rol = localStorage.rol
      }
    },
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
      this.isLogin = false;
      localStorage.clear();
      this.image();
      this.$router.push({ name: "home" });
      location.reload();
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
    ver_acerca() {
      this.acerca = !this.acerca;
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.token) {
      this.token = localStorage.token;

      //  this.buttons = [{ text: this.title, route: "/acercade" }];
      //  this.buttons.push({ text: "Inicio", route: "/home" });

      if (localStorage.rol === "ADMINISTRADOR") {
        this.buttons.push({
          text: "Búsqueda de Recursos",
          route: "/filesbuscar",
        });
        this.buttons.push({ text: "Administrar Recursos", route: "/files" });
        this.buttons.push({ text: "Usuarios", route: "/users" });

        this.buttons.push({ text: "Estadísticas", route: "/stadistics" });
      }
      if (localStorage.rol === "EVALUADOR") {
        this.buttons.push({
          text: "Búsqueda de Recursos",
          route: "/filesbuscar",
        });
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
  max-height: 80px;
}
.logo-planestic2 {
  max-height: 60px;
  margin: auto;
  margin-top: 5px;
}
.logo-planestic3 {
  max-height: 60px;
  margin: auto;
  margin-top: 60px;
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

hr.solid {
  border-top: 6px solid #000000;
}

.trapezoid {
	border-bottom: 50px solid #8B1919;
	border-left: 25px solid transparent;
	height: 0;
	width: 300px;
  margin-top: 35px;
  float: right;
  color: #f3f3f3;
}
</style>