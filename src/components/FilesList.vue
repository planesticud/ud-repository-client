<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Files List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(file, index) in files"
          :key="index"
          @click="setActiveFile(file, index)"
        >
          {{ file.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllFiles">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentFile">
        <h4>File</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentFile.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentFile.description }}
        </div>
        <div>
          <label><strong>Language:</strong></label> {{ currentFile.language }}
        </div>
        <div>
          <label><strong>Link File:</strong></label> <a :href="currentFile.coverage" target="_blank">Link</a>
        </div>


        <a class="badge badge-warning"
          :href="'/files/' + currentFile.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a File...</p>
         <p>HOLA {{ name || "no name" }}</p>
         <p>ROL {{ rol || "NO ROL" }}</p>
         <img :src="url_image">

      </div>
    </div>
  </div>
</template>

<script>
import FileDataService from "../services/FileDataService";

export default {
  name: "files-list",
  data() {
    return {
      files: [],
      currentFile: null,
      currentIndex: -1,
      title: "",
      name: localStorage.name,
      url_image: localStorage.url_image,
      rol: localStorage.rol
    };
  },
  methods: {
    retrieveFiles() {
      FileDataService.getAll()
        .then(response => {
          this.files = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFiles();
      this.currentFile = null;
      this.currentIndex = -1;
    },

    setActiveFile(file, index) {
      this.currentFile = file;
      this.currentIndex = index;
    },

    removeAllFiles() {
      FileDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      FileDataService.findByTitle(this.title)
        .then(response => {
          this.files = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveFiles();
  
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
