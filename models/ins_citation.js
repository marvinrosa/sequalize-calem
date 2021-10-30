const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ins_citation', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    citation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_citation_citation"
    },
    inspection_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    severity_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'ins_citation',
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
        name: "uidx_citation_citation",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "citation" },
        ]
      },
      {
        name: "idx_citation_inspection",
        using: "BTREE",
        fields: [
          { name: "inspection_id" },
        ]
      },
    ]
  });
};
