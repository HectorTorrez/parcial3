const db = require('../models');
const Car = db.cars;
const Op = db.Sequelize.Op;


// crear nuevo carro
exports.create = (req, res) => {
    // validar la solicitud
    if(!req.body.nombre) {
        res.status(400). send({
            message: "El contenido no puede estar vacío"
        });
        return
    }

    // crear el car
    const car = {
        nombre: req.body.nombre,
        modelo: req.body.modelo,
        color: req.body.color,
        annio: req.body.annio,
        description: req.body.description,
    
    }

    // guardar el carro en la base de datos
    Car.create(car)
      .then (data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                err.message || "Ha ocurrido un error al crear el registro"
          })
      })
};


exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? {nombre: { [Op.like]: `%${nombre}%`}} : null;
    Car.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                  err.message || "Ha ocurrido un error al crear el registro"
            })
        })
}

// buscar libro por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Car.findByPk(id)
     .then(data => {
         if(data){
             res.send(data);
         }else{
             res.status(400). send({
                 message: `No se ha encontrado el carro con clave ${id}`
             })
         }
     })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Ha ocurrido un error al encontrar el caro" + id
        })
    })
}

// actualizar datos de autor
exports.update = (req, res) => {
    const id = req.params.id;
      Car.update(req.body, { where: {id:id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "El carro fue actualizado"
                })
            } else {
                res.send({
                    message: "No se ha podido actualizar el registro"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                  err.message || "Ha ocurrido un error al actualizar el carro" + id
            })
        })
}

// eliminar datos de autor
exports.delete = (req, res) => {
    const id = req.params.id;
    Car.destroy(req.body, { where: {id:id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "El carro fue eliminado"
                })
            } else {
                res.send({
                    message: "No se ha podido eliminar el registro"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                  err.message || "Ha ocurrido un error al eliminar el carro" + id
            })
        })
}