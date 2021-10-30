const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('req_item', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    req_id: {
      type: DataTypes.STRING(36),
      allowNull: true
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    unit_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    line_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    po_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'req_item',
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
        name: "uidx_requisition",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "req_id" },
          { name: "in_id" },
        ]
      },
      {
        name: "idx_req_item_in",
        using: "BTREE",
        fields: [
          { name: "in_id" },
        ]
      },
      {
        name: "idx_req_item_vendor",
        using: "BTREE",
        fields: [
          { name: "vendor_id" },
        ]
      },
      {
        name: "idx_req_item_po",
        using: "BTREE",
        fields: [
          { name: "po_id" },
        ]
      },
    ]
  });
};
