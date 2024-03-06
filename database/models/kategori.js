'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    static associate(models) {
      Kategori.hasMany(models.tanaman, { foreignKey: 'id_kategori' });
      Kategori.hasMany(models.perawatan, { foreignKey: 'id_kategori' });
    }
  }
  Kategori.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  return Kategori;
};