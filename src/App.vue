<template>
  <div id="app">
  

    <nav class="navbar navbar-expand navbar-light bg-info text-white ">
        <div class="nav navbar-nav">
           <router-link to="/" class="nav-link">Home</router-link> 
           <router-link to="/register" class="nav-link">Registrar</router-link> 
      <router-link to="/create" class="nav-link">Crear</router-link> 
      
      <router-link to="/list" class="nav-link">Listar</router-link> 
        </div>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>
