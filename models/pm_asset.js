const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pm_asset', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    pm_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    asset_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    last_released: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_closed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    next_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    release_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    costcode_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    dept_id: {
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
    tableName: 'pm_asset',
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
        name: "idx_pm_asset_pm",
        using: "BTREE",
        fields: [
          { name: "pm_id" },
        ]
      },
      {
        name: "idx_pm_asset_asset",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
    ]
  });
};
