const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('po_status_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    po_id: {
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
    from_state_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    to_state_id: {
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
    tableName: 'po_status_log',
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
        name: "idx_po_status_log",
        using: "BTREE",
        fields: [
          { name: "po_id" },
        ]
      },
    ]
  });
};
