import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from "react-intl"
import { BrowserRouter as Router, Route } from "react-router-dom"
import enLocaleData from "react-intl/locale-data/en"
import esLocaleData from "react-intl/locale-data/es"
import translations from "i18n/locales/"

//pages
import IndexPage from "pages/index"
import LoginPage from "pages/login"
import ProductsPage from "pages/products"

addLocaleData(enLocaleData)
addLocaleData(esLocaleData)

export default class App extends Component {
  render() {
    const locale = "en" // conectar con redux para obtener el lenguaje
    const messages = translations[locale]
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <Router>
          <>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/products" component={ProductsPage} />
          </>
        </Router>
      </IntlProvider>
    )
  }
}