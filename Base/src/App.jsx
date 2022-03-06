import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";

// functions
import About from "./Pages/About";
import Opciones from "./Pages/Opciones";
import Ejercicios_general from "./Pages/Rutinas/Ejercicios_general";
import Recetas_general from "./Pages/Recetas/Recetas_general";

const App = () => {
	return (
		<div>
			<Router>
				<Header />

				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/options" component={Opciones} />
				<Route exact path="/exercises" component={Ejercicios_general} />
				<Route exact path="/recipes" component={Recetas_general} />

				<Route exact path="/signup" component={Signup} />
				<Route exact path="/about" component={About} />
			</Router>
		</div>
	);
};

export default App;
