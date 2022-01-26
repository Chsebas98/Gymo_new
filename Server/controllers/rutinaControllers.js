const Rutina = require("../models/rutinaModel");
exports.crearRutina = async (req, res) => {
	//si la rutina existe se
	const rutinaExists = await Rutina.findOne({
		name_rt: req.body.name_rt,
	});
	if (rutinaExists) {
		return res.status(403).json({
			error: "La rutina ya existe",
		});
	}
	//Crear nueva rutina
	const rutina = new Rutina(req.body);
	await rutina.save();
	res.status(201).json({
		message: "Se añadió la rutina.",
	});
};

exports.verRutina = async (req, res) => {};

exports.editarRutina = async (req, res) => {};

exports.eliminarRutina = async (req, res) => {};
