const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inspection', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    inspection: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_inspection"
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    inspect_contact_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    inspect_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    owner_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
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
    tableName: 'inspection',
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
        name: "uidx_inspection",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inspection" },
        ]
      },
      {
        name: "idx_inspection_start",
        using: "BTREE",
        fields: [
          { name: "start_time" },
        ]
      },
    ]
  });
};
