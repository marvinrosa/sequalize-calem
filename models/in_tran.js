const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('in_tran', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    location_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    qty: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unit_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    costcode_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    checkout_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    checkout_to_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    receive_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    receive_from_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    qty_available: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty_orig: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    orig_loc_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    checkout_tran_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rent_duration: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rent_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tran_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    tran_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tran_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    store_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    voided: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    authorized_by_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    void_by_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    void_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    void_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    new_tran_id: {
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
    tableName: 'in_tran',
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
        name: "idx_in_tran_in",
        using: "BTREE",
        fields: [
          { name: "in_id" },
          { name: "type_id" },
          { name: "voided" },
        ]
      },
      {
        name: "idx_in_tran_checkout_to_id",
        using: "BTREE",
        fields: [
          { name: "checkout_to_id" },
          { name: "checkout_type_id" },
          { name: "voided" },
        ]
      },
      {
        name: "idx_in_tran_receive_from",
        using: "BTREE",
        fields: [
          { name: "receive_from_id" },
          { name: "receive_type_id" },
          { name: "voided" },
        ]
      },
      {
        name: "idx_in_tran_tran_time",
        using: "BTREE",
        fields: [
          { name: "tran_time" },
        ]
      },
    ]
  });
};
