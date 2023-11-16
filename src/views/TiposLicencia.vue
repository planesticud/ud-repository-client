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
                    <!-- 
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
                    -->
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
                            <v-hover v-slot="{ hover }">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;" :class="{ 'btns': hover }">
                            Publicación de materiales
                        </v-btn></v-hover></router-link>
                    </v-col>
                    <v-col><router-link to="/licencias">
                        <v-hover v-slot="{ hover }">
                        <v-btn rounded style="background-color: #940611; color: aliceblue;" :class="{ 'btns': hover }">
                            Tipos de licencia
                        </v-btn></v-hover></router-link>
                    </v-col>
                </v-row>

            </v-col>


        </v-row>
        <licencias id='licencia'/>
        <v-row style="background-color:#fafbfd;padding-left: 10%;padding-right: 10%;">
            <h1 style="color: #940611; font-size: 40px;">Tipos de licencia</h1>
            <v-card-text style="font-size: 18px;">Los recursos habilitados para descarga cuentan con un tipo de licencia
                Creative Commons que nos permite compartir
                una obra bajo seis consideraciones:</v-card-text><br>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución

                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia1.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    Permite a otros distribuir, mezclar, ajustar y construir a partir de su obra, incluso con fines
                    comerciales, siempre que le sea reconocida la autoría de la
                    creación original. Esta es la licencia más servicial de las ofrecidas. Recomendada para una máxima
                    difusión y utilización de los materiales sujetos a la licencia.
                </v-card-text>
            </v-card>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución - Sin Derivar
                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia2.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    Permite la redistribución, comercial o no comercial, siempre y cuando la obra circule íntegra y sin
                    cambios, dando el crédito que corresponde.
                </v-card-text>
            </v-card>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución – No comercial – Sin Derivar
                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia3.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    Es la más restrictiva de las seis licencias principales, sólo permite que otros puedan descargar las
                    obras y compartirlas con otras personas, siempre que se
                    reconozca su autoría, pero no se pueden cambiar de ninguna manera ni se pueden utilizar comercialmente.
                </v-card-text>
            </v-card>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución – No comercial
                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia4.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    que sus nuevas obras deben siempre mencionar al autor y mantenerse sin fines comerciales, no están
                    obligados a licenciar sus obras derivadas bajo las
                    mismas condiciones.
                </v-card-text>
            </v-card>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución – No comercial – Compartir igual
                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia5.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    Permite a otros distribuir, remezclar, retocar, y crear a partir de su obra de modo no comercial,
                    siempre y cuando otorguen el crédito y licencien sus nuevas
                    creaciones bajo las mismas condiciones.
                </v-card-text>
            </v-card>
            <v-card style=" background-color:	#F5F5F5; border-radius: 20px; margin-bottom: 2%;" width="1600">
                <v-card-title style="font-weight: bold; font-size: 20px;">
                    Atribución – Compartir igual
                    <v-col class="d-flex align-end flex-column"> <v-img contain height="40"
                            src="../assets/images/licencia6.png"></v-img></v-col>
                </v-card-title>
                <v-divider color="#940611"></v-divider>
                <v-card-text style="color: black; font-size: 16px;">
                    Permite a otros remezclar, retocar, y crear a partir de su obra, incluso con fines comerciales, siempre
                    y cuando otorguen el crédito y licencien sus nuevas
                    creaciones bajo las mismas condiciones. Esta licencia suele ser comparada con las licencias “copyleft”
                    de software libre y de código abierto. Todas las nuevas
                    obras basadas en su creación portarán la misma licencia, así que cualquier obra derivada permitirá
                    también uso comercial. Esa es la licencia que usa
                    Wikipedia, y se recomienda para materiales que se beneficiarían de incorporar contenido de proyectos con
                    licencias similares.
                </v-card-text>
            </v-card>
            <v-card-text class="card-text" style="margin-top: 3%;"> Tomada de: creativecommons.net Colombia. Tipos de
                licencias.<br>
                <a href="https://co.creativecommons.net/tipos-de-licencias/" target="_blank" style="color: #F5F5F5;">https://co.creativecommons.net/tipos-de-licencias/</a>  
                Conozca más del tipo de licencia que se maneja en la página principal de Creative Commons
            </v-card-text>
            <v-row style="margin-right: 10%;">

            </v-row>



        </v-row>
        <v-row class="bg-3">

        </v-row>




    </container>
</template>
<style src="./TiposLicencia.css"></style>