import React, {Component} from 'react'
import {connect} from "react-redux"
import LoginForm from 'components/login/login.container'
import {login} from 'store/auth/actions'
import {Redirect} from 'react-router'

class LoginPage extends Component {
  submit = values => {
    this.props.login(values)
  }

  render() {
    return (
      this.props.hasToken ? (
        <Redirect to="/products"/>
      ) : (
        <LoginForm error={this.props.error} onSubmit={this.submit} />
      )
    )
  }
}

export default connect(
   ({auth:{hasToken, error}}) => ({ hasToken, error }), 
  ({login})
)(LoginPage)