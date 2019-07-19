import React from 'react'
import { injectIntl } from 'react-intl'
import messages from 'components/layout/objective/objective.i18n.js'

const Tecnology = props => {
  const {intl:{formatMessage}} = props
  return (
    <div>
     <sapn> here objectives components</sapn>
    </div>
  )
}

export default injectIntl(Tecnology)