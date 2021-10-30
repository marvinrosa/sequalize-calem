const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sched_user', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    sched_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shift_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    total_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sched_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    hours_sched: {
      type: DataTypes.DOUBLE,
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
    tableName: 'sched_user',
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
        name: "uidx_sched_user",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "sched_date" },
          { name: "shift_id" },
        ]
      },
      {
        name: "idx_sched_user_date",
        using: "BTREE",
        fields: [
          { name: "sched_date" },
        ]
      },
    ]
  });
};
