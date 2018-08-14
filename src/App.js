import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
  //Link
} from 'react-router-dom'
import config from './survey.js';
// dependencias de language
import Language from './Language';
//dependencies of survey
import Survey from './Survey'


const Home = () => {
  return (
    <div>
      <p>Bienvenido a la App</p>
      <a href='/language'>Seleccionar idioma de la encuesta</a>
    </div>
  )
}


class App extends Component {


  render() {
    // config.locale = this.state.locale.value  // Agregamos el valor de option a locale del survey
    // console.log("por notificar: ",this.state.locale.value);
    console.log("Mi valor: ",config);
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/language' component={Language}/>
          <Route path='/survey' component={Survey}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
