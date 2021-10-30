const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_certificate', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    certificate: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_certificate"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    days_valid: {
      type: DataTypes.INTEGER,
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
    tableName: 'training_certificate',
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
        name: "uidx_certificate",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "certificate" },
        ]
      },
    ]
  });
};
