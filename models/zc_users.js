const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zc_users', {
    zc_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    u_correo: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'zc_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "zc_id" },
        ]
      },
    ]
  });
};
