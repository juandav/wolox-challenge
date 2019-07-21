import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { injectIntl } from 'react-intl'
import messages from 'components/login/login.i18n.js'
import "components/login/login.styles.scss"

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <>
    <label>{label}</label>
    <input 
      {...input} 
      placeholder={placeholder} 
      type={type}
      className={type === "checkbox"? "": "login-wrapper__input"} 
    />
    {touched && ((error && <span className="danger">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
  </>
)

const renderSelect = ({ input, label, meta: { touched, error, warning }, children }) => (
  <>
    <label>{label}</label>
    <select {...input} className="login-wrapper__input">
      {children}
    </select>
    {touched && (error || warning) && <span className="danger">{error}</span>}
  </>
)

const renderCheckbox = ({ input, label, placeholder, type, meta: { touched, error, warning }, children }) => (
  <>
    <input 
      {...input} 
      placeholder={placeholder} 
      type={type}
      className={type === "checkbox"? "": "login-wrapper__input"} 
    />
    <span className="login-wrapper__terms">
      { children }
    </span>
    {touched && ((error && <span className="danger">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
  </>
)

let LoginForm = props => {
  const { handleSubmit, intl:{formatMessage} } = props
  const createAgeOptions = () => {
    let ageOptions = []
    for (let i = 10; i <= 100; i++) {
      ageOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
  
    return ageOptions
  }
  return (
    <div className="login-wrapper">
      <h3 className="login-wrapper__title">{formatMessage(messages.title)}</h3>
      <form onSubmit={handleSubmit}>
        <div className="login-wrapper__field">
          <label htmlFor="name" className="login-wrapper__label">{formatMessage(messages.name)}</label>
          <Field 
            name="name" 
            component={renderField}
            type="text"
            placeholder="your name"
            validate={[ required ]}
          />
        </div>
        <div className="login-wrapper__field">
          <label htmlFor="lastname" className="login-wrapper__label">{formatMessage(messages.lastname)}</label>
          <Field 
            name="lastname" 
            component={renderField}
            type="text"
            placeholder="your lastname"
            validate={[ required ]}
          />
        </div>
        <div className="login-wrapper__field">
          <label htmlFor="email" className="login-wrapper__label">{formatMessage(messages.email)}</label>
          <Field 
            name="email" 
            component={renderField} 
            type="email"
            placeholder="your e-mail"
            validate={[ required ]}
          />
        </div>

        <div className="login-wrapper__field">
          <label className="login-wrapper__label">{formatMessage(messages.age)}</label>
          
            <Field 
              name="age" 
              component={renderSelect}
              validate={[ required ]}
            >
              <option></option>
              {createAgeOptions()}  
            </Field>
          
        </div>

        <div className="login-wrapper__field">
          <Field 
            name="terms" 
            component={renderCheckbox}  
            type="checkbox"
            validate={[ required ]}
          >
            { formatMessage(messages.terms) }
          </Field>
        </div>
        <button type="submit" className="login-wrapper__submit">{formatMessage(messages.submit)}</button>
      </form>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(injectIntl(LoginForm))

export default LoginForm