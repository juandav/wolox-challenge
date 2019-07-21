import React from 'react'
import WolloxLogo from 'assets/images/wolox-logo.svg'

const Bar = _props => (
  <div className="bar">
    <figure className="bar__brand">
      <img src={WolloxLogo} alt="wolox" className="bar__logo" />
    </figure>
    <button className="bar__logout">logout</button>
  </div>
)

export default Bar