<template>
  <v-container class="lighten-5 container">
    <br/> <br/>

    <v-row align="center" class="list px-3 mx-auto">
      <div class="panel-body">

        <div>
      <h1 class="form">{{ title }}</h1>
      <p></p>
    </div>
        <div v-if="currentFile">
          <v-progress-linear
            v-model="progress"
            color="light-blue"
            height="10"
            value="10"
            striped
          >
            <template>
              <strong>{{ progress }}%</strong>
            </template>
          </v-progress-linear>
          <br />
        </div>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
        </vue-form-generator>

        <h3 class="text-title">Cargar Recursos</h3>
        
        <v-file-input
          v-model="file"
          :rules="rules"
          show-size
          counter
          required
          label="Adjuntar archivo"
          accept="image/*, audio/*, video/*, application/pdf, .docx, .xlsx, 
                    application/zip, application/rar, application/rar, application/tar, 
                    application/docx, application/vnd.ms-excel, application/msword, 
                    application/vnd.ms-powerpoint, text/html, text/htm"
        ></v-file-input>

        <p>&nbsp;</p>
      </div>
      <div>
        <v-dialog v-model="dialog" max-width="350">
          <v-card>
            <v-card-title class="headline"> Resultado </v-card-title>
            <v-card-text>
              <v-alert
                v-if="result.state"
                border="top"
                :color="result.color"
                dark
              >
                {{ result.text }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-if="result.state"
                color="green darken-1"
                text
                @click="volver()"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-alert
                v-if="!result.state"
                border="top"
                :color="result.color"
                dark
              >
                {{ result.text }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-if="!result.state" @click="cerrar()"> Cerrar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog v-model="dialog_der" persistent max-width="70%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="btnsave" v-bind="attrs" v-on="on">
              Autorización de derechos de autor
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">AUTORIZACIÓN DE DERECHOS DE AUTOR </span>
            </v-card-title>
            <p></p>

            <v-card-text class="textcent">
              <span class="textder"
                >PRIMERO. -ALCANCE DE LA AUTORIZACIÓN:
              </span>
              <br />
              <span class="textcent">
                La presente autorización, no exclusiva, para usos académicos y
                promocionales de la investigación de la Universidad Distrital
                Francisco José de Caldas, se otorga para: •La reproducción por
                cualquier forma o procedimiento, en especial para medios
                impresos o electrónicos; •La inclusión en bases de datos de la
                Universidad Distrital Francisco José de Caldas o de entidades
                aliadas para fines académicos; •La inclusión de referencia en
                catálogos, bases de datos e índices bibliográficos, jornadas de
                socialización y portales web de la Universidad Distrital
                Francisco José de Caldas; •La comunicación pública por cualquier
                medio que sirva para difundir las palabras, los signos, los
                sonidos o las imágenes en canales de difusión de la Universidad
                Distrital Francisco José de Caldas; •La puesta a disposición del
                público ya sea en cualquier red informática o en Internet de la
                Universidad Distrital Francisco José de Caldas; •La distribución
                pública de ejemplares de la obra para la comunidad académica de
                la Universidad Distrital Francisco José de Caldas; •La
                adaptación, traducción, modificación o arreglos, u otra
                transformación de la obra para los usos académicos y de
                investigación de la Universidad Distrital Francisco José de
                Caldas; •La inclusión en soportes multimedia, colecciones,
                recopilaciones, o en general, servir de base para cualquier otra
                obra derivada.
              </span>
              <br />
              <span class="textder">PARÁGRAFO ÚNICO:</span>
              <span class="textcent">
                La presente autorización de los anteriores derechos mencionados
                en este artículo implica, de igual forma, el respeto al derecho
                moral de autor, bajo el reconocimiento del autor y su obra y a
                oponerse a toda deformación o desfiguración de la misma. Sin
                embargo, los cambios, adaptaciones y transformaciones que
                realice la Universidad son consentidos y no afectarán ningún
                derecho moral.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"
                >SEGUNDA. -DURACIÓN Y CAMPO DE APLICACIÓN:</span
              >
              <br />
              <span class="textcent">
                presente autorización se otorga a título gratuito, por una
                duración de 70 años de acuerdo con el artículo 4º de la Ley 1915
                de 2018, contados a partir del presente escrito y sin ningún
                tipo de limitación dentro del ámbito territorial, para los fines
                académicos o de difusión científica.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"> TERCERA. -DECLARACIÓN DE LEGALIDAD: </span>
              <br />
              <span class="textcent">
                Manifiesto que detento la titularidad originaria de los derechos
                patrimoniales sobre la obra que autorizo mediante el presente
                documento y, por lo tanto, no infrinjo o usurpo derechos de
                autor de terceros. Además, manifiesto que la obra no contiene
                citas ni transcripciones de otras obras protegidas por fuera de
                los límites autorizados por la ley, según los usos honrados para
                los fines previstos; ni tampoco contiene declaraciones
                difamatorias contra terceros, respetando su derecho a la imagen,
                intimidad, buen nombre y demás derechos Constitucionales.
                [Adicionalmente, afirmo que las tablas, figuras, imágenes,
                videos y sonidos también son originales, y en aquellos casos que
                se han tomado de otras contribuciones y que han sido
                reproducidas total o parcialmente en el artículo autorizado,
                cuentan con la debida autorización escrita de los titulares de
                los derechos en el caso que sea necesario].
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">CUARTA. -INDEMNIDAD:</span>
              <br />
              <span class="textcent">
                Manifiesto que los derechos sobre la obra objeto de la presente
                autorización no han sido cedidos con antelación y que sobre
                ellos no pesa ningún gravamen ni limitación en su uso o
                utilización. Por lo anterior, manifiesto que, en caso de
                presentarse cualquier reclamación o acción por parte de un
                tercero en cuanto a los derechos de autor sobre el recurso
                digital en cuestión, asumiré toda la responsabilidad y saldré en
                defensa de los derechos que consagra la autorización respectiva;
                para los efectos la Universidad Distrital Francisco José de
                Caldas actúa como un tercero de buena fe.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder"
                >QUINTA -IMÁGENES DE TERCEROS Y DE MENORES DE EDAD:</span
              >
              <br />
              <span class="textcent">
                Manifiesto que las imágenes que han sido captadas en fotografías
                y/o videos y/o de terceros o de menores de edad, incluidos en la
                obra la cual autorizado o que soportan el mismo, cuentan con la
                debida autorización, atendiendo que las mimas tienen por
                finalidad destinarlas a la promoción institucional y académica
                en los medios que la Universidad Distrital Francisco José de
                Caldas considere pertinentes.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">SEXTA- LEGISLACIÓN APLICABLE: </span>
              <br />
              <span class="textcent">
                La legislación aplicable para efectos de interpretar la presente
                autorización será la Decisión Andina 351 de 1993, la Ley 23 de
                1982, Ley 1915 de 2018 y el artículo 181 de la Ley 1955 de 2019.
              </span>
            </v-card-text>

            <v-card-text class="textcent">
              <span class="textder">SÉPTIMA. -NOTIFICACIONES: </span>
              <br />
              <span class="textcent">
                Manifiesto que, para todos los efectos relacionados con la
                ejecución de esta autorización, recibiré notificaciones y
                correspondencia en la dirección de correo electrónico registrada
                en el repositorio.
              </span>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog_der = acepto(false)"
              >
                No Acepto
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog_der = acepto(true)"
              >
                Acepto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="auto">
        <template>
          <v-btn
  
            @click="submit(model)"
            class="btnsave"
          >
            Guardar
          </v-btn>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./AddFiles.js"></script>
<style src="./files.css"></style>
