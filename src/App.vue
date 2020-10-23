<template>
  <div id="app">
    <div class="container" > 
    <div class="banner-all" :style="myStyle">
      <img class = "logo-planestic1" src="./assets/images/LOGO-UD-BLANCO-13-13.png"  >
      <img class="logo-planestic2"  src="./assets/images/logo_planestic2-01.png">
    
    </div>
    <nav class="navbar navbar-expand navbar-light bg-light border">
      <a href="/" class="navbar-brand"> Inicio </a>
      <div  class="navbar-nav mr-auto" v-if = "token"> <!--&& token-->
        <li class="nav-item">
          <a href="/files" class="nav-link">Files</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
        
        
        
        
        <!-- <div  class="nav-item" v-if = "name && token">
          <li  class="topnav-right">
            <a class="nav-link">{{ name }} 1</a>
          </li>

        </div> -->
               <!-- <button class="btn btn-warning nav-item" >
              Log out
            </button>-->
      </div>
      <div class="pull-right" v-if = "token">
          <a class="btn navbar-btn btn-danger navbar-right " role="button" @click="logout">Logout</a>
        </div>
      <!-- <li class="nav-item">
          <a href="/login" class="nav-link">Login</a>
        </li> -->
    </nav>
    
    </div>

    <div class="container mt-3">
      <router-view />
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
       return{
         myStyle:{
            backgroundColor:"#8b1919",
            width:700
            },
          logo_planestic2:{
            height:74,
            width:204 
          },
          container:{
            height:100
          },
          
          name: '',
          token:'',
           }
          
         },
  methods:{
     logout() {
       localStorage.clear();
       
       location.reload()
    },
  },
  mounted(){
    if (localStorage.name){
      this.name=localStorage.name;
    }
     if (localStorage.token){
      this.token=localStorage.token;
    }
    
  },
  watch:{
    name(newName){
      localStorage.name=newName
    }
  }
  
}

</script>
<style>
.container {
  max-width: 1600px;
  margin: auto;
}
.banner-all {
  background-Color:"#8b1919";
  max-height: 170px;
}
.logo-planestic1 {
  margin-left:20px;
}
.logo-planestic2 {
  max-height: 100px;
  margin:auto;
  margin-top:5px;
  float:right;
}
.pull-right {
  margin-left:auto;
}
</style>



