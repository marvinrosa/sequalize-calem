const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "uidx_users_username"
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    user_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    emp_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    contractor_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    job_role_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    login_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    job_title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    acl_group_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    admin_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: "search_admin_none"
    },
    team_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    supervisor_id: {
      type: DataTypes.STRING(36),
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
    req_approval_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    po_approval_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    craft_id: {
      type: DataTypes.STRING(36),
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
    tableName: 'users',
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
        name: "uidx_users_username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
