import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor (props){
        super (props);
        this.state = {
            active: ""
        }
    }

    handleLinkClick = event => {
        this.setState ({
            active: event.target.id
        })
        
    }

    render () {
        return (
            <>
                <div className="ui secondary pointing menu">
                    <Link id="home" onClick={this.handleLinkClick} className= {"ui item " + (this.state.active === "home" ? "active": "")} to="/">Home</Link>
                    <Link id="medicamentos" onClick={this.handleLinkClick} className= {"ui item " + (this.state.active === "medicamentos" ? "active": "")} to="/medicamentos">Medicamentos</Link>
                    <Link id="about" onClick={this.handleLinkClick} className= {"ui item " + (this.state.active === "about" ? "active": "")} to="/about">About</Link>

                    <div className="right menu">
                        <button href="#" className="ui item">
                        Salir
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Menu;