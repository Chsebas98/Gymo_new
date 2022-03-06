import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink className="navbar-brand" to="/">
				<img
					src="/Assets/Images/arm.png"
					alt="Logo"
					width={30}
					height={30}
					className="d-inline-block align-text-top"
				/>
				<span> </span>Gymo
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				{/* Alineación de navbar izquierda */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" aria-current="page" to="/about">
							Acerca de Nosotros
						</NavLink>
					</li>
				</ul>
				{/* Alineación de navbar derecha */}
				<ul className="navbar-nav ms-auto p-2 bd-highlight">
					<>
						<li className="nav-item">
							<NavLink className="nav-link" to="/register">
								Registrate
							</NavLink>
						</li>
						<li class="nav-item">
							<NavLink className="nav-link" to="/login">
								Inicia sesión
							</NavLink>
						</li>
					</>

					<li class="nav-item">
						<span
							className="nav-link"
							style={{ cursor: "pointer" }}
							/* onClick={handleLogout} */
						>
							Logout
						</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
