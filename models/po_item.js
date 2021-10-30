const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('po_item', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    line_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    po_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_part_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
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
    qty_received: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    line_cost: {
      type: DataTypes.DOUBLE,
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
    tableName: 'po_item',
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
        name: "idx_po_items_po",
        using: "BTREE",
        fields: [
          { name: "po_id" },
        ]
      },
      {
        name: "idx_po_items_in",
        using: "BTREE",
        fields: [
          { name: "in_id" },
        ]
      },
      {
        name: "idx_po_items_line_no",
        using: "BTREE",
        fields: [
          { name: "line_no" },
        ]
      },
    ]
  });
};
