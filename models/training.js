const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    training: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_training"
    },
    course_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    instructor_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    instructor_contact_id: {
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
    certificate_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    description: {
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
    tableName: 'training',
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
        name: "uidx_training",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "training" },
        ]
      },
      {
        name: "idx_training_course",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "idx_training_start",
        using: "BTREE",
        fields: [
          { name: "start_time" },
        ]
      },
    ]
  });
};
