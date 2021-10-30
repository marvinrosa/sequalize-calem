const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    asset_no: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "uidx_asset_asset_no"
    },
    note: {
      type: DataTypes.STRING(76),
      allowNull: true
    },
    priority_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    status_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    template_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    category_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    location_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    weight_uom_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    serial_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    owner_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    original_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    manufacturer_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vendor_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    upload_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    warranty_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    warranty_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    maint_labor_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maint_labor_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maint_material_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maint_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rollup_cost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    costcode_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    dept_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    in_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    depreciation_type_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    depreciation_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    depreciation_time_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    depreciation_rate: {
      type: DataTypes.DOUBLE,
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
    tableName: 'asset',
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
        name: "uidx_asset_asset_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_no" },
        ]
      },
      {
        name: "idx_asset_vendor",
        using: "BTREE",
        fields: [
          { name: "vendor_id" },
        ]
      },
    ]
  });
};
