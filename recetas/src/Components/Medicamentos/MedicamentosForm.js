import React from 'react';
import axios from 'axios';

class MedicamentosForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name:[]
        }
    }
   handleNombreChange=event=>{
        this.setState={
            name: event.target.value
        }
   }

   handleSave= event=>{
    event.preventDefault();    
    axios.post("http://localhost:3001/medicamentos", {
            name: this.state.nombre
        }).then(
            res=>{
                console.log(res.data);
            }
        )
        this.props.history.push("/medicamentos");
   }
    render(){
        return(
            <div className="medicamentos-form">
                <form className="ui form">
            <div className="field">
                <label>Nombre medicamento</label>
                <input type="text" name="first-name" value={this.state.name} onChange={this.handleNombreChange}></input>
            </div>
            <button className="ui primary button" onClick={this.handleSave}>Guardar</button>
                </form> 
                </div>
        )
    }
}
export default MedicamentosForm;