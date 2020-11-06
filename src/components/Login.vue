<template>
  <div class="container">
    <div class="google-icon center">
      <a href="https://apirepository.damillano.com/api/google">
        <button class="btn btn-light">
          <img
            class="google-icon center"
            src="../assets/images/googleicon.png"
          />
          <p>Inicio de sesión</p>
        </button>
        <!--href="https://apirepository.damillano.com/api/google"-->
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
      console.log(localStorage.name),
        localStorage.setItem("token", "Test"),
        localStorage.setItem("name", "Name Test");
    },
  },
  mounted() {
    console.log(this.$route.query.token);
    if (this.$route.query.token) {
      console.log("entro al if");
      if (!localStorage.token) {
        const { token, name, url_image, rol } = this.$route.query;
        console.log(this.$route.query);
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("url_image", url_image);
        localStorage.setItem("rol", rol);
        
        //this.$router.go(this.$router.currentRoute);
      }
      this.$router.push({ name: "home", query: {reload:"OK"} });
      //this.$router.push({ name: 'files' })
    }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.google-icon {
  width: 70px;
  height: 70px;
}
.center {
  margin: auto;
  padding: 1px;
}
.text-access {
  max-width: 300px;
  margin: auto;
}
</style>
