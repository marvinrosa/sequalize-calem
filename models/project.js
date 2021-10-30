const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    project_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_project_project_no"
    },
    parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    priority_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    owner_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    sched_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    actual_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percent_done: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dept_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    costcode_id: {
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
    tableName: 'project',
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
        name: "uidx_project_project_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "project_no" },
        ]
      },
      {
        name: "idx_project_start_time",
        using: "BTREE",
        fields: [
          { name: "sched_start_time" },
        ]
      },
      {
        name: "idx_project_parent_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
