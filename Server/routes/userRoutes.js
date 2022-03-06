const express = require("express");
const router = express.Router();
//controllers
const {
	register,
	login,
	logout,
	secret,
} = require("../controllers/usersControllers");
//middlewares
const {
	userRegisterValidator,
	verifyToken,
} = require("../middlewares/usersMiddlewares");
//rutas
router.post("/login", login);
router.post("/register", userRegisterValidator, register);
router.get("/logout", logout);
/* router.get("/test", isAdmin); */
/* RUTA SECRETA */
router.get("/secret", verifyToken, secret);

module.exports = router;
