"use strict";
const { Model } = require("sequelize");
const orders = require("./orders");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users, orders }) {
      users.hasMany(orders, {
        foreignKey: "users_id",
      });
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING(255) },
      address: { type: DataTypes.STRING(255) },
      phone: { type: DataTypes.STRING(255) },
      gender: { type: DataTypes.STRING(10) },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
