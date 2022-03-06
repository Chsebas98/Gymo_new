import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext";

// functions
import { logout } from "../api/user";

const Header = () => {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);

	const handleLogout = (e) => {
		e.preventDefault();

		logout()
			.then((res) => {
				toast.success(res.message);
				// set user to null
				setUser(null);
				// redirect the user to login
				history.push("/login");
			})
			.catch((err) => console.error(err));
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				<img
					src="/Assets/Images/arm.png"
					alt="Logo"
					width={30}
					height={30}
					className="d-inline-block align-text-top"
				/>
				<span> </span>Gymo
			</Link>
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
						<Link className="nav-link" aria-current="page" to="/about">
							Acerca de Nosotros
						</Link>
					</li>
				</ul>
				{/* Alineación de navbar derecha */}
				<ul className="navbar-nav ms-auto p-2 bd-highlight">
					{!user ? (
						<>
							<li className="nav-item">
								<Link className="nav-link" to="/signup">
									Registrate
								</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link" to="/login">
									Inicia sesión
								</Link>
							</li>
						</>
					) : (
						<li class="nav-item">
							<span
								className="nav-link"
								style={{ cursor: "pointer" }}
								onClick={handleLogout}
							>
								Logout
							</span>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
