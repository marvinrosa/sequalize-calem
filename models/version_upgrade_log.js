const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version_upgrade_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    vid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ver_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    prev_vid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    prev_ver_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    prev_props: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    upgrade_note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    results: {
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
    tableName: 'version_upgrade_log',
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
    ]
  });
};
