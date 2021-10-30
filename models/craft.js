const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('craft', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    craft: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_craft_craft"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ot_factor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    modified_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'craft',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uidx_craft_craft",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "craft" },
        ]
      },
    ]
  });
};
