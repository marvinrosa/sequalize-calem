const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meter_transaction', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    meter_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    read_by_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    time_taken: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reading: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_rollover: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    wo_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
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
    tableName: 'meter_transaction',
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
        name: "idx_meter_transaction_time",
        using: "BTREE",
        fields: [
          { name: "time_taken" },
        ]
      },
      {
        name: "idx_meter_transaction",
        using: "BTREE",
        fields: [
          { name: "meter_id" },
        ]
      },
      {
        name: "idx_meter_transaction_wo",
        using: "BTREE",
        fields: [
          { name: "wo_id" },
        ]
      },
    ]
  });
};
