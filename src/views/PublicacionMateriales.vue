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
                    <v-col><router-link to="/materiales">
                        <v-hover v-slot="{ hover }">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;"  :class="{ 'btns': hover }">
                            Publicación de materiales
                        </v-btn></v-hover></router-link>
                    </v-col>
                    <v-col><router-link to="/licencias">
                        <v-hover v-slot="{ hover }">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;"  :class="{ 'btns': hover }">
                            Tipos de licencia
                        </v-btn></v-hover></router-link>
                    </v-col>
                </v-row>

            </v-col>


        </v-row>
    
        <v-row style="background-color:#fafbfd; padding-left: 15%; padding-right: 15%;">
            <h1 style="color: #940611; font-size: 40px;">Publicación de materiales</h1>
            <v-card-text style="font-size: 18px;">Una vez cuente con el perfil de creador de contenido, el recurso cargado
                por
                usted se contemplará bajo las siguientes consideraciones para ser publicado:</v-card-text><br>
                <v-img  src="../assets/images/consideraciones.png"></v-img>
            <v-card-text class="card-text" style="margin-top: 3%;"> En caso de cumplir con el 80% de los criterios, se publicará el material en
                plataforma y se enviará una notificación a su correo registrado.
            </v-card-text>
            <v-card-text class="card-text">En caso de tener algunos aspectos por considerar, mejorar, el equipo de
                PlanesTIC-UD le hará saber qué tipo de ajustes deberá aplicar en su recurso y, en
                caso de requerirlo, podrá contar con nuestro apoyo para llevar su material a
                publicación.</v-card-text><br>
           
        </v-row>
        <v-row class="bg-3">

        </v-row>




    </container>
</template>
<style src="./PublicacionMateriales.css"></style>