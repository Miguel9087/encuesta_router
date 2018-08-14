import React, { Component } from 'react'
import config from '../survey.js'
import * as Survey from 'survey-react'; //traemos todo survey-react para agregrarlo
Survey.Survey.csstype = "bootstrap" //le indicamos que la survey va a usar al libreria de boopstrap que trae

export default class SurveyContainer extends Component {

  state = {}

  saveProgress = (progress) => {
      console.log("SAVING", progress);
  }

  synServer = (options) => {
    options.showDataSavingClear('Encuesta almacenada exitosamente')
  }

  surveyComplete = (surveysComplete, optionsComplete) => {
    console.log('OPTIONSCOMPLETE', optionsComplete)
    console.log('SURVEYSCOMPLETE', surveysComplete)
    let texto=''
    !surveysComplete.data.PA3 ? texto='PA3 no existe' : texto = 'Guardando encuesta'

    optionsComplete.showDataSaving (texto)
    setTimeout (()=>{
      optionsComplete.showDataSavingSuccess('Escuesta guardada exitosamente')
    }, 3000);
    console.log(config.locale);
  }

  surveyValidateQuestion = (surveysValidator, optionsValidator) =>{
    console.log('OPTIONS', optionsValidator)
    console.log('SURVEYS', surveysValidator)
  }

  onValueChanged = (surveyChanged,optionsChanged) => {
    console.log('OPTIONSCHANGED', optionsChanged)
    console.log('SURVEYCHANGED', surveyChanged)
  }

  componentWillMount() {
    config.locale = this.props.location.state
  }

  render() {
    return(
      <Survey.Survey
        json={config} //configuracion del surveys
        data={this.state} //donde se guardan los datos (componente)
        onCurrentPageChanged={this.saveProgress} //para almacenar la respesta de la pregunta
        onComplete={this.surveyComplete} //encuesta completa
        onValidateQuestion={this.surveyValidateQuestion} //validar los triggers, condiciones y validaciones
        onValueChanged={this.onValueChanged}// cada que cambia el valor de pregunta
      />
    )
  }
}
