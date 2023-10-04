<template >
    <v-container style="padding-bottom: 5%;"> <v-row style="margin-bottom: 5%;margin-top: 5%;">
            <v-col sm="6">

                <h1 style="color: #940611; font-size: 40px; text-align: center;">Hacerse colaborador</h1><br>
                <v-card-text style="color: black; font-size: 18px;">La plataforma cuenta con dos perfiles de
                    acuerdo con el interés que tenga:</v-card-text>

                <div style="text-align:center">
                    <v-btn @click="addColaborador()" rounded style="background-color: #8B1919; color:aliceblue;" class="btn btn-ligh">Hazte
                        colaborador </v-btn>
                </div>

            </v-col>
            <v-col>
                <img alt="colaborador" src="../assets/images/recurso4.png" height="300">

            </v-col>
        </v-row>
        <v-row style="margin: auto;">

            <v-icon style="color: #8B1919;padding-right: 1%;">
                mdi-monitor
            </v-icon>
            <h2 style="color: #940611; font-size: 30px;">Visualizador</h2>

        </v-row>

        <v-row style="margin-top: 5%; margin-bottom: 5%;">
            <v-col>
                <v-img alt="icono usuario" height="150" contain src="../assets/images/icon1.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    Para acceder a la
                    plataforma solo deberá
                    hacer clic en: Iniciar sesión
                    y loguearse con su cuenta
                    de correo institucional de
                    la Universidad Distrital
                    Francisco José de Caldas.
                </v-card-text>

            </v-col>
            <v-col>
                <v-img alt="icono lupa"  height="150" contain src="../assets/images/icon2.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    Una vez haya ingresado
                    podrá buscar y consultar
                    los contenidos disponibles.
                </v-card-text>

            </v-col>
            <v-col>
                <v-img alt="icono descarga"  height="150" contain src="../assets/images/icon3.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    En caso de observar algún
                    recurso de su interés,
                    podrá descargarlo de
                    manera libre y realizando
                    la atribución de autoría del
                    autor de acuerdo con la
                    descripción disponible en
                    la plataforma.
                </v-card-text>

            </v-col>
        </v-row>
        <v-container>
            <v-divider color="#940611"></v-divider>
        </v-container>
        <v-row style="margin-top: 3%;">

            <v-icon style="color: #8B1919;padding-right: 1%;">
                mdi-brush
            </v-icon>
            <h2 style="color: #940611; font-size: 30px;">Creador</h2>

            <v-card-text style="color: black; font-size: 18px;">Si su interés es participar como creador de contenido y
                publicarlo en nuestra plataforma
                deberá considerar los siguientes pasos:</v-card-text>

        </v-row>

        <v-row style="margin-top: 5%; margin-bottom: 5%;">
            <v-col>
                <v-img alt="icono visualizador"  height="150" contain src="../assets/images/icon4.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    Contar con el perfil de
                    visualizador (es necesario
                    que esté logueado con su
                    cuenta de correo
                    institucional en la
                    plataforma).
                </v-card-text>

            </v-col>
            <v-col>
                <v-img alt="icono correo"  height="150" contain src="../assets/images/icon5.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    Escribir un correo a:
                    planesticforma@udistrita
                    l.edu.co y el equipo
                    pedagógico solicitará al
                    administrador el ajuste
                    del perfil a creador de
                    contenido para que
                    cuente con los permisos
                    requeridos al interior de
                    la plataforma.
                </v-card-text>

            </v-col>
            <v-col>
                <v-img alt="icono cargar"  height="150" contain src="../assets/images/icon6.png"></v-img>

                <v-card-text style="color: black; font-size: 18px;">
                    Una vez se haga el ajuste del
                    perfil, usted podrá cargar el
                    material diligenciando todos los
                    campos requeridos que ayudarán
                    a alimentar la base de datos.
                    Tenga en cuenta que, el material
                    solo será publicado cuando se
                    cumplan los criterios mínimos de
                    los recursos en la plataforma, el
                    proceso se especifica a través del
                    siguiente flujo.
                </v-card-text>

            </v-col>

        </v-row>
        <v-container>
            <v-divider color="#940611"></v-divider>
        </v-container>

        <v-img alt="infografia" height="850" contain style="margin-top: 5%;" src="../assets/images/infografia.png"></v-img>

    </v-container>
</template>
<script>


export default {
  data() {
    return {
      model: {},
      
    };
  },
  methods: {
    addColaborador() {
      this.$router.push({ name: "addColaborador" });
    },
  },
};
</script>
<style src="./Colaborador.css"></style>