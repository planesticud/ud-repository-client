<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="file.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="file.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input
          class="form-control"
          id="language"
          required
          v-model="file.language"
          name="language"
        />
      </div>
        <div v-if="currentFile" class="progress">
        <div
            class="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: progress + '%' }"
          >
            {{ progress }}%
          </div>
        </div>
              <!-- Continue the upload view -->
          <label class="btn btn-default">
            <input type="file" ref="file" @change="selectFile" />
          </label>
          <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
            Upload
           </button>

      <!--<button @click="saveFile" class="btn btn-success">Submit</button>-->
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFile">Add</button>
        <!--<div class="alert alert-light" role="alert">{{ message }}</div>-->
        <div class="card">
          <div class="card-header">List of Files</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(file, index) in fileInfos"
              :key="index"
            >
              <a :href="file.coverage" target="_blank">{{ file.title }}</a>
            </li>
          </ul>
        </div>
    </div>
   

    




  </div>
  

</template>

<script>
import FileDataService from "../services/FileDataService";
import UploadService from "../services/UploadFilesService";

export default {
  name: "add-file",
  data() {
    return {
      file: {
        id: null,

        title: "",
        description: "",
        language: "",
      },
    
      submitted: false,
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: []
    };
  },
  methods: {
    
    newFile() {
      this.submitted = false;
      this.currentFile = false;
      this.file = {};
    },
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
      //console.log(this.selectedFiles)
    },
    upload() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      UploadService.upload(this.currentFile, event => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then(response => {
          this.message = response.status;
          console.log(response.status)
          //console.log(this.message
          var data = {
            //title: this.file.title,
            //description: this.file.description,
            //language: this.file.language
            title:this.file.title,
            description:this.file.description,
            language:this.file.language,
            coverage:response.data.url
          };
          return FileDataService.create(data)
        })
        .then(response => {
          this.file.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          return UploadService.getFiles();
        })
        .then(files => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        })
        .catch(e => {
          console.log(e);
        });
     

      this.selectedFiles = undefined;
    },
    mounted() {
    UploadService.getFiles().then(response => {
      this.fileInfos = response.data;
    });
  }

  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
