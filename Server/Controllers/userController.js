const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  //check si existe
  const usernameExists = await User.findOne({ username: req.body.username });
  const emailExists = await User.findOne({ email: req.body.email });

  if (usernameExists) {
    return res.status(403).json({ error: "Username ya existe" });
  }
  if (emailExists) {
    return res.status(403).json({ error: "Email ya existe" });
  }
  //si se crea un nuevo usuario
  const user = new User(req.body);
  await user.save();

  res.status(201).json({
    message: "Registro Exitoso! Por favor inicie sesión para continuar",
  });
};

exports.login = async (req, res) => {
  //encontrar el usuario
  const { email, password } = req.body;

  await User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: "Credenciales Inválidas" });
    }
    // si encontramos al usuario
    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Email o contraseña inválida" });
    }
    //generar un token con el id del usuario
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    //jwt expira
    res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

    //return res with user
    const { username } = user;
    return res.json({ message: "Login Exitoso!", username });
  });
};

exports.logout = (req, res) => {
  // clear the cookie
  res.clearCookie("jwt");

  return res.json({
    message: "Logout Successful!",
  });
};

exports.getLoggedInUser = (req, res) => {
  const username = req.user;

  return res.status(200).json({
    message: "Usuario ya ha iniciado sesión",
    username,
  });
};
