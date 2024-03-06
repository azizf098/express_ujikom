'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penanaman extends Model {
   
    static associate(models) {
      penanaman.belongsTo(models.tanaman, { foreignKey: 'id_tanaman' });
    }
  }
  penanaman.init({
    bulan_tanam: DataTypes.STRING,
    tanggal_tanam: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'penanaman',
  });
  return penanaman;
};