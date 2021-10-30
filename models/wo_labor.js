const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wo_labor', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    time_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shift_id: {
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
    ot_hours: {
      type: DataTypes.DOUBLE,
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
    tableName: 'wo_labor',
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
        name: "idx_wo_labor_wo_id",
        using: "BTREE",
        fields: [
          { name: "wo_id" },
        ]
      },
      {
        name: "idx_wo_labor_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_wo_labor_start_time",
        using: "BTREE",
        fields: [
          { name: "start_time" },
        ]
      },
    ]
  });
};
