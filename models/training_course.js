const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_course', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_course"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    hours: {
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
    tableName: 'training_course',
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
        name: "uidx_course",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
