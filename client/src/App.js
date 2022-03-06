import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Componentes */
import Header from "./Components/Header";

/* Pages */
import Register from "./Pages/Register";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About";
import Home_content from "./Components/Home_content";

const App = () => {
	const [user, setUser] = useState("");
	useEffect(() => {
		const getUser = () => {
			fetch(process.env.API_URL + "secret/:id").then();
		};
		getUser();
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home_content />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
