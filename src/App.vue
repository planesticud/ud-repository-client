<template>
  <v-app>
    <v-app-bar app dark>
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
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
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
            {{ button.text }}
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
          <a @click="logout"> Cerrar Sesion </a>
        </div>
        <a
          class="pull-right"
          v-else
          href="https://apirepository.damillano.com/api/google"
        >
          Iniciar Sesion
        </a>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Repositorio UD",
      isLogin: false,
      url_image: "",
      buttons: [],
      name: "",
      token: "",
      isMobile: false,
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
      } else {
        this.isLogin = false;
      }
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    logout() {
      localStorage.clear();
      this.image();
      this.$router.push({ name: "login" });
      location.reload();
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.token) {
      this.token = localStorage.token;
      this.buttons = [
        { text: "Inicio", route: "/home" },
        { text: "Recursos", route: "/files" },
      ];
      if (localStorage.rol === "ADMINISTRADOR") {
        this.buttons.push({ text: "Usuarios", route: "/users" });
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
}
</style>