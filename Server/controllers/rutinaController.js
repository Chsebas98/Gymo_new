const conn = require("../database/database");

exports.crearRutina = async (req, res) => {
	try {
		const rt_name = req.body.name_rutina;
		const rt_descripcion = req.body.descripcion_rutina;
		const rt_categoria = req.body.categoria;
		const rt_estado = req.body.estado;
		//Rutinaa ya existe
		conn.query(
			"SELECT * FROM rutina WHERE name_rutina LIKE ?",
			[rt_name],
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
			"INSERT INTO rutina (name_rutina,descripcion_rutina,categoria,estado,CREATED_AT)VALUES(?,?,?,?,?)",
			[rt_name, rt_descripcion, rt_categoria, rt_estado, new Date()],
			(err) => {
				if (err) return console.log({ message: "No se pudo crear " + err });

				return res.status(200).send({ message: "Rutina creada correctamente" });
			}
		);
	} catch (error) {
		console.log(error);
		return res.status(400).send({ message: "Fallido crear rutina" });
	}
};
/* View Rutina */
exports.viewRutina = async (req, res) => {
	await conn.query("SELECT * FROM rutina", (err, result) => {
		if (err || !result || result.length == 0)
			res.status(400).send({ message: "No existen rutinas" });
		else res.status(200).send(result);
		/* console.log(result); */
	});
};
exports.viewOneRutina = async (req, res) => {
	const id_rc = req.params.id;
	/* console.log(id_rc); */
	await conn.query(
		"SELECT * FROM rutina WHERE id_rutina=?",
		[id_rc],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la rutina" });
			else return res.status(200).json(result);
		}
	);
};

exports.editRutina = async (req, res) => {
	const id_rt = req.params.id;
	const name_rt = req.body.name_rutina;
	const descripcion_rt = req.body.descripcion_rutina;
	const categoria_rt = req.body.categoria;
	const estado_rt = req.body.estado;

	await conn.query(
		"SELECT * FROM rutina WHERE id_rutina=?",
		[id_rt],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la rutina" });
			else {
				conn.query(
					"UPDATE rutina SET name_rutina=?,descripcion_rutina=?,categoria=?,estado=? WHERE id_rutina=?",
					[name_rt, descripcion_rt, categoria_rt, estado_rt, id_rt],
					(err, result) => {
						if (err) return res.status(400).send({ message: "Fallido " + err });
						if (result)
							return res.status(200).send({ message: "Actualizado Correctamente" });
					}
				);
			}
		}
	);
};

exports.deleteRutina = async (req, res) => {
	const id_rt = req.params.id;
	await conn.query(
		"SELECT * FROM rutina WHERE id_rutina=?",
		[id_rt],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la rutina" });
			else {
				conn.query(
					"UPDATE rutina SET estado=0 WHERE id_rutina=?",
					[id_rt],
					(err, result) => {
						if (err) return res.status(400).send({ message: "Fallido " + err });
						if (result)
							return res.status(200).send({ message: "Eliminado Correctamente" });
					}
				);
			}
		}
	);
};
