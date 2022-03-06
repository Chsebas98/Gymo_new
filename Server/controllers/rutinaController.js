const conn = require("../database/database");

exports.crearRutina = async (req, res) => {
	try {
		const rt_name = req.body.name_receta;
		const rt_descripcion = req.body.descripcion_receta;
        const rt_categoria = req.body.descripcion_receta;
		const rt_estado = req.body.estado_receta;
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
			"INSERT INTO rutina (name_rutina,descripcion_rutina,categoria,estado,CREATED_AT)VALUES(?,?,?,?)",
			[rt_name, rt_descripcion,rt_descripcion, rt_estado, new Date()],
			(err) => {
				if (err) return console.log(err);

				return res.status(200).send({ message: "Receta creada correctamente" });
			}
		);
	} catch (error) {
		console.log(error);
		return res.status(400).send({ message: "Fallido crear rutina" });
	}
};
exports.viewRutina = async (req, res) => {
	await conn.query("SELECT * FROM rutina", (err, result) => {
		if (err || !result) res.status(400).json({ message: "No existen rutinas" });
		else res.status(200).json(result);
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
	const name_rt = req.body.nombre_rutina;
	const descripcion_rt = req.body.descripcion_rutina;
    const categoria_rt = req.body.categoria_rt;
	const estado_rt = req.body.estado_receta;

	
	await conn.query(
		"SELECT * FROM rutina WHERE id_rutina=?",
		[id_rt],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la rutina" });
			else {
				conn.query(
					"UPDATE rutina SET name_rutina=?,descripcion_rutina=?,categoria=?,estado_rutina=? WHERE id_rutina=?",
					[ id_rt,name_rt, descripcion_rt,categoria_rt, estado_rt],
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
	const id_rc = req.params.id;
	await conn.query(
		"SELECT * FROM receta WHERE id_rutina=?",
		[id_rt],
		(err, result) => {
			if (err || result.length == 0)
				return res.status(400).send({ message: "No existe la rutina" });
			else {
				conn.query(
					"UPDATE rutina SET estado_rutina=0 WHERE id_rutina=?",
					[id_rc],
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
