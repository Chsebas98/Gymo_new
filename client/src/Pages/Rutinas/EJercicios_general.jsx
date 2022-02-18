import React from "react";
import RunIcon from "@mui/icons-material/DirectionsRun";
import CardRutina from "../../components/CardRutina";
import { Link } from "react-router-dom";

const EJercicios_general = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col text-center mt-4 fs-1">
					<span className="">
						<RunIcon className="fs-1"></RunIcon> Opciones
					</span>
				</div>
			</div>
			<div className="row">
				<Link to="#">
					<div className="col-md-4">
						<CardRutina />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default EJercicios_general;
