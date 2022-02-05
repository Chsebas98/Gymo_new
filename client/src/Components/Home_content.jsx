import React from "react";
import { Link } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./css/home.css";

const Home_content = () => {
	return (
		<div className="container" style={{ marginTop: "1rem" }}>
			<section className="motivate">
				<img src="Assets/images/vida_fit.png" alt="Vida_fit" />
				<span className="center">¡Sé tu mejor versión!</span>
			</section>
			<div className="row mt-2">
				<Link to="#">
					<section className="opciones">
						<div className="col-md-6">
							<span className="txt-ejercicio">Ejercicios</span>
						</div>
						<div className="col-md-6">
							<img
								className="img_ejercicio"
								src="Assets/images/fit_house.jpg"
								alt="Fit house"
							/>
						</div>
					</section>
				</Link>
			</div>
			<div className="row mt-2">
				<Link to="#">
					<section className="opciones">
						<div className="col-md-6">
							<img
								className="img_receta"
								src="Assets/images/recetas.png"
								alt="Fit house"
							/>
						</div>
						<div className="col-md-6">
							<span className="txt-receta">Recetas</span>
						</div>
					</section>
				</Link>
			</div>
			<div className="row text-center mt-5">
				<section className="footer">
					<CopyrightIcon /> Todos los derechos reservados
				</section>
			</div>
			{/* <div className="alert alert-primary p-5 mt-5">
		  <h1>{user && <span className="text-success">{user}'s</span>} Home</h1>
	  </div> */}
		</div>
	);
};

export default Home_content;
