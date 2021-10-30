const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('po', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    po_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_po"
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    state_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    buyer_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    buyer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    buyer_phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    po_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    next_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    next_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    vendor_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_addr: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    vendor_contact_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_contact_phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    payment_term_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    shipping_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    shipping_term_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    shipping_addr_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    billing_addr_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    po_item_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tax_rate_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tax_charge: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_charge: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    comment: {
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
    tableName: 'po',
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
        name: "uidx_po",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "po_no" },
        ]
      },
    ]
  });
};
