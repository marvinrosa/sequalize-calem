const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wo_planned_labor', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    craft_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    crew_size: {
      type: DataTypes.INTEGER,
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
    tableName: 'wo_planned_labor',
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
        name: "idx_wo_planned_labor_wo",
        using: "BTREE",
        fields: [
          { name: "wo_id" },
        ]
      },
      {
        name: "idx_wo_planned_labor_craft",
        using: "BTREE",
        fields: [
          { name: "craft_id" },
        ]
      },
    ]
  });
};
