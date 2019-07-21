import {combineEpics} from 'redux-observable'
import {authEpics} from 'store/auth/epics'
import {productEpics} from 'store/products/epics'

export const rootEpic = combineEpics(
  authEpics,
  productEpics,
)