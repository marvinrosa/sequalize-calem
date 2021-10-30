const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_contact_full_name"
    },
    job_title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    phone_work: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    phone_home: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    phone_mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    email_work: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_other: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    im1_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    im1_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    im2_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    im2_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    street1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    street2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asset_id: {
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
    tableName: 'contact',
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
        name: "uidx_contact_full_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "full_name" },
        ]
      },
    ]
  });
};
