import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from "react-router-dom"
import Menuicon from 'components/shared/menu-icon'
import WolloxLogo from 'assets/images/wolox-logo.svg'
import messages from 'components/landing/navbar/navbar.i18n.js'

const visibility = " " || "nav__list--hidden"
const Navbar = props => {
  const {intl:{formatMessage}} = props
  return (
    <nav className="nav">
      <figure className="nav__figure">
        <img src={WolloxLogo} alt="Wolox's logo" className="nav__logo" />
      </figure>
      <div className="nav__menu">
        <button className="nav__button">
          <Menuicon />
        </button>
      </div>
      <div className={`nav__list nav__list--inside ${visibility}`}>
        <a href="#home" className="nav__list-item">
          {formatMessage(messages.home)}
        </a>
        <a href="#technologies" className="nav__list-item">
          {formatMessage(messages.tecnology)}
        </a>
        <a href="#benefits" className="nav__list-item">
          {formatMessage(messages.benefit)}
        </a>
        <a href="#requeriments" className="nav__list-item">
          {formatMessage(messages.requirement)}
        </a>
      </div>
      <Link to="/login" className="nav__list-button">{formatMessage(messages.buttonText)}</Link>
    </nav>
  )
}
export default injectIntl(Navbar)