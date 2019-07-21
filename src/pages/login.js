import React, {Component} from 'react'
import LoginForm from 'components/login/login.container'

class LoginPage extends Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return (
      <LoginForm onSubmit={this.submit} />
    )
  }
}

export default LoginPage