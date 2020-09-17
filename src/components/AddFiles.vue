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

      <button @click="saveFile" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFile">Add</button>
    </div>
  </div>
</template>

<script>
import FileDataService from "../services/FileDataService";

export default {
  name: "add-file",
  data() {
    return {
      file: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveFile() {
      var data = {
        title: this.file.title,
        description: this.File.description
      };

      FileDataService.create(data)
        .then(response => {
          this.file.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newFile() {
      this.submitted = false;
      this.file = {};
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
