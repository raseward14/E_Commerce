// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id- integer, doesnt allow null values, set as primary key, uses auto increment
    // product_name- string, doesnt allow null values
    // price- decimal, doesnt allow null values, validates that the value is a decimal
    // stock- integer, doesnt allow null values, set a default value of 10, validates that the value is numeric
    // category_id- integer, references the category models id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
