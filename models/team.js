const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    team: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_team_team"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    lead_id: {
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
    tableName: 'team',
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
        name: "uidx_team_team",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "team" },
        ]
      },
    ]
  });
};
