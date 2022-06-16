module.exports =(sequelize, Sequelize) => {
  const User = sequelize.define("users", {
      nombre: {
          type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      },
    
  });
  return User;
};