const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/v1/users/login", authController.login);
router.post("/api/v1/users/register", authController.register);
router.post("/api/v1/users/logout", authController.logout);

module.exports = router;