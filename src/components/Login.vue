<template>
  <div class="container">
    <div class="google-icon center">
      <a href="https://apirepository.planestic.udistrital.edu.co/api/google" class="white--text sinLine">
        <button class="btn btn-light">
          <img
            class="google-icon center"
            src="../assets/images/img_cuenta.png"
            v-b-tooltip.hover title="Iniciar Sesión"
          />
         
        </button>
        <!--href="https://apirepository.planestic.udistrital.edu.co/api/google"-->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "file",
  data() {
    return {
      currentFile: null,
      message: "",
    };
  },
  methods: {
    test_local() {
  
        localStorage.setItem("token", "Test")
        localStorage.setItem("name", "Name Test");
    },
  },
  mounted() {
    if (this.$route.query.token) {
      if (!localStorage.token) {
        const { token, name, url_image, rol, email } = this.$route.query;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("url_image", url_image);
        localStorage.setItem("rol", rol);
        localStorage.setItem("email", email);
        
        //this.$router.go(this.$router.currentRoute);
      }
      this.$router.push({ name: "home", query: {reload:"OK"} });
      //this.$router.push({ name: 'files' })
    }
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.google-icon {
  width: 50px;
  height: 50px;
}
.center {
  margin: auto;
  padding: 1px;
}
.text-access {
  max-width: 300px;
  margin: auto;
}
.sinLine {
  text-decoration: none;
  text-size-adjust: 2px;
}
</style>
