import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { UserContext } from "./UserContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// functions
import { getUser } from "./api/user";
import About from "./pages/About";
import Opciones from "./pages/Opciones";
import EJercicios_general from "./pages/Rutinas/EJercicios_general";
import Recetas_general from "./pages/Recetas/Recetas_general";

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
					<Route exact path="/exercises" component={EJercicios_general} />
					<Route exact path="/recipes" component={Recetas_general} />
				</UserContext.Provider>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/about" component={About} />
			</Router>
		</div>
	);
};

export default App;
