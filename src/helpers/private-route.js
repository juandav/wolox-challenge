import React from "react"
import { 
  Redirect, 
  Route 
} from "react-router-dom"
import { connect } from "react-redux"

function PrivateRoute({
  hasToken, 
  component: Component, 
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={ props =>
        hasToken? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", from: props.location }} />
        )
      }
    />
  )
}

export default connect(
  ({auth:{hasToken}}) => ({ hasToken })
)(PrivateRoute)