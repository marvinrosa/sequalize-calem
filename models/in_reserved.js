const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('in_reserved', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    qty: {
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
    tableName: 'in_reserved',
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
        name: "idx_in_reserved",
        using: "BTREE",
        fields: [
          { name: "in_id" },
        ]
      },
      {
        name: "idx_in_reserved_wo_id",
        using: "BTREE",
        fields: [
          { name: "wo_id" },
        ]
      },
    ]
  });
};
