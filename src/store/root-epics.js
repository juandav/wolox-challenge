import {combineEpics} from 'redux-observable'
import {authEpics} from 'store/auth/epics'

export const rootEpic = combineEpics(
  authEpics
)