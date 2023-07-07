
export default {
  data() {
    return {
      dialog2: false,
      dialog3: false,
      dialog4: false,
      title: "Bienvenido",
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
      isMobile: false,
    };
  },
  methods: {
    getName() {
      if (localStorage.name) {
        this.isLogin = true;
        this.name = localStorage.name;
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
  mounted() {


    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
