<template>
  <div id="app">
    <div class="container" > 
    <div class="banner-all" :style="myStyle">
      <img class = "logo-planestic1" src="./assets/images/LOGO-UD-BLANCO-13-13.png"  >
      <img class="logo-planestic2"  src="./assets/images/logo_planestic2-01.png">
    
    </div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand"> UD JUST LOVE </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/files" class="nav-link">Files</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
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
          }
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
  backgroundColor:"#8b1919";
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
</style>



