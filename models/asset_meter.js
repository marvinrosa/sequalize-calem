const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset_meter', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    asset_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    meter_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    reading_uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    reading: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_rollover: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    time_taken: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rollup_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rollover_reading: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rollover_count: {
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
    tableName: 'asset_meter',
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
        name: "idx_asset_meter_meter_no",
        using: "BTREE",
        fields: [
          { name: "meter_no" },
        ]
      },
      {
        name: "idx_asset_meter",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
    ]
  });
};
