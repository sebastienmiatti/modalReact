import React, { Component } from 'react';
import Bouton from './composants/Bouton'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render(){
        return(
            <div>
                <Bouton />
            </div>
        )
    }

}

export default App