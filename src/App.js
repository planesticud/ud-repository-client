export default {
  name: "app",
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      acerca: false,
      menu_izq: false,
      drawer: false,
      isLogin: false,
      linkk: [
        {
          icons: "mdi-home",
          route: "/home",
          des: "Inicio",
        },
        {
          icons: "mdi-facebook",
          route: "https://www.facebook.com/PlanesticudUniversidadDistrital",
          des: "Facebook",
        },
        {
          icons: "mdi-twitter",
          route: "https://twitter.com/PlanEsTICUD",
          des: "Twitter",
        },
        {
          icons: "mdi-youtube",
          route:
            "https://www.youtube.com/channel/UCT75A2ENF7b0_NK9k0qrTVw/videos",
          des: "YouTube",
        },
        {
          icons: "mdi-instagram",
          route: "https://www.instagram.com/planesticud/",
          des: "Instagram",
        },
        {
          icons: "mdi-email",
          route: "https://planestic.udistrital.edu.co/contact",
          des: "Contacto",
        },
      ],
      title: "RDigital UD",
      url_image: "",
      buttons: [
        { text: "Inicio", route: "/home" },
        { text: "Nosotros", route: "/about" },
        { text: "Estadistica", route: "/"},
        { text: "Hazte colaborador", route: "/colaborador"}
      ],
      name: "",
      token: "",
      isMobile: false,
      logoStyle: {
        backgroundColor: "#FFFFFF",
        width: 500,
      },
      backStyle: {
        "background-color": "#F3F3F3",
      },

      items: [
        {
          src: "https://repository-planesticud.s3.amazonaws.com/1635204858047banner-01ok.jpg",
        },
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
      isMobile2: false,
      rol: "",
      nosotros: [
        {
          name: "Acerca de Planestic",
          route: "https://planestic.udistrital.edu.co/acerca-de-planestic",
        },
        {
          name: "Comité Planestic",
          route: "https://planestic.udistrital.edu.co/comite-planestic",
        },
        {
          name: "Grupo Planestic",
          route: "https://planestic.udistrital.edu.co/grupo_planestic",
        },
        {
          name: "Campos de Acción",
          route: "https://planestic.udistrital.edu.co/campos-de-accion",
        },
        {
          name: "Observatorio UD",
          route: "https://planestic.udistrital.edu.co/observatorio-ud",
        },
        {
          name: "Educación virtual",
          route: "https://planestic.udistrital.edu.co/educaci%C3%B3n_virtual",
        },
      ],

      servicios: [
        {
          name: "Solicitud Turnitin ",
          route: "https://planestic.udistrital.edu.co/form/turnitin",
        },
        {
          name: "Inscripción cursos ",
          route: "https://planestic.udistrital.edu.co/cursos",
        },
        {
          name: "Video tutoriales ",
          route: "https://planestic.udistrital.edu.co/video_tutoriales",
        },
        {
          name: "Centro de ayuda ",
          route: "https://planestic-ud.tawk.help/",
        },
        {
          name: "Facultades ",
          route: "https://planestic.udistrital.edu.co/facultades",
        },
        {
          name: "Portafolio de servicios",
          route: "https://planestic.udistrital.edu.co/portafolio-servicio",
        },
      ],
      novedades: [
        {
          name: "Noticias",
          route: "https://planestic.udistrital.edu.co/noticias",
        },
        {
          name: "Publicaciones",
          route: "https://planestic.udistrital.edu.co/publicaciones",
        },
        {
          name: "Galería",
          route: "https://planestic.udistrital.edu.co/galeria",
        },
        {
          name: "Blog",
          route: "https://planestic.udistrital.edu.co/blog",
        },
      ],
    };
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    getName() {
      if (localStorage.name) {
        this.name = localStorage.name;
        this.rol = localStorage.rol
      }
    },
    image() {
      if (localStorage.url_image) {
        this.isLogin = true;
        this.url_image = localStorage.url_image;
        // cmbnoe1
        this.isMobile2 = true;
        this.rol = localStorage.rol;
        // fin cmbnoe1
      } else {
        this.isLogin = false;
      }
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.backStyle = {
          "background-color": "#1e1e1e",
        };
      } else {
        this.backStyle = {
          "background-color": "#F3F3F3",
        };
      }
    },
    logout() {
      this.isLogin = false;
      localStorage.clear();
      this.image();
      this.$router.push({ name: "home" });
      location.reload();
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
    ver_acerca() {
      this.acerca = !this.acerca;
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.token) {
      this.token = localStorage.token;

      if (localStorage.rol === "ADMINISTRADOR") {

        this.buttons.push({ text: "Recursos", route: "/files" });
        this.buttons.push({ text: "Usuarios", route: "/users" });

      }
      if (localStorage.rol === "EVALUADOR") {

        this.buttons.push({ text: "Revisar", route: "/review" });
        this.buttons.push({ text: "Mis Recursos", route: "/files" });

      }
      if (localStorage.rol === "DOCENTE") {
        this.buttons.push({ text: "Mis Recursos", route: "/files" });
      }
      if (localStorage.rol === "ESTUDIANTE") {
        this.buttons.push({ text: "Mis Recursos", route: "/files" });
      }
    }
    this.image();
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
