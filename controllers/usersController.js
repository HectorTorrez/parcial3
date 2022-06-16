const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
 
    if(!req.body.nombre) {
        res.status(400). send({
            message: "El contenido no puede estar vacío"
        });
        return
    }

    
    const user = {
        nombre: req.body.nombre,
        password: req.body.password,
      
    
    }

   
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
              err.message || "Ha ocurrido un error al encontrar el usuario" + id
        })
    })
}


exports.update = (req, res) => {
    const id = req.params.id;
      User.update(req.body, { where: {id:id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "El usuario fue actualizado"
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
                  err.message || "Ha ocurrido un error al actualizar el usuario" + id
            })
        })
}

// 
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy(req.body, { where: {id:id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "El usuario fue eliminado"
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
                  err.message || "Ha ocurrido un error al eliminar el usuario" + id
            })
        })
}