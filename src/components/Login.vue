<template>  
  <div class= "container">
    <div class = "text-access center">
    <p> Acceso Rápido con </p>
    </div>
    <div class ="google-icon center">
    
    <a href="www.google.com"><img class = "google-icon center" src="../assets/images/googleicon.png" ></a>
    </div>
     <button class="btn btn-success"  @click="test_local">
            Test Local
           </button>
  </div>
</template>

<script>
import FileDataService from "../services/FileDataService";


export default {
  name: "file",
  data() {
    return {
      currentFile: null,
      message: ''
    };
  },
  methods: {
    getFile(id) {
      FileDataService.get(id)
        .then(response => {
          this.currentFile = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    test_local(){
      console.log(localStorage)
    },


    updateFile() {
      var data = {
        title: this.currentFile.title,
        description: this.currentFile.description,
        language: this.currentFile.language
      };
      console.log(data)
      FileDataService.update(this.currentFile[0].id, data)
        .then(response => {
          console.log(response.data);
          this.message = 'The file was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteFile() {
      FileDataService.delete(this.currentFile.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "files" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getFile(this.$route.params.id);
  }

};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.google-icon {
  width: 70px;
  height: 70px;
}
.center {
  margin: auto;
  padding: 10px;
}
.text-access {
  max-width:300px;
  margin:auto;
}
</style>
