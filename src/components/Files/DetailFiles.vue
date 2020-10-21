<template>
  <v-container class="grey lighten-5">
    <h1>{{title}}</h1>
    <v-row align="center" class="list px-10 mx-auto">
      <v-card class="mx-auto" max-width="800">


        <v-card-text>
          <h3 class="title">
            <strong>{{ text.general }} </strong> {{ model.general }}
          </h3>
          <h3 class="title">
           <strong>{{ text.lifecycle }} </strong> {{ model.lifecycle }}
          </h3>
          <h3 class="title">
           <strong>{{ text.email }} </strong> {{ model.email }}
          </h3>
          <h3 class="title">
            <strong>{{ text.anotation }} </strong>  <a :href="model.anotation">{{url}}</a>
          </h3>
          <p>&nbsp;</p>
          <v-icon small class="mr-2" @click="editFile(model.id)"
            >mdi-pencil</v-icon
          >
          <v-icon small @click="deleteFile(mddel.id)">mdi-delete</v-icon>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import FilesService from '../../services/files';
export default {
  data() {
    return {
      title: 'Detalle de recurso',
      model: {},
      url: 'Ver recurso',
      text: {
        email: "Email:",
        general: "Nombre:",
        lifecycle: "Descripción:",
        anotation: "Recurso:",
      },
    };
  },
  methods: {
    getFile(id) {
      FilesService.getFilesByid(id)
        .then(({data}) => {
          console.log(data)
         const response = data.filter(file => file.id == id)[0];
         console.log(response)
          this.model = {
            id: response.id,
            general: response.general,
            lifecycle: response.lifecycle,
            anotation: response.anotation,
            email: response.email
            }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editFile(id) {
      this.$router.push({ name: "editfiles", params: { id: id } });
    },
    deleteFile(id) {
      FilesService
        .deleteFilesById(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.message = "";
    this.getFile(this.$route.params.id);
  },
};
</script>

 <style>
html {
  font-family: Tahoma;
  font-size: 14px;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

.container {
  max-width: 970px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

fieldset {
  border: 0;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}

.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;

  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 15px;
}
</style>