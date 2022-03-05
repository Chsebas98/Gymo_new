const jwt = require("jsonwebtoken");
const conn = require("../database/database");
exports.verifyToken = (req, res, next) => {
	let accessToken = req.cookieOptions.jwt;

	// if there is no token in the cookies, request is unauthorized
	if (!accessToken) {
		return res.status(403).json({
			error: "Token inválido",
		});
	}

	let payload;
	try {
		// verify the token jwt.verify
		// throws an erro if token has expired or has an invalid signature
		payload = jwt.verify(accessToken, process.env.JWT_SECRET);
		req._id = payload._id;

		next();
	} catch (e) {
		// return req unauthorized error
		return res.status(403).json({
			error: "Token inválido",
		});
	}
};

exports.userRegisterValidator = (req, res, next) => {
	//User debe tener minimo 3
	const username = req.body.name_user;
	const password = req.body.password_user;
	const confirmPassword = req.body.confirmPassword;

	if (!username || username.length < 3) {
		return res
			.status(400)
			.send({ message: "Username debe tener mínimo 3 caracteres" });
	}
	//password mínimo 6
	if (!password || password.length < 6) {
		return res
			.status(400)
			.send({ message: "Password debe tener mínimo 6 caracteres" });
	}
	if (
		!password ||
		!password.match(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,
			"i"
		)
	) {
		return res.status(400).send({
			message:
				"Password debe tener una letra mayúscula, una minúscula, un caracter especial y un número",
		});
	}
	//Verificar password repeated
	if (!confirmPassword || password != confirmPassword) {
		return res.status(400).send({ message: "Las contraseñas deben coincidir" });
	}

	next();
};

/* Is Log */
exports.isLog = async (req, res) => {
	const { username } = req.user;

	return res.status(200).json({
		message: "Usuario está con sesión iniciada",
		username,
	});
};

exports.userById = async (req, res, next) => {
	conn.query("SELECT * FROM users WHERE id=?", [req.id], (err, results) => {
		if (err || !results)
			return res.status(404).json({ error: "Usuario no encontrado" });
	});
	//añado el objeto user con toda la info
	req.user = user;
	console.log(user);
	next();
};
exports.isAdmin = async (req, res, next) => {
	/* const user = await conn.query(
		"SELECT * FROM users WHERE id=? and admin=1",
		[req.id],
		(err, results) => {
			if (err || !results)
				return res.status(403).json({ error: "El usuario no es administrador" });
		}
	);
	req.user = user; */
	next();
};
