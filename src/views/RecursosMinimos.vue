<template>
    <container>
        <v-row class="bg-2" style="max-width: 100%; max-height: 100%;">
            <v-col cols="2" style="margin-top: 10%;margin-left: 3%;">
                <div class="circle">
                    &nbsp;
                    <router-link to="/files">
                        <v-btn class="mx-2" fab dark small color="#8B1919">
                            <v-icon dark>
                                mdi-file-multiple
                            </v-icon>
                        </v-btn>
                    </router-link>

                    <p></p>
                    <router-link to="/files/add">
                        <v-btn class="mx-2" fab dark small color="#8B1919">
                            <v-icon dark>
                                mdi-cloud-upload
                            </v-icon>
                        </v-btn>
                    </router-link>

                    <p></p> <router-link to="/profile">
                        <v-btn class="mx-2" fab dark small color="#8B1919">
                            <v-icon dark>
                                mdi-heart
                            </v-icon>
                        </v-btn>
                    </router-link>

                    <p></p> <router-link to="/profile">
                        <v-btn class="mx-2" fab dark small color="#8B1919">
                            <v-icon dark>
                                mdi-heart
                            </v-icon>
                        </v-btn>
                    </router-link>

                    <p></p>
                </div>
            </v-col>
            <v-col cols="7" style="margin-top: 10%;">
                <h1 style="color: aliceblue; font-size: 45px; ">Obtenga recursos ilimitados</h1>

                <v-text-field height="30" rounded append-icon="mdi-magnify" label="¿Que recurso estás buscando?" single-line
                    hide-details style="background-color: aliceblue;"></v-text-field>

                <v-row style="margin-top: 5%; margin-left: 10%;">
                    <v-col>
                        <router-link to="/materiales">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;">
                            Publicación de materiales
                        </v-btn></router-link>
                    </v-col>
                    <v-col><router-link to="/licenciss">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;">
                            Tipos de licencia
                        </v-btn></router-link>
                    </v-col>
                </v-row>

            </v-col>


        </v-row>
        <v-row id="section-one" style="background-color:#fafbfd; padding-left: 15%; padding-right: 15%;">
            <h1 style="color: #940611; font-size: 40px;">Criterios mínimos</h1>
            <v-card-text style="font-size: 18px;">Los recursos que se encuentran cargados en RDigital -UD deberán cumplir con los
                siguientes requisitos mínimos</v-card-text><br>
            <v-card-text class="card-text"> El contenido debe presentar cohesión y debe ser coherente para el público al cual
                va dirigido y con el objetivo de aprendizaje con el que fue creado. Deberá contener
                información veraz y hacer uso de fuentes bibliográficas confiables. Además, debe
                ser preciso, pertinente y que aporte a la temática de estudio relacionada. En caso
                de usar información de terceros, debe obedecer a las licencias de uso libre o deben
                ser referenciadas como reconocimiento al autor original de la obra.
            </v-card-text> 
            <v-card-text  class="card-text">El recurso cargado debe estar en editable, garantizando la reusabilidad para las
                personas que deseen adecuarlo bajo sus propósitos académicos.</v-card-text><br>
            <v-card-text  class="card-text">Se respetarán los derechos morales de autor. Tenga en cuenta que en el momento
                de cargar y publicar tendrá que ceder los derechos patrimoniales y de uso
                atendiendo al tipo de licencia con el que usted determine para su recurso.</v-card-text>
        </v-row>
        <v-row class="bg-3">

        </v-row>




    </container>
</template>
<style src="./RecursosMinimos.css"></style>