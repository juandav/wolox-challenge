import React from "react"
import { Provider } from "react-redux"
import { IntlProvider, addLocaleData } from "react-intl"
import { BrowserRouter as Router, Route } from "react-router-dom"
import enLocaleData from "react-intl/locale-data/en"
import esLocaleData from "react-intl/locale-data/es"
import translations from "i18n/locales/"
import { connect } from "react-redux"
import makeStore from "store/make-store"
import ErrorBoundary from "helpers/error-boundary"

//pages
import IndexPage from "pages/index"
import LoginPage from "pages/login"
import ProductsPage from "pages/products"

addLocaleData(enLocaleData)
addLocaleData(esLocaleData)

let Root = props => {
  const messages = translations[props.locale]
  return (
    <IntlProvider locale={props.locale} key={props.locale} messages={messages}>
      <ErrorBoundary>
        <Router>
          <>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/products" component={ProductsPage} />
          </>
        </Router>
      </ErrorBoundary>
    </IntlProvider>
  )
}
Root = connect(
  ({meta:{locale}}) => ({ locale }), 
  null
)(Root)

const App = () => (
  <Provider store={makeStore()}>
    <Root />
  </Provider>
)

export default App

/** private route: https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146 */
/** https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e */