const router = require('express').Router();
const userController = require("../controllers/userController");

router.post('/api/v1/users/', userController.create);
router.get('/api/v1/users/', userController.findAll);
router.put('/api/v1/users/:id', userController.update);
router.delete('/api/v1/users/:id', userController.delete);
router.get('/api/v1/users/:id', userController.findOne);

module.exports = router;