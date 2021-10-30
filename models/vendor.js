const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    vendor: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_vendor"
    },
    tax_code_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    owner_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    contact_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(512),
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
    tableName: 'vendor',
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
        name: "uidx_vendor",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vendor" },
        ]
      },
    ]
  });
};
