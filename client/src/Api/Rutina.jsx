import React, { Component } from "react";

export class Rutina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rutinas: [],
            tituloModal: "",

        };
    }
    /* INTERFAZ */
    refreshList() {
        fetch(process.env.API_URL + "rutina")
            .then((response) => response.json())
            .then((data) => this.setState({ rutinas: data }));
    }
    componentDidMount() {
        this.refreshList();
    }

    cambiarNombre = (e) => {
        this.setState({ name_Rutina: e.target.value })
    }
    cambiarDescripcion = (e) => {
        this.setState({ descripcion_Rutina: e.target.value })
    }
    cambiarCategoria = (e) => {
        this.setState({ categoria_rutina: e.target.value })
    }
    cambiarEstado = (e) => {
        this.setState({ estado_rutina: e.target.value })
    }
    /* CAMBIOS */
    addClick() {
        this.setState({
            tituloModal: "Agregar Rutina",
            IdRutina: 0,
            NombreRutina: ""
        })
    }
    /* FUNCIONES */
    render() {
        const {
            rutinas
        } = this.state;
        return (
            <div>
          <button type="button" className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#ejemploModal"
                    onClick={() => this.addClick()}>
                    Agregar Rutina
                </button>  
        </div>
        )
    }
}
