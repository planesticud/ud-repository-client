<template>
  <v-container class="lighten-5 hcontainer">
    <v-container>
      <h2>{{ title }} {{ name }}</h2>
    </v-container>
    <v-carousel :show-arrows="true" v-if="!isMobile" height="auto">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="row row--dense">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="col-sm-6 col-lg-4 col-12"
      >
        <div
          class="overflow-hidden v-sheet v-sheet--outlined rounded"
          min-height="61"
          style="min-height: 61px"
        >
          <a
            :href="button.route"
            class="v-list-item v-list-item--link"
            tabindex="0"
          >
            <div class="v-list-item__icon">
              <v-icon x-large :title="button.text">{{ button.icon }}</v-icon>
            </div>
            <div class="v-list-item__content">
              <div class="v-list-item__title">{{ button.text }}</div>
              <div class="v-list-item__subtitle">{{ button.description }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Bienvenido",
      name: "",
      isLogin: false,
      buttons: [],
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
      isMobile: false,
    };
  },
  methods: {
    getName() {
      if (localStorage.name) {
        this.isLogin = true;
        this.name = localStorage.name;
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
  mounted() {
    if (this.$route.query.reload && localStorage.reload !== "OK") {
      localStorage.reload = "OK";
      location.reload();
    }
    if (localStorage.rol === "ADMINISTRADOR") {
      this.buttons = [
        {
          text: "Inicio",
          route: "/home",
          description: "Inicio repositorio",
          icon: "mdi-home-account",
        },
        {
          text: "Usuarios",
          route: "/users",
          description: "Administración de usuarios",
          icon: "mdi-account-group",
        },
        {
          text: "Recursos",
          route: "/files",
          description: "Administración de recursos",
          icon: "mdi-file",
        },
        {
          text: "Estadísticas",
          route: "/statistics",
          description: "Uso de los recursos",
          icon: "mdi-elevation-rise",
        },
      ];
    }
    //cmbnoe
    if (localStorage.rol === "EVALUADOR") {
      this.buttons = [
        {
          text: "Inicio",
          route: "/home",
          description: "Inicio repositorio",
          icon: "mdi-home-account",
        },
        {
          text: "Mis Recursos",
          route: "/files",
          description: "Administración de recursos",
          icon: "mdi-file",
        },

        {
          text: "Revisar",
          route: "/revisar",
          description: "Revisar recursos",
          icon: "mdi-clipboard-check-outline",
        },
        {
          text: "Estadísticas",
          route: "/statistics",
          description: "Uso de los recursos",
          icon: "mdi-elevation-rise",
        },
      ];
    }
    //fin cmbnoe
    if (localStorage.rol === "DOCENTE") {
      this.buttons = [
        {
          text: "Inicio",
          route: "/home",
          description: "Inicio repositorio",
          icon: "mdi-account",
        },
        {
          text: "Mis Recursos",
          route: "/files",
          description: "Administración de recursos",
          icon: "mdi-file",
        },
        {
          text: "Estadísticas",
          route: "/statistics",
          description: "Uso de los recursos",
          icon: "mdi-elevation-rise",
        },
      ];
    }
    if (localStorage.rol === "ESTUDIANTE") {
      this.buttons = [
        {
          text: "Inicio",
          route: "/home",
          description: "Inicio repositorio",
          icon: "mdi-home-account",
        },
        {
          text: "Busqueda de Recursos",
          route: "/filesbuscar",
          description: "Busqueda de recursos",
          icon: "mdi-file",
        },
      ];
    }
    this.getName();
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

 <style scoped>
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;
}
.hcontainer {
  max-width: 100%;
  padding-right: 5%;
  padding-left: 5%;
  margin-right: auto;
  margin-left: auto;
}
.list-item__icon {
  display: inline-flex;
  min-width: 24px;
}
</style>