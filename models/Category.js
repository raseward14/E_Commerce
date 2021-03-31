const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create
class Category extends Model {}

Category.init(
  {
    // define columns
    // id- integer, doesnt allow null values, set as primary key, uses auto increment
    // category_id- string, doesnt allow null values
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
