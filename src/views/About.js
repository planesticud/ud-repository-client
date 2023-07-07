export default {
  data() {
    return {
      isLogin: false,
      isMobile: false,
    };
  },
  methods: {
    getName() {
      if (localStorage.name) {
        this.isLogin = true;
        this.name = localStorage.name;
        console.log("fecha: ", new Date(Date.now()).toLocaleDateString());
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

    this.getName();
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
