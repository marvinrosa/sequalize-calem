const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scheduler_task', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    task: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_scheduler_task"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    class_name: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    class_path: {
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
    tableName: 'scheduler_task',
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
        name: "uidx_scheduler_task",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "task" },
        ]
      },
    ]
  });
};
