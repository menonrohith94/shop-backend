const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shop','mega_user1', 'Test@123',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
})

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
 .catch(err => {
 console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;