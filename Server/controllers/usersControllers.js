const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const conn = require("../database/database");
require("dotenv").config();
const { promisfy } = require("util"); //modulo de node para promesas

exports.register = async (req, res) => {
	try {
		const us_name = req.body.username;
		const us_email = req.body.email;
		const us_password = req.body.password;
		//verificar si el usuario ya existe
		//console.log(us_name + " " + us_email + " " + us_password);

		//USERNAME EXIST
		conn.query(
			"SELECT * FROM users WHERE name_user LIKE ? OR email_user LIKE ?",
			[us_name, us_email],
			(err, data) => {
				if (err) {
					return err;
				}
				if (data.length > 0) {
					res.status(403).json({ error: "El usuario ya existe." });
				}
			}
		);

		//hash password
		let salt = bcrypt.genSaltSync(9);
		let hashPassword = bcrypt.hashSync(us_password, salt);
		//Nuevo usuario
		//console.log("PASS: " + hashPassword + " En teoria se registra");
		await conn.query(
			"INSERT INTO users (name_user,email_user,password_user,CREATED_AT)VALUES(?,?,?,?)",
			[us_name, us_email, hashPassword, new Date()],
			(err) => {
				if (err) return console.log(err);
				return res
					.status(200)
					.json({ message: "Usuario Registrado correctamente" });
			}
		);
		/* await conn.query(
			"INSERT INTO users (name_user,email_user,password_user,admin,CREATED_AT) VALUES (?,?,?,?,?,?)",
			[us_name, us_email, hashPassword, 0, new Date()],
			(err, data) => {
				if (err) return err;
				res.json({ message: "Usuario Registrado." });
			}
		); */
	} catch (error) {
		console.log(error);
	}
};
exports.login = async (req, res) => {
	try {
		//obtengo variables del body
		const us_email = req.body.email;
		const us_password = req.body.password;

		conn.query(
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
					const id = results[0].id;
					//INICIALIZACIÓN DE TOKENS
					const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
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
					});
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
};
exports.logout = (req, res) => {
	res.clearCookie("jwt");

	return res.json({
		message: "Ha cerrado la sesión",
	});
};
//SI EL USUARIO ESTÁ AUTENTICADO
exports.isLog = async (req, res) => {
	const { username } = req.user;

	return res.status(200).json({
		message: "Usuario está con sesión iniciada",
		username,
	});
};
