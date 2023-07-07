<template>
  <v-container class="lighten-5 container" fluid>
    <br />

    <v-card>
      <v-toolbar flat> </v-toolbar>
      <v-tabs vertical grow>
        <v-tab>
          <span class="text-h6"> ¿Qué es RDigital-UD?</span>
        </v-tab>
        <v-tab>
          <span class="text-h6"> ¿Cuál es el papel de Planestic- UD? </span>
        </v-tab>
        <v-tab>
          <span class="text-h6">¿Para qué se desarrolló esta iniciativa? </span>
        </v-tab>
        <v-tab>
          <span class="text-h6">
            ¿Quiénes pueden utilizar de este espacio?
          </span>
        </v-tab>
        <v-tab>
          <span class="text-h6"> ¿Cómo participar en el repositorio? </span>
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-h6">
                Es un espacio virtual de recursos y objetos de aprendizaje que
                ofrece a la comunidad universitaria almacenar, catalogar y
                acceder a recursos digitales que apoyan la academia cuyo
                propósito es fortalecer los procesos de enseñanza – aprendizaje
                en las diferentes áreas del conocimiento y facultades de la
                Universidad.
              </p>
              <br />
              <p class="text-h6">
                Para ello el repositorio da acceso a recursos creados por
                docentes y estudiantes tales como: manuales, plantillas de
                trabajo, videos, videotutoriales, infografías, presentaciones
                interactivas, entre otras tipologías de uso libre con el
                objetivo de aportar a la formación e investigación.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-h6">
                Como parte del Plan Estratégico de Incorporación de Medios y
                Tecnologías de la Información en Procesos Educativos (2011 –
                2020), desde PlanEsTIC-UD se busca incentivar la creación,
                construcción y reutilización de Recursos Educativos Abiertos -
                REA, para el uso, adaptación y aplicación de contenidos
                digitales al interior de las aulas y espacios académicos de la
                universidad en pro de la gestión del conocimiento; para ello se
                orienta a la comunidad académica en la generación de diversos
                recursos y OVAS a ser publicados, socializados y dispuesto para
                toda la institución.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-h6">
                El objetivo de esta iniciativa es responder a los intereses y
                necesidades de la comunidad universitaria: estudiantes, docentes
                e investigadores, a fin divulgar y gestionar la producción
                académica tanto de estudiantes como de docente en la creación de
                contenidos digitales, que puede ser compartidos en el
                repositorio y por lo tanto de consulta para toda la comunidad
                académica, fortaleciendo la gestión de conocimiento en la
                producción de dichos recursos.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-h6">
                Todos los docentes, investigadores, estudiantes y egresados
                adscritos a la Universidad Francisco José de Caldas que quieran
                participar de este espacio.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="text-h6">
                Para participar en este espacio, se debe tener en cuenta los
                siguientes aspectos:
              </p>
              <br />
              <v-list>
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Ser parte de la comunidad académica de la Universidad
                        Distrital Francisco José de Caldas (estudiantes,
                        docentes, egresados)
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-email-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Tener activo el correo institucional de la Universidad
                        Francisco José de Caldas.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-clipboard-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Tener un recurso digital finalizado y previamente
                        estructurado acerca de una temática en particular,
                        recuerde que este podrá ser de la tipología que
                        considere (video, imagen, manual, entre otras).
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-cloud-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Estar dispuesto a compartir el recurso con otras
                        personas de acuerdo con la aprobación de la autorización
                        de derechos de autor (Anexar formato).
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-shield-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Usar el contenido descargado de manera responsable,
                        reconociendo al autor moral, su obra y la licencia de
                        uso con el cual está etiquetado en el recurso.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account-supervisor-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Estar en condiciones de recibir apoyo de PlanEsTIC en la
                        preparación y adecuación del recurso.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-check-decagram</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Ser avalado el recurso para su publicación
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <br />
  </v-container>
</template>
<script src="./About.js"></script>
<style src="./About.css"></style>
