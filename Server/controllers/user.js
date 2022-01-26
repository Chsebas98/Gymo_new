const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
	// check if user already exists
	const usernameExists = await User.findOne({
		username: req.body.username,
	});
	const emailExists = await User.findOne({
		email: req.body.email,
	});

	if (usernameExists) {
		return res.status(403).json({
			error: "El usuario ya existe",
		});
	}
	if (emailExists) {
		return res.status(403).json({
			error: "El email ya existe",
		});
	}

	// if new user, create a new user
	const user = new User(req.body);
	await user.save();

	res.status(201).json({
		message: "Inicio de sesión exitoso!",
	});
};

exports.login = async (req, res) => {
	// find the user based on email
	const { email, password } = req.body;

	await User.findOne({ email }).exec((err, user) => {
		// if err or no user
		if (err || !user) {
			return res.status(401).json({
				error: "Credenciales inválidas",
			});
		}

		// if user is found, we use the authenticate method from the model
		if (!user.authenticate(password)) {
			return res.status(401).json({
				error: "Email o password incorrecto",
			});
		}

		// generate a token with user id and jwt secret
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "24h",
		});

		// persist the token as 'jwt' in cookie with an expiry date
		res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

		// return the response with user
		const { username } = user;
		return res.json({
			message: "Inicio de sesión exitoso!",
			username,
		});
	});
};

exports.logout = (req, res) => {
	// clear the cookie
	res.clearCookie("jwt");

	return res.json({
		message: "Ha cerrado la sesión",
	});
};

exports.getLoggedInUser = (req, res) => {
	const { username } = req.user;

	return res.status(200).json({
		message: "Usuario está con sesión iniciada",
		username,
	});
};
