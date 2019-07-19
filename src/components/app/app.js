import React, { Component, Fragment } from 'react'
import { IntlProvider, addLocaleData } from "react-intl"
import Navbar from 'components/layout/navbar'
import Home from 'components/layout/home'
import Tecnology from 'components/layout/tecnology'
import Objective from 'components/layout/objective'
import Benefits from 'components/layout/benefits'
import enLocaleData from "react-intl/locale-data/en"
import esLocaleData from "react-intl/locale-data/es"
import translations from "i18n/locales/"

addLocaleData(enLocaleData)
addLocaleData(esLocaleData)

export default class App extends Component {
  render() {
    const locale = "en" // conectar con redux para obtener el lenguaje
    const messages = translations[locale]
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <Fragment>
          <Navbar />
          <Home />
          <Tecnology />
          <Objective />
          <Benefits />
        </Fragment>
      </IntlProvider>
    )
  }
}