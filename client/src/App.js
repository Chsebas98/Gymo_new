import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Componentes */
import Header from "./Components/Header";

/* Pages */
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
