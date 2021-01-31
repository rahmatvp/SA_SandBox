'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({orders, books, users}) {
       orders.belongsTo(users,{
         foreignKey:'id'
       })

       orders.belongsTo(books,{
        foreignKey:'id'
      })
    }
  };
  orders.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
     },
     users_id : {type : DataTypes.INTEGER},
     books_id : {type : DataTypes.INTEGER},
     qty : {type : DataTypes.INTEGER},
     order_at : {type : DataTypes.DATE},
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};