import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import meta from 'store/meta/reducer'
import auth from 'store/auth/reducer'

export const rootReducer = combineReducers({
  form: formReducer,
  meta,
  auth
})