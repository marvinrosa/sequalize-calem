const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budget', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    title_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    budget: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_budget"
    },
    state_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    budgeted: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    app: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    accounting: {
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
    tableName: 'budget',
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
        name: "uidx_budget",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "budget" },
        ]
      },
      {
        name: "idx_budget_start_date",
        using: "BTREE",
        fields: [
          { name: "start_date" },
        ]
      },
    ]
  });
};
