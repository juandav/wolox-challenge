import React from 'react'
import { Link } from 'react-router-dom'
import WolloxLogo from 'assets/images/wolox-logo.svg'

const Bar = props => (
  <div className="bar">
    <figure className="bar__brand">
      <Link to="/">
        <img src={WolloxLogo} alt="wolox" className="bar__logo" />
      </Link>
    </figure>
    <button className="bar__logout" onClick={props.unsetToken}>logout</button>
  </div>
)

export default Bar