const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uom_map', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    uom_src_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    uom_dst_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    qty: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    note: {
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
    tableName: 'uom_map',
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
        name: "idx_uom_src",
        using: "BTREE",
        fields: [
          { name: "uom_src_id" },
        ]
      },
      {
        name: "idx_uom_dst",
        using: "BTREE",
        fields: [
          { name: "uom_dst_id" },
        ]
      },
    ]
  });
};
