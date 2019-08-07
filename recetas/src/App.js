import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/Home'

class App extends React.Component{
    render(){
        return(
        
        <div className="ui container">
            <p>Aqui iría un menú</p>
            <Router>
            <Route exact path="/" component={Home}></Route>
            </Router>
            </div>
        )
    }
}

export default App;
