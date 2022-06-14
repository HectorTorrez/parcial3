module.exports = app => {
    const cars = require('../controllers/carController');
    var router = require('express').Router();

    // crear rutas
    router.post('/', cars.create); 
    router.get('/', cars.findAll); 
    router.get('/:id', cars.findOne); 
    router.put('/:id', cars.update) 
    router.delete('/:id', cars.delete); 

    app.use('/api/car', router);
}