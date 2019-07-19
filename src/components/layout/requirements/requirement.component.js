import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/requirement/requirement.i18n.js'

const Requirements = props => {
  const {intl:{formatMessage, formatHTMLMessage}} = props
  return (
    <div>
     <span>Requeriments</span>
    </div>
  )
}

export default injectIntl(Requirements)