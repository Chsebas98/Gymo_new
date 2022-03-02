const express = require("express");
const router = express.Router();
//controllers
const {
	crearReceta,
	viewReceta,
	viewOneReceta,
	editReceta,
	deleteReceta,
} = require("../controllers/recetaController");
//middlewares
const { isAdmin } = require("../middlewares/usersMiddlewares");
const {} = require("../middlewares/recetaMiddlewares");
//rutas

router.post("/create", isAdmin, crearReceta);
router.get("/view", viewReceta);
router.get("/view:id", viewOneReceta);
router.put("/edit:id", isAdmin, editReceta);
router.delete("delete:id", isAdmin, deleteReceta);

module.exports = router;
