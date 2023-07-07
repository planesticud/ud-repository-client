import filesService from "../../services/files";
import statisticsService from "../../services/statistics";

export default {
  name: "files-list-buscar",
  data() {
    return {
      dialog: false,
      btnd: true,
      rating: 0,
      mplay: true,
      ver_pdf: false,
      ver_video: false,
      ver_img: false,
      ver_otros: false,
      amp_img: 200,
      img_lic: "",
      h1: {
        text: "Recursos",
        icon: "mdi-file-outline",
      },
      search: "",
      files: [],
      title: "",
      url: "Ver recurso",

      counter: 1,
      statistic: {},
      rt: "",
      objact: {},

      headers: [
        {
          text: "Título",
          value: "title",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Descripción",
          value: "description",
          align: "start",
          sortable: true,
          class: "text-button",
        },
        {
          text: "Estado",
          value: "state",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Formato",
          value: "format",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Clasificación",
          value: "purpose",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Recurso",
          value: "location",
          sortable: true,
          align: "start",
          class: "text-button",
        },
        {
          text: "Detalles",
          value: "actions",
          sortable: true,
          align: "start",
          class: "text-button",
        },
      ],
      actions: {
        detail: {
          title: "Detalle de recurso",
          icon: " mdi-format-list-bulleted",
        },
      },
    };
  },

  methods: {
    retrieveFiles() {
      if (
        localStorage.rol === "DOCENTE" ||
        localStorage.rol === "ESTUDIANTE" ||
        localStorage.rol === "ADMINISTRADOR" ||
        localStorage.rol === "EVALUADOR"
      ) {
        filesService
          .getFilesByState("Aprobado")
          .then((response) => {
            this.files = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    view_resource(id_obj) {
      //console.log(JSON.stringify(id_obj));

      this.objact = id_obj;
      if (id_obj.format === "video/mp4") {
        this.ver_video = true;
      } else if (id_obj.format === "application/pdf") {
        //  id_obj.location = id_obj.location + "#toolbar=0";
        this.ver_pdf = true;
      } else if (
        id_obj.format === "image/png" ||
        id_obj.format === "image/jpeg" ||
        id_obj.format === "image/gif"
      ) {
        //  id_obj.location = id_obj.location + "#toolbar=0";
        this.ver_img = true;
      } else {
        this.ver_otros = true;
      }
      switch (id_obj.copyright) {
        case "Atribución": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645315018077atribucion.png";
          break;
        }
        case "Atribución-NoComercial": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645317823844no_comercial.png";
          break;
        }
        case "Atribución-NoComercial-CompartirIgual": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645576514016no_comercial_compartir_igual.png";
          break;
        }
        case "Atribución-CompartirIgual": {
          this.img_lic =
            "https://repository-planesticud.s3.amazonaws.com/1645576609401compartir_igual.png";
          break;
        }
        default: {
          break;
        }
      }

      statisticsService
        .getstatisticsByid(id_obj.id)
        .then((response) => {
          this.statistic = response.data[0];
          this.statistic.num_view = this.statistic.num_view + 1;
          this.rt = ("" + this.statistic.ranking).substring(0, 3);
          //console.log(JSON.stringify(this.statistic));
        })
        .catch((e) => {
          console.log(e);
        });
    },

    salir() {
      statisticsService
        .updatestatistics(this.statistic, this.statistic.id)
        .catch((e) => {
          console.log(e);
          return false;
        });
      return false;
    },

    refreshList() {
      this.retrieveFiles();
    },

    detailFiles(id) {
      this.$router.push({ name: "detailfiles", params: { id: id } });
    },

    getColor(state) {
      if (state == "No aprobado") return "red";
      if (state == "Aprobado") return "green";
      else return "blue";
    },
    onMenuContex(idc) {
      var vido = document.getElementById(idc);
      vido.oncontextmenu = function () {
        return false;
      };
    },
    onclickMplay() {
      var vid = document.getElementById("myVideo");
      this.mplay = !this.mplay;
      if (this.mplay) {
        vid.play();
      } else {
        vid.pause();
      }
    },
    calcu() {
      this.btnd = false;
    },
    cancelarCal() {
      this.dialog = false;
      this.btnd = true;
      this.rating = 0;
    },
    calificarRecurso() {
      this.dialog = false;
      this.ver_video = false;
      this.ver_pdf = false;
      this.ver_img = false;
      this.ver_otros = false;
      this.btnd = true;

      if (this.statistic.ranking === null || this.statistic.ranking === 0.0) {
        //  console.log("es un mulo jaja " + this.ranking);
        this.statistic.num_download = 1;
        this.statistic.ranking = this.rating;
      } else {
        //      console.log("no es nulo");
        //this.statistic[0].ranking =   (this.statistic[0].ranking + this.ranking) / 2;
        this.statistic.ranking =
          (this.statistic.ranking * this.statistic.num_download + this.rating) /
          (this.statistic.num_download + 1);
        this.statistic.num_download = this.statistic.num_download + 1;
      }
      statisticsService
        .updatestatistics(this.statistic, this.statistic.id)
        .catch((e) => {
          console.log(e);
        });
      this.rating = 0;
      window.open(this.objact.location, "_blank");
    },
  },
  mounted() {
    this.retrieveFiles();
  },
};
