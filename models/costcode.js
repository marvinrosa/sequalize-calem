const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('costcode', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    costcode: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_costcode_costcode"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    dept_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rollup_cost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cost_type_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'costcode',
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
        name: "uidx_costcode_costcode",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "costcode" },
        ]
      },
    ]
  });
};
