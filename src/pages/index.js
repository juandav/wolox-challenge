import React, {Component} from 'react'
import Navbar from 'components/layout/navbar'
import Home from 'components/layout/home'
import Tecnology from 'components/layout/tecnology'
import Objective from 'components/layout/objective'
import Benefits from 'components/layout/benefits'
import Requirements from 'components/layout/requirements'
import Farewell from 'components/layout/farewell'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }
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