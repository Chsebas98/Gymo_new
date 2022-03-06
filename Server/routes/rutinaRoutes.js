const express = require("express");
const router = express.Router();
//controllers
const {
	crearRutina,
	viewRutina,
	viewOneRutina,
	editRutina,
	deleteRutina,
} = require("../controllers/rutinaController");
//middlewares
const { isAdmin } = require("../middlewares/usersMiddlewares");
//rutas

router.post("/create", isAdmin, crearRutina);
router.get("/view", viewRutina);
router.get("/view/:id", viewOneRutina);
router.put("/edit/:id", isAdmin, editRutina);
router.delete("/delete/:id", isAdmin, deleteRutina);

module.exports = router;
