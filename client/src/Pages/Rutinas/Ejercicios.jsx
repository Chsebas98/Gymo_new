import React, { Component } from "react";

export class Ejercicio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ejercicios: [],
		};
	}
	/* INTERFAZ */
	refreshList() {
		fetch(process.env.API_URL + "ejercicio")
			.then((response) => response.json())
			.then((data) => this.setState({ ejercicios: data }));
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
