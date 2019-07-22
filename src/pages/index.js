import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import Navbar from 'components/landing/navbar'
import Home from 'components/landing/home'
import Tecnology from 'components/landing/tecnology'
import Objective from 'components/landing/objective'
import Benefits from 'components/landing/benefits'
import Requirements from 'components/landing/requirements'
import Farewell from 'components/landing/farewell'
import {changeLanguage} from 'store/meta/actions'

class IndexPage extends Component {
  changeLanguage = e => {
    this.props.changeLanguage(e.target.value)
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Home />
        <Tecnology />
        <Objective />
        <Benefits />
        <Requirements />
        <Farewell 
          changeLanguage = {this.changeLanguage}
          locale = {this.props.locale}
        />
      </Fragment>
    )
  }
}

export default connect( 
  ({meta:{locale}}) => ({locale}), 
  ({changeLanguage})
)(IndexPage)