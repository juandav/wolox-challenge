import { handleActions } from 'redux-actions'
import * as types from './action-types'

const INITIAL_STATE = {
  locale: 'en'
}

export default handleActions({
  [types.SET_LANGUAGE]: changeLanguage,
}, INITIAL_STATE)

function changeLanguage(state = INITIAL_STATE, {payload:{locale}}) {
  return {
    ...state,
    locale,
  }
}