const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('in_vendor', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_part_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    unit_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lead_time_days: {
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
    tableName: 'in_vendor',
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
        name: "uidx_in_vendor",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "in_id" },
          { name: "vendor_id" },
        ]
      },
      {
        name: "idx_in_vendor_vendor",
        using: "BTREE",
        fields: [
          { name: "vendor_id" },
        ]
      },
    ]
  });
};
