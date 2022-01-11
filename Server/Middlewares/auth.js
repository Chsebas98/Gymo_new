const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let accessToken = req.cookies.jwt;

  // si no hay token en las cookies, la solicitud no está autorizada
  if (!accessToken) {
    return res.status(403).json({
      error: "Unauthorized",
    });
  }

  let payload;
  try {
    // verificar el token jwt.verify
    payload = jwt.verify(accessToken, process.env.JWT_SECRET);
    req._id = payload._id;

    next();
  } catch (e) {
    // return error
    return res.status(403).json({
      error: "No autorizado",
    });
  }
};
