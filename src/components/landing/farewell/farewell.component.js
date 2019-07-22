import React from 'react'
import { injectIntl } from 'react-intl'
import logo from "assets/images/wolox-black-logo.svg";
import messages from 'components/landing/farewell/farewell.i18n.js'
import colors from 'assets/styles/constants.scss'

const Farewell = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div id="farewell" className="farewell">
      <p className="farewell__title">
        <span dangerouslySetInnerHTML={{ 
          __html: formatHTMLMessage(messages.title, {
            byeColor: colors.blue,
          })
        }}/>
      </p>
      <p className="farewell__sub-title">{formatMessage(messages.subTitle)}</p>
      <a href="https://www.wolox.com.ar/" className="farewell__btn-more">
        {formatMessage(messages.knowMore)}
      </a>
      <img src={logo} alt="Wolox's logo" className="farewell__footer-logo" />
      <div className="farewell__custom-select">
        <select className="farewell__select" onChange={props.changeLanguage} value={props.locale}>
          <option value="en">Ingles</option>
          <option value="es">Español</option>
        </select>
      </div >
    </div>
  )
}

export default injectIntl(Farewell)