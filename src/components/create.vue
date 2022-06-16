<template>
  <div class="container">
    <router-link to="/list" class="btn btn-info ">Lista</router-link> 
    <br>
    <br>
    <div class="card">
      <div class="card-header">
        Agrregar nuevo auto
      </div>
      <div class="card-body">
          <form v-on:submit.prevent="addRegistro">
            <!-- nombre -->
            <div class="form-group">
              <label for="nombre">Marca:</label>
              <input type="text"
                class="form-control" name="nombre" required v-model="cars.nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre">
              <small id="helpId" class="form-text text-muted">Escribe el nombre del automovil</small>
            </div>
            <!-- modelo -->
            <div class="form-group">
              <label for="modelo">Modelo:</label>
              <input type="text"
                class="form-control" name="modelo" required v-model="cars.modelo" id="modelo" aria-describedby="helpId" placeholder="Modelo">
              <small id="helpId" class="form-text text-muted">Escribe el modelo del automovil</small>
            </div>
            <!-- color -->
            <div class="form-group">
              <label for="color">Color:</label>
              <input type="text"
                class="form-control" name="color" required v-model="cars.color" id="color" aria-describedby="helpId" placeholder="Color">
              <small id="helpId" class="form-text text-muted">Escribe el color del automovil</small>
            </div>
            <!-- año -->
            <div class="form-group">
              <label for="annio">Año:</label>
              <input type="number"
                class="form-control" name="annio" required v-model="cars.annio" id="annio" aria-describedby="helpId" placeholder="Año">
              <small id="helpId" class="form-text text-muted">Escribe el año del automovil</small>
            </div>
            <!-- Descripcion -->
            <div class="form-group">
              <label for="descripcion">Descripcion:</label>
              <input type="text"
                class="form-control" name="descricion" required v-model="cars.description" id="descricion" aria-describedby="helpId" placeholder="Descripcion">
              <small id="helpId" class="form-text text-muted">Escribe una descricon del automovil</small>
            </div>
            <!-- acciones -->
            <div class="btn-group" role="group" aria-label="">
              <button type="submit"  class="btn btn-success">Agregar</button>
              <router-link :to="{name: 'list'}" class="btn btn-warning">Cancelar</router-link>
              
            </div>
          </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import DataService from "../services/carDataService";


export default {
 name: "add-cars",
  data() {
    return {
      cars:{
        id: null,
        nombre: '',
        modelo: '',
        color: '',
        annio: '',
        description:''

      }
    }
  },
  methods:{
    
    addRegistro(){
      console.log(this.cars);

      var dataSend={
        nombre: this.cars.nombre, 
      modelo: this.cars.modelo, 
      color: this.cars.color, 
      annio: this.cars.annio, 
      description: this.cars.description}

      DataService.create(dataSend)
        .then(response => {
          this.cars.id = response.data.id;
          console.log(response.data);
          
          
        })
        .catch(e => {
          console.log(e);
        });

      //nofunciono
      // fetch('http://localhost:3001/api/car',{
      //   method:"POST",
      //   body:JSON.stringify(dataSend)
      // })

      //   .then(response=>response.json())
      //   .then((dataResponse=>{
      //     console.log(dataResponse);
      //     // window.location.href='list'
      //   }))
    }
  },
}
</script>


