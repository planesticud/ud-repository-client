<template>
  <v-container class="lighten-5 container">
    <v-container> </v-container>
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate
          ><h2>¿Qué es RDigital -UD?</h2>
          <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text-h6">
          <p>
            Es un espacio virtual de recursos y objetos de aprendizaje que
            ofrece a la comunidad universitaria almacenar, catalogar y acceder a
            recursos digitales que apoyan la academia cuyo propósito es
            fortalecer los procesos de enseñanza – aprendizaje en las diferentes
            áreas del conocimiento y facultades de la Universidad.
          </p>
          <p>
            Para ello el repositorio da acceso a recursos creados por docentes y
            estudiantes tales como: manuales, plantillas de trabajo, videos,
            videotutoriales, infografías, presentaciones interactivas, entre
            otras tipologías de uso libre con el objetivo de aportar a la
            formación e investigación.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate
          ><h2>
            ¿Cuál es el papel de Planestic- UD?
          </h2>
            <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
          </v-expansion-panel-header
        >
        <v-expansion-panel-content class="text-h6">
          Como parte del Plan Estratégico de Incorporación de Medios y
          Tecnologías de la Información en Procesos Educativos (2011 – 2020),
          desde PlanEsTIC-UD se busca incentivar la creación, construcción y
          reutilización de Recursos Educativos Abiertos - REA, para el uso,
          adaptación y aplicación de contenidos digitales al interior de las
          aulas y espacios académicos de la universidad en pro de la gestión del
          conocimiento; para ello se orienta a la comunidad académica en la
          generación de diversos recursos y OVAS a ser publicados, socializados
          y dispuesto para toda la institución.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate
          ><h2>
            ¿Para qué se desarrolló esta iniciativa?
          </h2>
            <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
          </v-expansion-panel-header
        >
        <v-expansion-panel-content class="text-h6">
          El objetivo de esta iniciativa es responder a los intereses y
          necesidades de la comunidad universitaria: estudiantes, docentes e
          investigadores, a fin divulgar y gestionar la producción académica
          tanto de estudiantes como de docente en la creación de contenidos
          digitales, que puede ser compartidos en el repositorio y por lo tanto
          de consulta para toda la comunidad académica, fortaleciendo la gestión
          de conocimiento en la producción de dichos recursos.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate
          ><h2>
            ¿Qué debe tener en cuenta para participar en el repositorio?
          </h2>
            <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
          </v-expansion-panel-header
        >
        <v-expansion-panel-content class="text-h6">
          <p>
            Para participar en este espacio, se debe tener en cuenta los
            siguientes aspectos:
          </p>

          <ul>
            <li>
              Ser parte de la comunidad académica de la Universidad Distrital
              Francisco José de Caldas (estudiantes, docentes, egresados)
            </li>
            <li>
              Tener activo el correo institucional de la Universidad Francisco
              José de Caldas.
            </li>
            <li>
              Tener un recurso digital finalizado y previamente estructurado
              acerca de una temática en particular, recuerde que este podrá ser
              de la tipología que considere (video, imagen, manual, entre
              otras).
            </li>
            <li>
              Estar dispuesto a compartir el recurso con otras personas de
              acuerdo con la aprobación de la autorización de derechos de autor
              (Anexar formato)
            </li>
            <li>
              Usar el contenido descargado de manera responsable, reconociendo
              al autor moral, su obra y la licencia de uso con el cual está
              etiquetado el recurso.
            </li>
            <li>
              Estar en condiciones de recibir apoyo de PlanEsTIC en la
              preparación y adecuación del recurso.
            </li>
            <li>Ser avalado el recurso para su publicación</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate
          ><h2>
            ¿Quiénes pueden utilizar de este espacio?
          </h2>  <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
          </v-expansion-panel-header
        >
        <v-expansion-panel-content class="text-h6">
          Todos los docentes, investigadores, estudiantes y egresados adscritos
          a la Universidad Francisco José de Caldas que quieran participar de
          este espacio.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
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
</script>

 <style scoped>
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;
}
.container {
  max-width: 100%;
  padding-right: 5%;
  padding-left: 5%;
  margin-right: auto;
  margin-left: auto;
}
.list-item__icon {
  display: inline-flex;
  min-width: 24px;
}
</style>