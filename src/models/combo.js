const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Combo extends Model {}

  Combo.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { sequelize, modelName: 'Combo', timestamps: false },
  );
};
