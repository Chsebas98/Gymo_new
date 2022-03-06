const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const conn = require("./database/database");
const expressValidator = require("express-validator");
require("dotenv").config();

//imports
const userRoutes = require("./routes/userRoutes");
const recetaRoutes = require("./routes/recetaRoutes");
const rutinaRoutes = require("./routes/rutinaRoutes");
//app
const app = express();
//database

//carpeta public
app.use(express.static("public"));
//middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
//routes
app.use("/", userRoutes);
app.use("/receta", recetaRoutes);
app.use("/rutina", rutinaRoutes);
//listener
const port = process.env.PORT || 1000;
app.listen(port, () => {
	console.log(`Servidor corriendo en puerto: http://localhost:${port}`);
});
