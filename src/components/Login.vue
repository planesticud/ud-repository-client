<template>  
  <div class= "container">
    <div class = "text-access center">
    <p> Acceso Rápido con </p>
    </div>
    <div @click="test_local" class ="google-icon center">
    
    <a href="https://apirepository.damillano.com/api/google" ><img  class = "google-icon center" src="../assets/images/googleicon.png" ></a> <!--href="https://apirepository.damillano.com/api/google"-->
    </div>
     <button class="btn btn-success"  @click="test_local">
            Test Local
           </button>
  </div>
</template>

<script>


export default {
  name: "file",
  data() {
    return {
      currentFile: null,
      message: ''
    };
  },
  methods: {
    test_local(){
      console.log(localStorage.name),
      localStorage.setItem('token','Test'),
      localStorage.setItem('name','Name Test')
    }
  },
  mounted() {
    console.log(this.$route.query.token)
    if(this.$route.query.token){
      console.log('entro al if')
      if(!localStorage.token){
         const { token, name, url_image, rol } = this.$route.query
      console.log(this.$route.query)
      localStorage.setItem('token',token)
      localStorage.setItem('name',name)
      localStorage.setItem('url_image',url_image)
      localStorage.setItem('rol',rol)
      this.$router.push({ name: 'index' })
      this.$router.go(this.$router.currentRoute)
      }
      //this.$router.push({ name: 'files' })
    }
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
  padding: 1px;
}
.text-access {
  max-width:300px;
  margin:auto;
}
</style>
