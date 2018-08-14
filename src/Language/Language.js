import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

function Language(props){

  const options = [{value: 'en', label: 'Ingles'},
                   {value: 'es', label: 'Español'},
                   {value: 'fr', label: 'Frances'}]
  //const defaultOption = options[0]


  console.log('Es el valor del locale: ',options );
    return (
      <div className="Language">
        <h1 style={{ color: props.color }}>Esta parte es de lenguaje</h1>
        <Dropdown options={options}
          onChange={props.onSelect}
          value={props.locale.label}
          placeholder="Select an option"/>
          <Link to={{ pathname: '/survey', state: props.locale.value }} >Iniciar Encuesta</Link>
      </div>
    );
}

export default Language;
