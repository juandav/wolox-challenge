import { createAction } from 'redux-actions'
import * as types from 'store/auth/action-types'

export const login = createAction(types.LOGIN)
export const setCurrentApiToken = createAction(types.SET_CURRENT_API_TOKEN, ({response}) => response)
export const unsetCurrentApiToken = createAction(types.UNSET_CURRENT_API_TOKEN)
export const loginError = createAction(types.SET_LOGIN_ERROR)