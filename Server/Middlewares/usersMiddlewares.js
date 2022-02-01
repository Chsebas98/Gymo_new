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
	// username is not null
	req.check("username", "Username is required").notEmpty();

	// email is not null, valid, and normalized
	req.check("email", "Email is required").notEmpty();
	req.check("email", "Invalid Email").isEmail();

	// check password
	req.check("password", "Password is required").notEmpty();
	req
		.check("password")
		.isLength({ min: 6 })
		.withMessage("Contraseña debe tener al menos 6 caracteres");

	req
		.check(
			"password",
			"Password debe tener una letra mayúscula, una minúscula, un caracter especial y un número"
		)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i");

	// check for errors
	const errors = req.validationErrors();
	// if error, show the first one as it happens
	if (errors) {
		const firstError = errors.map((err) => err.msg)[0];

		return res.status(400).json({
			error: firstError,
		});
	}

	// process to next middleware
	next();
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
