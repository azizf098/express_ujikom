const authController = require('./authController');
const userController = require('./userController');
const kategoriController = require('./kategoriController');

module.exports = {
    auth: authController,
    user: userController,
    kategori: kategoriController,
};