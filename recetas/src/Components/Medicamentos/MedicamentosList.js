import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class MedicamentosList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            medicamentos: []
         }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/medicamentos")
            .then( res => {
                console.log (res.data);
                this.setState({
                    medicamentos: res.data
                });
            })
    }

    delete = id => {
        axios.delete(`http://localhost:3001/medicamentos/${id}/`)
            .then(
                res => {
                    const nuevosElementos = this.state.medicamentos.filter(i => (i.id !== id));
                    console.log(nuevosElementos)
                    this.setState({
                        medicamentos: nuevosElementos
                })

        })
    }

    render() { 
        return (
            <div className="medicamentos-list">
                <Link id="medicamentos" className="ui green button" to="/medicamentos/add">
                    <i className="icon plus"></i>
                </Link>
                <table className="ui red table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.medicamentos.map(
                                item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td style={{textAlign: "right"}}>
                                                <Link className="ui primary button" to={`/medicamentos/${item.id}/edit`}>
                                                    <i className="edit icon">Edit</i>
                                                    </Link>
                                                <button className="ui red button" 
                                                onClick={event => this.delete(item.id)}>BORRAR</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MedicamentosList;