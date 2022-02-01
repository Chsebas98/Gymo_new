const mysql = require("mysql");
require("dotenv").config();

const conexion = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
});

conexion.connect((error) => {
	if (error) {
		console.log("Error de conexión con base de datos: ", error);
	}
	console.log("Conectado a la base de datos");
});

module.exports = conexion;
