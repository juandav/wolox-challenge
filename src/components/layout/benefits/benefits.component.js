import React from 'react'
import { injectIntl } from 'react-intl'
import time from "assets/icons/time.svg";
import desk from "assets/icons/desk.svg";
import meeting from "assets/icons/meeting.svg";
import fruit from "assets/icons/fruit.svg";
import laptop from "assets/icons/laptop.svg";
import brain from "assets/icons/brain.svg";
import messages from 'components/layout/benefits/benefits.i18n.js'
import colors from 'assets/styles/constants.scss'

const Benefits = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div className="benefits">
      <p className="benefits__title">
        <span dangerouslySetInnerHTML={{ 
          __html: formatHTMLMessage(messages.wink, {
            wink: colors.blue,
          })
        }}/>
      </p>

      <div className="benefits__list">
        <div className="benefits__list-item">
          <img src={time} alt="" />
          <p>{formatMessage(messages.time)}</p>
        </div>
        <div className="benefits__list-item">
          <img src={desk} alt="" />
          <p>{formatMessage(messages.homeOffice)}</p>
        </div>

        <div className="benefits__list-item">
          <img src={meeting} alt="" />
          <p>{formatMessage(messages.training)}</p>
        </div>

        <div className="benefits__list-item">
          <img src={fruit} alt="" />
          <p>{formatMessage(messages.food)}</p>
        </div>

        <div className="benefits__list-item">
          <img src={laptop} alt="" />
          <p>{formatMessage(messages.remoteWeek)}</p>
        </div>

        <div className="benefits__list-item">
          <img src={brain} alt="" />
          <p>{formatMessage(messages.work)}</p>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Benefits)