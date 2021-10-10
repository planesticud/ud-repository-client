<template>
  <div class="container">
    <div class="google-icon center">
      <a href="https://apirepository.planestic.udistrital.edu.co/api/google">
        <button class="btn btn-light">
          <img
            class="google-icon center"
            src="../assets/images/googleicon.png"
          />
          <!--  <p>Inicio de sesión</p>-->
        </button>
       <!-- href="https://apirepository.planestic.udistrital.edu.co/api/google"-->
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
  width: 1px;
  height: 1px;
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
