import React, { Component } from "react";

export class Receta extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recetas: [],
		};
	}
	/* INTERFAZ */
	refreshList() {
		fetch(process.env.API_URL + "receta")
			.then((response) => response.json())
			.then((data) => this.setState({ recetas: data }));
	}
	componentDidMount() {
		this.refreshList();
	}
	/* CAMBIOS */
	/* FUNCIONES */
	render() {
		return <div></div>;
	}
}
