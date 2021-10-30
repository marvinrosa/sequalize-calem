const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wo_tool', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    qty_checkout: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_return: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    line_cost: {
      type: DataTypes.DOUBLE,
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
    tableName: 'wo_tool',
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
        name: "uidx_wo_tool",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wo_id" },
          { name: "in_id" },
        ]
      },
      {
        name: "idx_wo_tool_in_id",
        using: "BTREE",
        fields: [
          { name: "in_id" },
        ]
      },
    ]
  });
};
