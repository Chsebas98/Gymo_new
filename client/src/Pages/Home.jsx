import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Home_content from "../Components/Home_content";

const Home = () => {
	const { user } = useContext(UserContext);
	return <Home_content />;
	/* 	if (user) return <Home_content />;
	else
		return (
			<div className="container" style={{ marginTop: "1rem" }}>
				<section className="motivate">
					<img src="Assets/images/vida_fit.png" alt="Vida_fit" />
					<span className="center">¡Sé tu mejor versión!</span>
				</section>
			</div>
		); */
};

export default Home;
