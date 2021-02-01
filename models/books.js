'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({books,orders, type_books}) {

    books.hasMany(orders,{
      foreignKey : 'books_id'
    })

    books.belongsTo(type_books,{
      foreignKey : 'type_books_id'
    })
        
    }
  };
  books.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
     },
     type_books_id : {type : DataTypes.INTEGER},
     name : {type : DataTypes.STRING(255)},
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};