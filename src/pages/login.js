import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { injectIntl } from 'react-intl'
import messages from 'components/login/login.i18n.js'
import "components/login/login.styles.scss"

class LoginPage extends Component {
  render() {
    const { handleSubmit, intl:{formatMessage} } = this.props
    return (
      <div className="login-wrapper">
        <h3 className="login-wrapper__title">{formatMessage(messages.title)}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">{formatMessage(messages.name)}</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastname">{formatMessage(messages.lastname)}</label>
            <Field name="lastname" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">{formatMessage(messages.email)}</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'contact'
})(injectIntl(LoginPage))