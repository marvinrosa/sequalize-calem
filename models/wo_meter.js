const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wo_meter', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    meter_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
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
    tableName: 'wo_meter',
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
        name: "idx_wo_meter_wo_id",
        using: "BTREE",
        fields: [
          { name: "wo_id" },
        ]
      },
      {
        name: "idx_wo_meter_meter_id",
        using: "BTREE",
        fields: [
          { name: "meter_id" },
        ]
      },
    ]
  });
};
