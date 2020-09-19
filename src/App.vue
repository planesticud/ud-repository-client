<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand"> UD JUST LOVE </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/files" class="nav-link">Files</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
         <li class="nav-item">
          <a href="https://apirepository.damillano.com/api/google" class="nav-link">Inicio de Sesion</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


