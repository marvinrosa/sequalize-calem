const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pm', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    pm_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_pm_pm_no"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    asset_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    rcm_action_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    category_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    priority_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    origin_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    origin_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    assigned_to_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    assigned_team_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    duration_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    release_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    schedule_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    release_schedule: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    labor_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    downtime_hours: {
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
    tableName: 'pm',
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
        name: "uidx_pm_pm_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pm_no" },
        ]
      },
    ]
  });
};
