const Rutina = require("../models/rutinaModel");
exports.rutinaEnterValidator = (req, res, next) => {
	//nombre no nulo
	req.check("name_rt", "El nombre es requerido.").notEmpty();
	//categoría no nula
	req.check("categoria_rt", "Debe pertenecer a una categoría.").notEmpty();
	//description no sea nulo
	req.check("description_rt", "La description es necesaria.").notEmpty();

	req
		.check("name_rt")
		.isLength({ min: 5 })
		.withMessage("El nombre no debe tener menos de 5 caracteres.");
	req
		.check("categoría_rt")
		.isLength({ min: 4 })
		.withMessage("La categoría no debe tener menos de 4 caracteres.");
	//check errores
	const errors = req.validationErrors();
	//Si existe mostrar el primero
	if (errors) {
		const firstError = errors.map((err) => err.msg)[0];
		return res.status(400).json({ error: firstError });
	}
	//seguir con el siguiente
	next();
};

exports.rutinaById = async (req, res, next) => {
	Rutina.findById(req.id).exec((err, rutina) => {
		if (err || !rutina) {
			return res.status(404).json({
				error: "Receta no encontrada",
			});
		}
		//añadir la rutina a un objeto con la info
		req.rutina = rutina;
		next();
	});
};
