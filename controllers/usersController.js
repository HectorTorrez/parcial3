const db = require('../models');
const User = db.users;
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
    const user = {
        nombre: req.body.nombre,
        password: req.body.password,
      
    
    }

    // guardar el carro en la base de datos
    User.create(user)
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
    User.findAll({ where: condition })
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

// buscar carro por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
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
      User.update(req.body, { where: {id:id}})
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
    User.destroy(req.body, { where: {id:id}})
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