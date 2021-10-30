const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recycle_bin', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    table_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rec_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    value_deleted: {
      type: DataTypes.TEXT,
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
    tableName: 'recycle_bin',
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
        name: "idx_recycle_bin_table_name",
        using: "BTREE",
        fields: [
          { name: "table_name" },
        ]
      },
      {
        name: "idx_recycle_bin_rec_id",
        using: "BTREE",
        fields: [
          { name: "rec_id" },
        ]
      },
    ]
  });
};
