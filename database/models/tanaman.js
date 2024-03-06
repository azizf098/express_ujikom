'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tanaman extends Model {
    static associate(models) {
      tanaman.belongsTo(models.Kategori, { foreignKey: 'id_kategori' });
      tanaman.hasMany(models.perawatan, { foreignKey: 'id_tanaman' });
      tanaman.hasMany(models.penanaman, { foreignKey: 'id_tanaman' });
    }
  }
  tanaman.init({
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tanaman',
  });
  return tanaman;
};