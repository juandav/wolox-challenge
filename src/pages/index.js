import React, {Component} from 'react'
import Navbar from 'components/landing/navbar'
import Home from 'components/landing/home'
import Tecnology from 'components/landing/tecnology'
import Objective from 'components/landing/objective'
import Benefits from 'components/landing/benefits'
import Requirements from 'components/landing/requirements'
import Farewell from 'components/landing/farewell'

class IndexPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Tecnology />
        <Objective />
        <Benefits />
        <Requirements />
        <Farewell />
      </>
    )
  }
}

export default IndexPage