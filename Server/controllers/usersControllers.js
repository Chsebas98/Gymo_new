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
exports.login = async (req, res) => {
	try {
		//obtengo variables del body
		const us_email = req.body.email_user;
		const us_password = req.body.password_user;
		await conn.query(
			"SELECT * FROM users WHERE email_user=?",
			[us_email],
			(err, results) => {
				if (
					results.length == 0 ||
					!bcrypt.compare(us_password, results[0].password_user)
				) {
					res
						.status(401)
						.json({ error: "El email o la contraseña está incorrecto" });
				} else {
					const id = results[0].id_user;
					const role = results[0].admin;
					//INICIALIZACIÓN DE TOKENS
					const token = jwt.sign({ _id: id, role: role }, process.env.JWT_SECRET, {
						expiresIn: process.env.JWT_TIEMPO_EXPIRA,
					});
					const cookieOptions = {
						expires: new Date(
							Date.now() + process.env.JWT_COOKIE_EXPIRA * 24 * 60 * 60 * 1000
						),
						httpOnly: true,
					};
					res.cookie("jwt", token, cookieOptions);
					return res.status(200).json({
						message: "Login Exitoso",
						token,
						user: results[0],
					});
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
};
/* http://localhost:1000/logout */
exports.logout = (req, res) => {
	res.clearCookie("jwt");

	return res.json({
		message: "Ha cerrado la sesión",
	});
};
/* http://localhost:1000/secret_route */
