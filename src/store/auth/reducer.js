import { handleActions } from 'redux-actions'
import * as types from 'store/auth/action-types'

const INITIAL_STATE = {
  token: null,
  hasToken: false,
  error: null
}

export default handleActions({
  [types.SET_CURRENT_API_TOKEN]: setToken,
  [types.SET_LOGIN_ERROR]: setError
}, INITIAL_STATE)

function setToken(state = INITIAL_STATE, {payload}) {
  return {
    ...state,
    token: payload,
    hasToken: payload !== null? true: false
  }
}

function setError(state = INITIAL_STATE, {payload:{error}}) {
  return {
    ...state,
    error
  }
}