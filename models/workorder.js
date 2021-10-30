const Sequelize = require('sequelize');

module.exports =(sequelize, DataTypes) => {
  
  const Workorder =sequelize.define('workorder', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wo_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_workorder_wo_no"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asset_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    pm_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    asset_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    category_id: {
      type: DataTypes.STRING(36),
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
    resolution_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    duplicate_wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rcm_action_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    parent_wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    origin_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rework_wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    orig_contact_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    orig_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    orig_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assigned_team_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    assigned_to_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    assigned_by_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    assigned_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_needed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    planned_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_start_shift_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    actual_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_start_shift_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    planned_finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sched_finish_shift_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    actual_finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_finish_shift_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    costcode_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    project_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    dept_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    planned_labor_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sched_labor_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    actual_labor_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    labor_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    material_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    planned_downtime_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    actual_downtime_hours: {
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
    tableName: 'workorder',
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
        name: "uidx_workorder_wo_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wo_no" },
        ]
      },
      {
        name: "idx_wo_sched_completion_time",
        using: "BTREE",
        fields: [
          { name: "sched_finish_time" },
        ]
      },
      {
        name: "idx_wo_asset",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "idx_wo_pm",
        using: "BTREE",
        fields: [
          { name: "pm_id" },
        ]
      },
      {
        name: "idx_wo_costcode",
        using: "BTREE",
        fields: [
          { name: "costcode_id" },
        ]
      },
      {
        name: "idx_wo_orig_user",
        using: "BTREE",
        fields: [
          { name: "orig_contact_id" },
        ]
      },
      {
        name: "idx_wo_assigned_to",
        using: "BTREE",
        fields: [
          { name: "assigned_to_id" },
        ]
      },
      {
        name: "idx_wo_assigned_team",
        using: "BTREE",
        fields: [
          { name: "assigned_team_id" },
        ]
      },
    ]
  });

  return Workorder;
};

