
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
