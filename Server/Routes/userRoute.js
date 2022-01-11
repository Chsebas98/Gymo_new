const express = require("express");
const router = express.Router();

//import controllers from
const {
  register,
  login,
  logout,
  getLoggedInUser,
} = require("../Controllers/userController");
//import middlewares
const {
  userRegisterValidator,
  userById,
} = require("../Middlewares/userMiddlewares");
const { verifyToken } = require("../Middlewares/auth");
//api routes

router.post("/register", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/user", verifyToken, userById, getLoggedInUser);

module.exports = router;
