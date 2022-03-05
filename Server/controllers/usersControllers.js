const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const conn = require("../database/database");
require("dotenv").config();
/* http://localhost:1000/register */
exports.register = async (req, res) => {
	try {
		const us_name = req.body.name_user;
		const us_email = req.body.email_user;
		const us_password = req.body.password_user;
		const admin = req.body.admin;
		//verificar si el usuario ya existe
		await conn.query(
			"SELECT id_user FROM users WHERE name_user LIKE ? OR email_user LIKE ?",
			[us_name, us_email],
			(err, result) => {
				if (result.length > 0) {
					//error
					return res.status(409).send({ message: "El Usuario ya existe" });
				} else {
					//user no esta en uso
					//HASH PASWWORD
					bcrypt.hash(us_password, 10, (err, hash) => {
						if (err) {
							throw err;
							return res.status(500).send({ message: err });
						} else {
							//Nuevo usuario
							conn.query(
								"INSERT INTO users (name_user,email_user,password_user,admin,CREATED_AT) VALUES(?,?,?,?,?)",
								[us_name, us_email, hash, admin, new Date()],
								(err, result) => {
									if (err) {
										throw err;
										return res.status(400).send({ message: err });
									}
									return res.status(201).send({ message: "Registrado Correctamente" });
								}
							);
						}
					});
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
};
/* http://localhost:1000/login */
exports.login = (req, res) => {
	//obtengo variables del body
	const us_email = req.body.email_user;
	const us_password = req.body.password_user;

	conn.query(
		`SELECT * FROM users WHERE email_user=${conn.escape(us_email)}`,
		(err, result) => {
			if (err) {
				throw err;
				return res.status(400).send({
					message: err,
				});
			}
			if (!result.length) {
				return res.status(400).send({
					message: "Usuario o Contraseña incorrecta",
				});
			}
			bcrypt.compare(us_password, result[0]["password_user"], (bErr, bResult) => {
				if (bErr) {
					throw err;
					return res
						.status(400)
						.send({ message: "Usuario o Contraseña incorrecta" });
				}
				if (bResult) {
					//password coincide
					const token = jwt.sign(
						{
							name_user: result[0].name_user,
							id_user: result[0].id_user,
						},
						procces.env.JWT_SECRET,
						{
							expires_in: process.env.JWT_TIEMPO_EXPIRA,
						}
					);
					return res.status(200).send({
						message: "Ha iniciado sesión",
						token,
						user: result[0],
					});
				}
				return res.status(200).send({
					message: "Usuario o Contraseña incorrecta",
				});
			});
		}
	);
};
/* http://localhost:1000/logout */
exports.logout = (req, res) => {
	res.clearCookie("jwt");

	return res.json({
		message: "Ha cerrado la sesión",
	});
};
/* http://localhost:1000/secret_route */
