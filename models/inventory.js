const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    in_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_inventory"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    category_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    stock_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    valuation_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    abc_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    abc_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    avg_unit_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rent_uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rent_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_in_stock: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_on_order: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_reserved: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_to_order: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    order_gen_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    order_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    min_level: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    max_level: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reorder_point: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reorder_qty: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    owner_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    notification_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    costcode_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: 'inventory',
    hasTrigger: true,
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
        name: "uidx_inventory",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "in_no" },
        ]
      },
      {
        name: "idx_inventory_costcode",
        using: "BTREE",
        fields: [
          { name: "costcode_id" },
        ]
      },
    ]
  });
};
