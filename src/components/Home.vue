<template>
  <v-container class="lighten-5">
    <v-container>
      <h2>{{ title }} {{name}}</h2>
    </v-container>

    <div class="row row--dense">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="col-sm-6 col-lg-4 col-12"
      >
        <div
          class="overflow-hidden v-sheet v-sheet--outlined theme--light rounded"
          min-height="61"
          style="min-height: 61px"
        >
          <a
            :href="button.route"
            class="v-list-item v-list-item--link theme--light"
            tabindex="0"
          >
            <div class="v-list-item__icon">
              <span
                aria-hidden="true"
                class="v-icon notranslate theme--light indigo--text text--darken-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                >
                  <path
                    d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"
                  ></path></svg
              ></span>
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
      buttons: [
        { text: "Inicio", route: "/home", description: "Inicio repositorio" },
        { text: "Usuarios", route: "/users", description: "Administración de usuarios" },
        { text: "Recursos", route: "/files", description: "Administración de recursos" },
        { text: "Estadisticas", route: "/statistics", description: "Uso de los recursos" },
        { text: "Historial", route: "/hisotry", description: "Historial de acciones en el repositorio" },
      ],
    };
  },
  methods: {

        getName() {
      if (localStorage.name) {
        this.isLogin = true;
        this.name = localStorage.name
      }
    },

  },
      mounted() {
          if (this.$route.query.reload && localStorage.reload !== 'OK') {
            localStorage.reload = 'OK'
            location.reload()
          }
    this.getName();
  },
};
</script>

 <style>
</style>