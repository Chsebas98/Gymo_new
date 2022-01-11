const User = require("../Models/userModel");

exports.userRegisterValidator = (req, res, next) => {
  //username no sea null
  req.check("username", "Username es necesario").notEmpty();
  //email no sea null
  req.check("email", "Email es necesario").notEmpty();
  req.check("email", "Email incorrecto").isEmail();
  //password no sea null
  req.check("password", "Password es necesario").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Deben ser mínimo 6 caracteres");
  req
    .check(
      "password",
      "Password debe tener una letra mayúscula, una minúscula, un caracter especial y un número"
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i");

  // check los errors
  const errors = req.validationErrors();
  // si hay error muestrame el primero
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0];

    return res.status(400).json({
      error: firstError,
    });
  }

  // avanzar al siguiente middleware
  next();
};

exports.userById = async (req, res, next) => {
  User.findById(req._id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    req.user = user;
  });

  next();
};
