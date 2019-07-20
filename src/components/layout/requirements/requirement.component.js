import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/requirements/requirement.i18n.js'

const Requirements = props => {
  const {intl:{formatMessage}} = props
  return (
    <div id="requeriments" className="requirements">
      <h1 className="requirements__title">{formatMessage(messages.title)}</h1>
      <div>
        <div className="requirements__item">
          <div className="bullet-pistachio" />
          <div className="requirements__description">
            {formatMessage(messages.item1)}
          </div>
        </div>

        <div className="requirements__item">
          <div className="bullet-normal" />
          <div className="requirements__description">
            {formatMessage(messages.item2)}
          </div>
        </div>

        <div className="requirements__item">
          <div className="bullet-blue" />
          <div className="requirements__description">
            {formatMessage(messages.item3)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Requirements)