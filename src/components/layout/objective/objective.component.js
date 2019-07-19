import React from 'react'
import { injectIntl } from 'react-intl'
import twitterIcon from "assets/images/twitter.svg"
import messages from 'components/layout/objective/objective.i18n.js'
import colors from 'assets/styles/constants.scss'

const Objective = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div className="objective">
      <div className="objective__followers">
        <div className="objective__count-followers">
          <span className="text-pistachio">350 +</span>
          <span className="text-blue"> Woloxers</span>
        </div>

        <div className="objective__twitter">
          <img
            src={twitterIcon}
            alt="Twitter's Icon"
            className="objective__twitter-icon"
          />
          <span className="objective__twitter-account">@Wolox</span>
        </div>

        <a href="https://twitter.com/wolox" className="objective__twitter-btn">
          {formatMessage(messages.btn)}
        </a>
      </div>
      <div className="objective__info">
        <span dangerouslySetInnerHTML={{ 
          __html: formatHTMLMessage(messages.motto, {
            convertColor: colors.blue,
            ideaColor: colors.pistachio
          }) 
        }}/>
      </div>
    </div>
  )
}

export default injectIntl(Objective)