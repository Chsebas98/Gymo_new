import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
const LoginRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route end path="/" element={<Home />}></Route>
        <Route end path="/about" element={<About />}></Route>
        <Route end path="/login" element={<Login />}></Route>
        <Route end path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default LoginRouter;
