import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/home/home.i18n.js'
import peopleImg from "assets/images/Ic_ilustra_Hero.png"

const Home = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div id="home" className="home">
      <p className="home__info">
        <span dangerouslySetInnerHTML={{ __html: formatHTMLMessage(messages.title) }}/>
        <span className="home__brand">{formatMessage(messages.brand)}</span>
      </p>
      <img src={peopleImg} alt="People working" className="home__image" />
    </div>
  )
}

export default injectIntl(Home)