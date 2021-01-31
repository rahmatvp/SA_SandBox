'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  type_books.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
     },
     name : {type : DataTypes.STRING(255)}
  }, {
    sequelize,
    modelName: 'type_books',
  });
  return type_books;
};