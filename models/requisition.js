const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requisition', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    req_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_requisition"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priority_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    req_on_po_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    source_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    state_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipping_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    request_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    request_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    req_total: {
      type: DataTypes.DOUBLE,
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
    next_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    next_note: {
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
    tableName: 'requisition',
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
          { name: "req_no" },
        ]
      },
      {
        name: "uidx_req_due_date",
        using: "BTREE",
        fields: [
          { name: "due_date" },
        ]
      },
    ]
  });
};
