"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class perawatan extends Model {

    static associate(models) {
      perawatan.belongsTo(models.tanaman, { foreignKey: 'id_tanaman' });
      perawatan.belongsTo(models.Kategori, { foreignKey: 'id_kategori' });
    }
  }
  perawatan.init(
    {
      jenis_perawatan: DataTypes.STRING,
      deskripsi_perawatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "perawatan",
    }
  );
  return perawatan;
};
