const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

//app
const app = express();

//database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("BASE DE DATOS CONECTADA"))
  .catch((err) => console.log("ERROR DE CONEXIÓN CON LA BASE DE DATOS: ", err));

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator());
//ROUTES
const userRoutes = require("./Routes/userRoute");
app.use("/", userRoutes);

//PORT
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
