'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.order.belongsTo(models.user)
      models.order.belongsToMany(models.plant, {through: 'order_plants'})
    }
  };
  order.init({
    shipping_address: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    credit_card_number: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true
      }
    },
    total_price: {
      type: DataTypes.INTEGER
      // validate: {
      //   notNull: true
      // }
    },
    userId: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};