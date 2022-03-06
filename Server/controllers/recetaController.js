const conn = require("../database/database");
/* CREAR RECETA
http://localhost:1000/receta/view
*/
exports.crearReceta = async (req, res) => {
	try {
		const rc_name = req.body.name_receta;
		const rc_descripcion = req.body.descripcion_receta;
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
					res.status(403).send({ error: "La receta ya existe." });
				}
			}
		);
		//Nueva receta
		await conn.query(
			"INSERT INTO receta (name_receta,descripcion_receta,estado_receta,CREATED_AT)VALUES(?,?,?,?)",
			[rc_name, rc_descripcion, rc_estado, new Date()],
			(err) => {
				if (err) return console.log(err);

				return res.status(200).send({ message: "Receta creada correctamente" });
			}
		);
	} catch (error) {
		console.log(error);
		return res.status(400).send({ message: "Fallido crear receta" });
	}
};
exports.viewReceta = async (req, res) => {
	await conn.query("SELECT * FROM receta", (err, result) => {
		if (err || !result) res.status(400).json({ message: "No existen recetas" });
		else res.status(200).json(result);
		/* console.log(result); */
	});
};
exports.viewOneReceta = async (req, res) => {
	const id_rc = req.params.id;
	/* console.log(id_rc); */
	await conn.query(
		"SELECT * FROM receta WHERE id_receta=?",
		[id_rc],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la receta" });
			else return res.status(200).json(result);
		}
	);
};
/* EDITAR RECETA

*/
exports.editReceta = async (req, res) => {
	const id_rc = req.params.id;
	const name_rc = req.body.nombre_receta;
	const descripcion_rc = req.body.descripcion_receta;
	const estado_rc = req.body.estado_receta;
	/* console.log(id_rc); */
	//buscar la receta
	await conn.query(
		"SELECT * FROM receta WHERE id_receta=?",
		[id_rc],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la receta" });
			else {
				conn.query(
					"UPDATE receta SET name_receta=?,descripcion_receta=?,estado_receta=? WHERE id_receta=?",
					[name_rc, descripcion_rc, estado_rc, id_rc],
					(err, result) => {
						if (err) return res.status(400).send({ message: "Fallido" + err });
						if (result)
							return res.status(200).send({ message: "Actualizado Correctamente" });
					}
				);
			}
		}
	);
};
exports.deleteReceta = async (req, res) => {};
