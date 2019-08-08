import React, { Component } from 'react';
import axios from 'axios';


class MedicamentosForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: "",
            id: null
        }
    }

    componentDidMount(){
        const {id}=(this.props.match.params);
        if(id){
            axios.get(`http://localhost:3001/medicamentos/${id}`).then(res=>{
                console.log(res);
                this.setState({
                    nombre: res.data,
                    id: id
                })
            })

    }
}

    handleNameChange = event => {
        console.log(event.target.value)
        
        this.setState({
            nombre: event.target.value
        })
    }

    handleSave=  event => {
        event.preventDefault()
        const newElement ={
            name: this.state.nombre
        }
        if(this.state.id){
            axios.put(`http://localhost:3001/medicamentos/${this.state.id}`, 
            newElement).then(res=>{
                console.log(res.data);
                this.props.history.push("/medicamentos");
            })
        }else{
        axios.post("http://localhost:3001/medicamentos", newElement)
        .then( res => {
        this.props.history.push("/medicamentos");
        
         })
        }
    }

    render() { 
        return (
            <div className="medicamentos-form">
                <form className="ui form">
                    <div className="field">
                        <label>Nombre medicamento</label>
                        <input type="text" name="medicamento" placeholder="Nombre del medicamento" value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <button className="ui primary button" onClick={this.handleSave}>Guardar</button>
                </form>
            </div>
        );
    }
}
 
export default MedicamentosForm;