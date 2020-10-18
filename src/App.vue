<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        {{title}}
      </div>
      <v-btn :to="button.route" v-for="(button, index) in buttons" :key="index" text>
        {{button.text}}
      </v-btn>

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
      title: 'MOODLE',
      buttons:[
        {text:'Home', route:'/home'},
        {text:'Users', route:'/users'},
        {text:'Courses', route:'/courses'},
        ]
    }
  }
};
</script>
