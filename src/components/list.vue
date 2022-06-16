<template>
  <div class="container">

    <router-link to="/create" class="btn btn-success">Agregar nuevo auto</router-link> 
    <br>
    <br>
    <div class="card">
      <div class="card-header">
        Listado de Carros
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Color</th>
              <th>Año</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="cars in cars" :key="cars.id">
              <td>{{cars.id}}</td>
              <td>{{cars.nombre}}</td>
              <td>{{cars.modelo}}</td>
              <td>{{cars.color}}</td>
              <td>{{cars.annio}}</td>
              <td>{{cars.description}}</td>
              <td>

                <div class="btn-group" role="group" aria-label="">
                

                  <router-link :to="{name:'edit',params:{id:cars.id}}" class="btn btn-info">Editar</router-link>

                  <button type="button" @click="deleteCars"  class="btn btn-danger">Borrar</button>
                
                </div>
            
              </td>

            </tr>
    
          </tbody>
        </table>
      </div>
      
    </div>

    
  </div>
</template>

<script>
import carDataService from '../services/carDataService';
export default {
  
    data() {
      return {
        cars:[],
      }
    },
    created() {
      
       this.consultCar();

       
    },
    methods: {


       



      
      //http://localhost:3001/api/car

      //insertar
      consultCar(){
        fetch('http://localhost:3001/api/car')
        .then(response=>response.json())
        .then((dataResponse)=>{
          console.log(dataResponse)
          this.cars=[]
          if(typeof dataResponse[0].success==='undefined')
          {
            this.cars=dataResponse;
          }
        })
        .catch(console.log)
      },


           updateCar() {

       var data = {
        
        id: this.cars.id,
        nombre: this.cars.nombre,
        modelo: this.cars.modelo,
        color: this.cars.color,
        annio: this.cars.annio,   
        description: this.cars.description,
        
        }
        
        carDataService.update(data)
        .then(response => {
          this.cars.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    

         


    },  

     
      //borrar
      deleteCars() {

          
        
      carDataService.delete(this.cars.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "car" });
        })
        .catch(e => {
          console.log(e);
        });
    }


       
    },
}
</script>