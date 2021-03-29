const Sequelize =  require('sequelize');

const sequelize = require('../config/helper');

const Product = sequelize.define('products',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: Sequelize.STRING,
    images: Sequelize.STRING,
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    short_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Product;