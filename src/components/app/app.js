import React, {Fragment} from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { IntlProvider, addLocaleData } from "react-intl"
import { BrowserRouter as Router, Route } from "react-router-dom"
import enLocaleData from "react-intl/locale-data/en"
import esLocaleData from "react-intl/locale-data/es"
import translations from "i18n/locales/"
import { connect } from "react-redux"
import makeStore from "store/make-store"
import ErrorBoundary from "helpers/error-boundary"
import PrivateRoute from "helpers/private-route"

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
          <Fragment>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/products" component={ProductsPage} />
          </Fragment>
        </Router>
      </ErrorBoundary>
    </IntlProvider>
  )
}
Root = connect(
  ({meta:{locale}}) => ({ locale }), 
  null
)(Root)

const App = () => {
  const {store, persistor} = makeStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  )
}

export default App

/** private route: https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146 */
/** https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e */