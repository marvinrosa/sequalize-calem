const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dash_wo_orig_day', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    counts: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    modified_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dash_wo_orig_day',
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
        name: "idx_dash_wo_orig_day",
        using: "BTREE",
        fields: [
          { name: "modified_time" },
        ]
      },
    ]
  });
};
