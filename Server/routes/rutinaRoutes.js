const { Router } = require("express");
const router = Router();

//import controllers
const {
	crearRutina,
	verRutina,
	editarRutina,
	eliminarRutina,
} = require("../controllers/rutinaControllers");
//import middlewares
const {
	rutinaEnterValidator,
	rutinaById,
} = require("../middlewares/rutinaMiddleware");
const { verifyToken } = require("../middlewares/auth");
//api routes
router.get("/ver", verifyToken, rutinaById, verRutina);
router.post("/crear", verifyToken, rutinaEnterValidator, crearRutina);
router.put("/editar:id", verifyToken, editarRutina);
router.delete("/eliminar:id", verifyToken, eliminarRutina);

module.exports = router;
