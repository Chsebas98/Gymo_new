const express = require("express");
const router = express.Router();
//controllers
const {
	register,
	login,
	isLog,
	logout,
} = require("../controllers/usersControllers");
//middlewares
const {
	userRegisterValidator,
	userById,
	verifyToken,
} = require("../middlewares/usersMiddlewares");
//rutas
router.post("/register", userRegisterValidator, register);
router.get("/logout", logout);
router.post("/login", login);

router.get("/user", verifyToken, userById, isLog);

module.exports = router;
