
export default {
  data() {
    return {
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      title: "Bienvenido a R-Digital",
      name: "",
      isLogin: false,
      buttons: [],
      items: [
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
      slides: [
        {
          txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut est ut urna rhoncus porta ac in lectus",
          img: "https://cdn.vuetifyjs.com/images/john.png",
          name: "Carlos Montenegro",
          cargo: "Docente",
        },
        {
          txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut est ut urna rhoncus porta ac in lectus",
          img: "https://cdn.vuetifyjs.com/images/john.png",
          name: "Carlos",
          cargo: "Rector",
        }
      ],
      isMobile: false,
    };
  },
  methods: {
    getName() {
      console.log("entro al get name")
      console.log(localStorage)
      if (localStorage.name != null) {
        console.log("entro al get name if")
        this.isLogin = true;
        this.name = localStorage.name;
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
  mounted() {
    this.getName()
    if (this.$route.query.reload && localStorage.reload != "OK") {
      localStorage.reload = "OK";
      this.$router.push({ name: "home" });
      location.reload();
    }
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
