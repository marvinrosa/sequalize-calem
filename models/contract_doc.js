const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract_doc', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doc_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'contract_doc',
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
        name: "idx_contract_doc_cr",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "idx_contract_doc",
        using: "BTREE",
        fields: [
          { name: "doc_id" },
        ]
      },
    ]
  });
};
