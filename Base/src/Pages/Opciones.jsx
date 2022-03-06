import React from "react";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import { Link } from "react-router-dom";

const Opciones = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col text-center mt-4 fs-1">
					<span className="">
						<AltRouteIcon className="fs-1"></AltRouteIcon> Opciones
					</span>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-6">
					<Link to="#">
						<img
							src="Assets/images/cuerpo_completo.jpeg"
							alt="Rutinas_principal"
							className="img-fluid img-thumbnail rounded float-start mb-3"
						/>
						<h4 className="text-danger text-center">SALA DE EJERCICIOS</h4>
					</Link>
				</div>
				<div className="col-md-6 ">
					<Link to="#">
						<img
							src="Assets/images/recetas.png"
							alt="Ensaldas_principal"
							className="img-fluid img-thumbnail rounded float-end mb-3"
						/>
						<h4 className="text-danger text-center">RECETAS</h4>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Opciones;
