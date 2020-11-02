<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        {{title}}
      </div>
      <v-btn :to="button.route" v-for="(button, index) in buttons" :key="index" text>
        {{button.text}}
      </v-btn>
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
      title: 'Repositorio UD',
      buttons:[
        {text:'Inicio', route:'/home'},
        {text:'Usuarios', route:'/users'},
        {text:'Recursos', route:'/files'},
        ]
    }
  },
    methods: {

    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }

  },
};
</script>
