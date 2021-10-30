const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset_service_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    asset_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    from_status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    to_status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    from_location_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    to_location_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    from_parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    to_parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    from_owner_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    to_owner_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    changed_by_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asset_service_log',
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
        name: "idx_asset_status_log",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "idx_asset_status_time",
        using: "BTREE",
        fields: [
          { name: "created_time" },
        ]
      },
    ]
  });
};
