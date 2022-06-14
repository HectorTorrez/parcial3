module.exports =(sequelize, Sequelize) => {
    const Car = sequelize.define("cars", {
        nombre: {
            type: Sequelize.STRING
        },
        modelo: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        annio: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Car;
};
