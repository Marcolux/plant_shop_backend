'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order_plant.init({
    orderId: DataTypes.INTEGER,
    plantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_plant',
  });
  return order_plant;
};