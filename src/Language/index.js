import React, { Component } from 'react';
import Language from './Language'

export default class LanguageContainer extends Component {

  state = {
    locale: {
        value: 'es'
        //label: 'Español'
      }
  }
  
  _onSelect = (option) => {
    console.log('VALUE', option)
    this.setState({ locale: option }, () => {
      console.log('LOCALE', this.state.locale.value)
      //console.log('que valor será',option.value)
    })
  }

  render(){
    return(
        <Language
          onSelect={this._onSelect}
          locale={this.state.locale}
        />
    );
  }

}
