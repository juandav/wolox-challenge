import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/benefits/benefits.i18n.js'

const Benefits = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div>
      <span>Benefits</span>
    </div>
  )
}

export default injectIntl(Benefits)