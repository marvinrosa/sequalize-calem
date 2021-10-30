const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dept', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    dept: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_dept_dept"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    manager_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'dept',
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
        name: "uidx_dept_dept",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept" },
        ]
      },
    ]
  });
};
