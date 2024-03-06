const router = require('express').Router();
const kategoriController = require("../controllers/kategoriController");

router.post('/api/v1/kategori/', kategoriController.create);
router.get('/api/v1/kategori/', kategoriController.findAll);
router.put('/api/v1/kategori/:id', kategoriController.update);
router.delete('/api/v1/kategori/:id', kategoriController.delete);
router.get('/api/v1/kategori/:id', kategoriController.findOne);

module.exports = router;