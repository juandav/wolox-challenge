import { 
  combineEpics, 
  ofType
} from 'redux-observable'
import {
  mergeMap,
  catchError,
  switchMap
} from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'
import { of } from 'rxjs'
import * as types from 'store/auth/action-types'
import * as actions from 'store/auth/actions'
import {API_URL} from 'config/constants'

const getLoginOptions = body => ({
  url: `${API_URL}/sign_in`,
  body,
  method: "POST"
})

const loginEpic = action$ => action$.pipe(
  ofType(types.LOGIN),
  switchMap(action => {
    const { payload } = action
    return request(getLoginOptions(payload))
    .pipe(
      mergeMap(
        response => of(
          actions.setCurrentApiToken(response)
        )
      ),
      catchError(
        error => of(
          actions.loginError(error)
        )
      )
    )
  })
)

export const authEpics = combineEpics(
  loginEpic,
)