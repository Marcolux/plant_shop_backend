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
      models.user.hasMany(models.order)
    }
  };
  order.init({
    userId: DataTypes.INTEGER,
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
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};