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
        <img src="../assets/images/rdigital.png" class="notes" />
      </div>
      <div class="col" style="background-color: #D63716;" @click="dialog3 = true">
        <img src="../assets/images/papel_planestic.png" class="notes" />
      </div>
      <div class="col" style="background-color: #95bce3; " @click="dialog4 = true">
        <img src="../assets/images/desarrollo_iniciativa.png" class="notes" />
      </div>
      <div class="col" style="background-color: #940611; " @click="dialog5 = true">
        <img src="../assets/images/nosotros.png" class="notes" />
      </div>
    </div>



    <v-row justify="center">
      <v-row>
        <h2 style="margin-left: 110%; margin-top: 20%; "> Recursos</h2>
      </v-row>
      <v-row>
        <v-card class="mx-10 my-12" max-width="300">
          <v-img height="250" src="../assets/images/criterios-minimos.png"></v-img>
          <v-card-title>Criterios mínimos</v-card-title>
          <v-card-text>Los recursos que se encuentran
            cargados en RDigital -UD deberán
            cumplir con los siguientes requisitos
            mínimos.</v-card-text>
          <v-card-actions>
            <v-btn color="red darken-4" text @click="reserve">
              > Más detalles
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-10 my-12" max-width="300">
          <v-img height="250" src="../assets/images/publicacion-materiales.png"></v-img>
          <v-card-title>Publicación de materiales</v-card-title>
          <v-card-text>El recurso cargado por usted se
            contemplará bajo las siguientes
            consideraciones.</v-card-text>
          <v-card-actions>
            <v-btn color="red darken-4" text @click="reserve">
              > Más detalles
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-10 my-12" max-width="300">
          <v-img height="250" src="../assets/images/tipos-licencia.png"></v-img>
          <v-card-title>Tipos de licencia</v-card-title>
          <v-card-text>Los recursos habilitados para descarga
            cuentan con un tipo de licencia Creative
            Commons que nos permite compartir
            una obra.</v-card-text>
          <v-card-actions>
            <v-btn color="red darken-4" text @click="reserve">
              > Más detalles
            </v-btn>
          </v-card-actions>
        </v-card></v-row>
    </v-row>

    <div class="row" style="padding-bottom: 5%; padding-left: 15%;">
      <v-col cols="5" >


        <v-carousel height="300" hide-delimiter-background cycle style="border-style: solid;padding-top:5%">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="60%" tile>
              <v-row class="fill-height" justify="center">
                <v-icon left size="45" color="red darken-2">
                  mdi-format-quote-close
                </v-icon>
                <p style="padding-top: 10%; padding-left: 20%; padding-right: 15%; align-content: center;">
                  {{ slide.txt }}
                </p>
              </v-row>
            </v-sheet>
            <v-list two-line>
              <v-list-item style="padding-left: 15%;">
                <v-list-item-avatar>
                  <v-img :src="slide.img"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ slide.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ slide.cargo }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>

                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-carousel-item>
        </v-carousel>


      </v-col>
      <v-col cols="5"><v-card style="background-color:#D63716; color:#fffbfbfb">
          <v-card-title style="font-size:26px">Hacerse colaborador </v-card-title>
          <v-card-text style=" color:#fffbfbfb" > La plataforma cuenta con dos perfiles de acuerdo
            con el interés que tenga: <br><br>
            <h3>Visualizador</h3>
            ¡Bienvenido/a al mundo de los recursos multimedia de aprendizaje!
            Aquí encontrarás una amplia gama de herramientas y materiales
            interactivos que te permitirán adquirir conocimientos de manera
            dinámica y entretenida.  <br><br>
            <h3>Creador</h3>
            ¡Bienvenido/a al mundo de los creadores de recursos multimedia de
            aprendizaje! Aquí encontrarás una plataforma donde puedes dar
            vida a tus ideas y contribuir al enriquecimiento de la educación a
            través de la creación de materiales interactivos y atractivos.</v-card-text>



        </v-card></v-col>

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
    <v-dialog v-model="dialog2" activator="parent" width="800" style="background-color:aliceblue ;">

      <v-card style="background-color:aliceblue ;border-radius: 30px;border-color: black;border-style: solid">
        <v-card-actions>

          <v-btn style="background-color:aliceblue ; color:black;border-style: solid" icon="mdi-calendar" size="x-large"
            @click="dialog2 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: #696969;">¿Qué es RDigital -UD?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: #696969; font-size: 16px; padding-top: 5%;">
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

      <v-card style="background-color:aliceblue ;border-radius: 30px;border-color: black;border-style: solid">
        <v-card-actions>

          <v-btn style="background-color: aliceblue; color: black;border-style: solid" icon="mdi-calendar" size="x-large"
            @click="dialog3 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>
          <h1 style=" color: #696969;">¿Cuál es el papel de Planestic- UD?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: #696969; font-size: 16px; padding-top: 5%;">

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

    <v-dialog v-model="dialog4" activator="parent" width="800">

      <v-card style="background-color:aliceblue ;border-radius: 30px;border-color: black;border-style: solid">
        <v-card-actions>

          <v-btn style="background-color: aliceblue; color: black;border-style: solid" icon="mdi-calendar" size="x-large"
            @click="dialog4 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: #696969;">¿Por qué se desarrolló esta iniciativa?</h1>
          &nbsp;
          <v-row>
            <v-col>
              <p style=" color: #696969; font-size: 16px; padding-top: 5%;">
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
    <v-dialog v-model="dialog5" activator="parent" width="800" style="background-color:#940611 ;">

      <v-card style="background-color:aliceblue ;border-radius: 30px;border-color: black;border-style: solid; ">
        <v-card-actions>

          <v-btn style="background-color: aliceblue; color: black;border-style: solid;" icon="mdi-calendar" size="x-large"
            @click="dialog5 = false">X</v-btn>
        </v-card-actions>
        <v-card-text>

          <h1 style=" color: #696969;">¿Quiéres saber más de nosotros?</h1>
          &nbsp;
          <v-row>

            <p style=" color: #696969; font-size: 16px; padding-top: 5%;">
              PlanesTIC-UD, representado bajo la figura de comité, busca que la incorporación de las
              Tecnologías de la Información y las Comunicaciones apoye tanto programas virtuales como
              presenciales a través de la creación de diferentes recursos digitales abiertos que puedan ser
              implementados en el proceso de enseñanza y aprendizaje, y además, incentive a los diferentes
              actores involucrados bajo dicha finalidad a adoptar el rol de creador de contenidos digitales
              donde se promueva, a través de un recurso digital que pueda ser compartido de manera libre,
              la enseñanza de un conocimiento específico.
              Como complemento a su misionalidad PlanesTIC-UD incentiva la cultura del prosumidor y la
              integración de los recursos digitales abiertos como una representación de trabajo colaborativo
              al interior de la comunidad académica.
              Para conocer más de PlanesTIC-UD y su implementación en varios proyectos en torno a las
              TIC podrá explorar la página principal del proyecto: <a href="https://planestic.udistrital.edu.co/"
                target="_blank">https://planestic.udistrital.edu.co/</a>
            </p>


          </v-row>
        </v-card-text>

      </v-card>
    </v-dialog>

  </v-container>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>