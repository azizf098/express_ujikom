'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perawatans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tanaman: {
        type: Sequelize.INTEGER,
        references: {
          model: "tanamans",
          key: "id",
        },
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: "kategoris",
          key: "id",
        },
      },
      jenis_perawatan: {
        type: Sequelize.STRING
      },
      deskripsi_perawatan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perawatans');
  }
};