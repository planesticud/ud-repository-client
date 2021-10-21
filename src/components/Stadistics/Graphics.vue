<template>
  <v-container class="lighten-5 rvcontainer">
    <h1 align="center">Seleccion la grafia que desea ver</h1>
    <template v-if="stategraphics">
      <v-row justify-md="center" @change="showData">
        <v-checkbox
          @change="showData"
          v-model="circle"
          label="Circular"
          value="Circular"
        ></v-checkbox>
        <v-checkbox
          v-model="horizonte"
          label="Horizontal"
          value="Horizontal"
        ></v-checkbox>
        <v-checkbox v-model="line" label="Lineal" value="Lineal"></v-checkbox>
        <v-checkbox
          v-model="column"
          label="Vertical"
          value="Vertical"
        ></v-checkbox>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      &nbsp; &nbsp; &nbsp;
      <v-row>
        <v-col v-show="horizonte">
          <h3 align="center" class="list px-3 mx-auto">HORIZONTAL</h3>
          <bar-chart
            :data="chartData"
            :label="chartData[0].name_obj"
            xtitle="prueba1"
          ></bar-chart>
        </v-col>
        <v-col v-show="line">
          <h3 align="center" class="list px-3 mx-auto">LINEAL</h3>
          <line-chart
            position="top"
            :data="chartData"
            :label="chartData[0].name_obj"
            xtitle="prueba2"
          ></line-chart>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-show="column">
          <h3 align="center" class="list px-3 mx-auto">VERTICAL</h3>
          <column-chart :data="chartData"></column-chart>
        </v-col>
        <v-col v-show="circle">
          <h3 align="center" class="list px-3 mx-auto">CIRCULAR</h3>
          <pie-chart
            :data="chartData"
            :label="chartData[0].name_obj"
            xtitle="prueba2"
          ></pie-chart>
        </v-col>
      </v-row>
      <div v-show="tabla">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Objeto</th>
                <th class="text-left">Numero de Visitas</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in chartData" :key="index">
                <td>{{ item[0] }}</td>
                <td>{{ item[1] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </template>
  </v-container>
</template>

<script>
import stadisticsService from "../../services/stadistics";
export default {
  data() {
    return {
      circulo: false,
      vertice: false,
      linea: false,
      horizonte: false,
      tabla: false,
      circle: "",
      line: "",
      column: "",
      vertical: "",
      chartData: [],
      titlegraphic: "",
      titlex: "",
      titley: "",
      stategraphics: false,
    };
  },
  methods: {
    contare() {
      stadisticsService
        .getStadistics()
        .then((response) => {
          this.stadistics = response.data;
          //console.log(this.stadistics);
          for (let index = 0; index < this.stadistics.length; index++) {
            this.chartData[index] = [
              this.stadistics[index].name_obj,
              this.stadistics[index].num_view,
            ];
            this.stategraphics = true;
          }
        })
        .catch((e) => {
          console.log(e);
        });
      return this.chartData;
    },
    showData() {
      if (this.circle || this.line || this.column || this.vertical) {
        this.tabla = true;
      }
    },
  },
  mounted() {
    this.contare();
  },
};
</script>
