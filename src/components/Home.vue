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
        <v-text-field v-model="search" append-icon="mdi-magnify" label="¿ Que recurso estas buscando?" single-line
          hide-details></v-text-field>
      </div>
    </div>
    <div class="row" style="max-width: 100%;">
      <div class="col" style="background-color: #4A7C2F;" @click="dialog2 = true">
        <img src="../assets/images/que_es_r_digital.png" class="notes" />
      </div>
      <div class="col" style="background-color: #D63716;"  @click="dialog3 = true">
        <img src="../assets/images/papel_planestic.png" class="notes" />
      </div>
      <div class="col" style="background-color: #95bce3; "  @click="dialog4 = true">
        <img src="../assets/images/desarrollo_iniciativa.png" class="notes" />
      </div>
    </div>
    <div class="row" style="max-width: 100%;">

      <img src="../assets/images/licencia.png" class="notes2" />

    </div>

    <v-dialog v-model="dialog2" activator="parent" width="auto" style="background-color:#940611 ;">

      <v-card style="background-color:#940611 ;">
        <v-card-actions>

          <v-btn style="background-color: black; color: aliceblue;" icon="mdi-calendar" size="x-large"
            @click="dialog2 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: aliceblue;">¿Qué es RDigital -UD?</h1>
          &nbsp;
          <h3 style=" color: aliceblue;">
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
            aportar a la formación e investigación

          </h3>
        </v-card-text>

      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" activator="parent" width="auto" style="background-color:#940611 ;">

<v-card style="background-color:#940611 ;">
  <v-card-actions>

    <v-btn style="background-color: black; color: aliceblue;" icon="mdi-calendar" size="x-large"
      @click="dialog3 = false">X</v-btn>
  </v-card-actions>
  <v-card-text>

    <h1 style=" color: aliceblue;">¿Cuál es el papel de Planestic- UD?</h1>
    &nbsp;
    <h3 style=" color: aliceblue;">
      
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
la institución

    </h3>
  </v-card-text>

</v-card>
</v-dialog>

<v-dialog v-model="dialog4" activator="parent" width="auto" style="background-color:#940611 ;">

<v-card style="background-color:#940611 ;">
  <v-card-actions>

    <v-btn style="background-color: black; color: aliceblue;" icon="mdi-calendar" size="x-large"
      @click="dialog4 = false">X</v-btn>
  </v-card-actions>
  <v-card-text>

    <h1 style=" color: aliceblue;">¿Cuál es el papel de Planestic- UD?</h1>
    &nbsp;
    <h3 style=" color: aliceblue;">
      
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
la institución

    </h3>
  </v-card-text>

</v-card>
</v-dialog>

  </v-container>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>