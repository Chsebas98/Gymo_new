import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { UserContext } from "./UserContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

// functions
import { getUser } from "./api/user";
import About from "./Pages/About";
import Opciones from "./Pages/Opciones";
import Ejercicios_general from "./Pages/Rutinas/Ejercicios_general";
import Recetas_general from "./Pages/Recetas/Recetas_general";

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = getUser()
			.then((res) => {
				if (res.error) toast(res.error);
				else setUser(res.username);
			})
			.catch((err) => toast(err));

		return () => unsubscribe;
	}, []);

	return (
		<div>
			<Router>
				<UserContext.Provider value={{ user, setUser }}>
					<ToastContainer />
					<Header />

					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/options" component={Opciones} />
					<Route exact path="/exercises" component={Ejercicios_general} />
					<Route exact path="/recipes" component={Recetas_general} />
				</UserContext.Provider>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/about" component={About} />
			</Router>
		</div>
	);
};

export default App;
