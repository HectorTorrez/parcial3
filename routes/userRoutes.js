

module.exports = app => {
  const users = require('../controllers/usersController');
  var router = require('express').Router();

  // crear rutas
  router.post('/', users.create); 
  router.get('/', users.findAll); 
  router.get('/:id', users.findOne); 
  router.put('/:id', users.update) 
  router.delete('/:id', users.delete); 

  app.use('/api/user', router);
}