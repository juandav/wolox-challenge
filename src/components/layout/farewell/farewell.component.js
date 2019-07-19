import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/farewell/farewell.i18n.js'

const Farewell = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div>
      <span>farewell</span>
    </div>
  )
}

export default injectIntl(Farewell)