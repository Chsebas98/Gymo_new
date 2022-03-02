const conn = require("../database/database");

exports.crearReceta = async (req, res) => {
	try {
		const rc_name = req.body.name_receta;
		const rc_descripcion = req.body.description_receta;
		const rc_estado = req.body.estado_receta;
		//Receta ya existe
		conn.query(
			"SELECT * FROM receta WHERE name_receta LIKE ?",
			[rc_name],
			(err, data) => {
				if (err) {
					return err;
				}
				if (data.length > 0) {
					res.status(403).json({ error: "La receta ya existe." });
				}
			}
		);
		//Nueva receta
		await conn.query(
			"INSERT INTO receta (name_receta,descripcion_receta,estado_receta,CREATED_AT)VALUES(?,?,?,?)",
			[rc_name, rc_descripcion, rc_estado, new Date()],
			(err) => {
				if (err) return console.log(err);

				return res.status(200).json({ message: "Receta creada correctamente" });
			}
		);
	} catch (error) {
		console.log(error);
	}
};
exports.viewReceta = async (req, res) => {
	await conn.query("SELECT * FROM receta"),
		(err, result) => {
			if (err || !data) res.status(500).json({ message: "No existen recetas" });
			else res.json(result);
			console.log(result);
		};
};
exports.viewOneReceta = async (req, res) => {};
exports.editReceta = async (req, res) => {};
exports.deleteReceta = async (req, res) => {};
