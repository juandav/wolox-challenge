import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/landing/tecnology/tecnology.i18n.js'
import tecnologyImg from "assets/images/Ic_Tecnologys.svg"

const Tecnology = props => {
  const {intl:{formatMessage}} = props
  return (
    <div id="technologies" className="tecnology">
      <p className="tecnology__info">
        {formatMessage(messages.title)}
      </p>
      <img src={tecnologyImg} alt="Tecnologies" className="tecnology__image" />
    </div>
  )
}

export default injectIntl(Tecnology)