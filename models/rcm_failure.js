const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rcm_failure', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    failure: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_rcm_failure"
    },
    is_evident: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    function_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    template_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    description: {
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
    tableName: 'rcm_failure',
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
        name: "uidx_rcm_failure",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "failure" },
        ]
      },
    ]
  });
};
