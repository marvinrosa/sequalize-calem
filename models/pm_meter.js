const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pm_meter', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    pm_asset_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    meter_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    release_by_meter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reading_released: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rollover_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reading_interval: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    copy_to_wo: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'pm_meter',
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
        name: "idx_pm_meter_asset",
        using: "BTREE",
        fields: [
          { name: "pm_asset_id" },
        ]
      },
      {
        name: "idx_pm_meter_meter",
        using: "BTREE",
        fields: [
          { name: "meter_id" },
        ]
      },
    ]
  });
};
