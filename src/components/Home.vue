<template>
  <v-container style="max-width: 100%;">
    <br />

    <div class="row">
      <div class="col">
        <v-carousel :show-arrows="true" v-if="!isMobile" height="auto" class="hcontainer">
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </div>
      <div class="col">
        <v-container v-if="name">
          <h2>{{ title }} {{ name }}</h2>
        </v-container>
        <h3 style="padding-top: 15%;">Bienvenido a R-Digital</h3>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar recurso" single-line
          hide-details></v-text-field>
      </div>
    </div>
    <div class="row" style="max-width: 100%;">
      <div class="col" style="background-color: #4A7C2F;" @click="dialog2 = true">
        <img src="../assets/images/que_es_r_digital.png" class="notes" />
      </div>
      <div class="col" style="background-color: #D63716;" @click="dialog3 = true">
        <img src="../assets/images/papel_planestic.png" class="notes" />
      </div>
      <div class="col" style="background-color: #95bce3; " @click="dialog4 = true">
        <img src="../assets/images/desarrollo_iniciativa.png" class="notes" />
      </div>
    </div>
    <div class="row" style="max-width: 100%;">

      <img src="../assets/images/banco_recursos.png" class="notes2" />

    </div>
    <div class="row" style="max-width: 100%;">

      <img src="../assets/images/recursos_mas_usados_2.png" class="notes2" />

    </div>
    <div class="row" style="max-width: 100%;">

      <img src="../assets/images/cita_profesor.png" class="notes2" />

    </div>
    <h2 style="padding-left: 9%; padding-bottom: 2%; background-color:#fffbfbfb;">Preguntas más frecuentes</h2>
    <v-row justify="center"
      style="padding-left: 10%; padding-right: 10%; padding-bottom: 10%; background-color: #fffbfbfb;">

      <v-expansion-panels accordion>
        <v-expansion-panel style="background-color: #fffbfbfb;">
          <v-expansion-panel-header class="border" style="background-color: #fffbfbfb;">¿Puedo cargar recursos de mi
            autoría en RDigital -UD? </v-expansion-panel-header>
          <v-expansion-panel-content style="background-color: #fffbfbfb;">
            Sí. Su perfil para cargar recursos deberá ser autorizado por el administrador de plataforma, por tanto, deberá
            escribir un correo a: planesticforma@udistrital.edu.co mencionando su interés en ser creador de contenido y
            compartir su primer recurso para que sea revisado por el equipo de Planestic-UD el cual cambiará el perfil de
            visualizador.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color: #fffbfbfb;">
          <v-expansion-panel-header class="border" style="background-color: #fffbfbfb;">¿Quiénes pueden utilizar este
            espacio?</v-expansion-panel-header>
          <v-expansion-panel-content style="background-color: #fffbfbfb;">
            Todos los docentes, investigadores, estudiantes y egresados adscritos a la Universidad Francisco José de
            Caldas que quieran participar de este espacio.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color: #fffbfbfb;">
          <v-expansion-panel-header class="border" style="background-color: #fffbfbfb;">¿Puedo descargar recursos de la
            plataforma? </v-expansion-panel-header>
          <v-expansion-panel-content style="background-color: #fffbfbfb;">
            Sí, una vez registrado en la plataforma con el correo institucional, podrá acceder a la plataforma, visualizar
            y descargar los recursos digitales que están disponibles. Así mismo, podrá ser creador de contenido y cargar
            sus recursos propios en plataforma. Tenga en cuenta las consideraciones de las licencias en la sección:
            RECURSOS.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color: #fffbfbfb;">
          <v-expansion-panel-header class="border" style="background-color: #fffbfbfb;">¿Mi recurso se publicará
            automáticamente en la plataforma? </v-expansion-panel-header>
          <v-expansion-panel-content style="background-color: #fffbfbfb;">
            En el momento de cargar un recurso en plataforma, se hará un proceso de evaluación desde el área de
            PlanesTIC-UD para aprobar y publicar el recurso. Deberá contar con los criterios mínimos que encontrará en la
            sección: RECURSOS.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-dialog v-model="dialog2" activator="parent" width="800" style="background-color:#940611 ;">

      <v-card style="background-color:#940611 ;">
        <v-card-actions>

          <v-btn style="background-color:aliceblue ; color:black;" icon="mdi-calendar" size="x-large"
            @click="dialog2 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: aliceblue;">¿Qué es RDigital -UD?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: aliceblue; font-size: 16px; padding-top: 5%;">
                Es un espacio virtual de recursos y objetos de aprendizaje que
                ofrece a la comunidad universitaria almacenar, catalogar y
                acceder a recursos digitales que apoyan la academia cuyo
                propósito es fortalecer los procesos de enseñanza – aprendizaje
                en las diferentes áreas del conocimiento y facultades de la
                Universidad.
                Para ello el repositorio da acceso a recursos creados por
                docentes y estudiantes tales como: manuales, plantillas de
                trabajo, videos, videotutoriales, infografías, presentaciones
                interactivas, entre otras tipologías de uso libre con el objetivo de
                aportar a la formación e investigación.

              </p>
            </v-col>
            <v-col sm="4" style="text-align:center;">
              <img src="../assets/images/recurso2.png" height="300">
            </v-col>
          </v-row>
        </v-card-text>

      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" activator="parent" width="800" style="background-color:#940611 ;">

      <v-card style="background-color:#940611 ;">
        <v-card-actions>

          <v-btn style="background-color: aliceblue; color: black;" icon="mdi-calendar" size="x-large"
            @click="dialog3 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>
          <h1 style=" color: aliceblue;">¿Cuál es el papel de Planestic- UD?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: aliceblue; font-size: 16px; padding-top: 5%;">

                Como parte del Plan Estratégico de
                Incorporación de Medios y Tecnologías de la
                Información en Procesos Educativos (2011 –
                2020), desde PlanEsTIC-UD se busca
                incentivar la creación, construcción y
                reutilización de Recursos Educativos Abiertos
                - REA, para el uso, adaptación y aplicación de
                contenidos digitales al interior de las aulas y
                espacios académicos de la universidad en pro
                de la gestión del conocimiento; para ello se
                orienta a la comunidad académica en la
                generación de diversos recursos y OVAS a ser
                publicados, socializados y dispuesto para toda
                la institución.

              </p>
            </v-col>
            <v-col sm="6" style="text-align:center;">
              <img src="../assets/images/recurso3.png" height="300">

            </v-col>
          </v-row>
        </v-card-text>

      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog4" activator="parent" width="800" style="background-color:#940611 ;">

      <v-card style="background-color:#940611 ;">
        <v-card-actions>

          <v-btn style="background-color: aliceblue; color: black;" icon="mdi-calendar" size="x-large"
            @click="dialog4 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: aliceblue;">¿Por qué se desarrolló esta iniciativa?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: aliceblue; font-size: 16px; padding-top: 5%;">
                El objetivo de esta iniciativa es responder a los intereses y necesidades de la comunidad universitaria:
                estudiantes, docentes e investigadores, a fin divulgar y gestionar la producción académica a través de la
                creación de contenidos digitales que pueden ser compartidos en el repositorio de manera libre respetando
                los
                derechos de autor y fortaleciendo la producción de material digital en diferentes áreas.
              </p>
            </v-col>
            <v-col sm="7" style="text-align:center;">
              <img src="../assets/images/recurso4.png" height="250">

            </v-col>
          </v-row>
        </v-card-text>

      </v-card>
    </v-dialog>

  </v-container>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>