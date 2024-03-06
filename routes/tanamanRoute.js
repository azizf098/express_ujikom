const router = require('express').Router();
const tanamanController = require("../controllers/tanamanController");

router.post('/api/v1/tanaman/', tanamanController.create);
router.get('/api/v1/tanaman/', tanamanController.findAll);
router.put('/api/v1/tanaman/:id', tanamanController.update);
// router.delete('/api/v1/kategori/:id', kategoriController.delete);
// router.get('/api/v1/kategori/:id', kategoriController.findOne);

module.exports = router;