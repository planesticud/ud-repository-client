
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
          src: require('../assets/images/banner1.png')
        },
        
        {
          src:  require('../assets/images/banner2.png')
        },
        {
          src:  require('../assets/images/banner3.png')
        },
        {
          src:  require('../assets/images/banner4.png')
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
