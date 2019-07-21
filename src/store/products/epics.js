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
import { of, concat } from 'rxjs'
import * as types from 'store/products/action-types'
import * as actions from 'store/products/actions'
import {API_URL} from 'config/constants'

const getProductOptions = () => ({
  url: `${API_URL}/products`,
  method: "GET"
})

const fetchProductsEpic = action$ => action$.pipe(
  ofType(types.FETCH_PRODUCTS),
  switchMap(_action => {
    const req = request(getProductOptions())
    .pipe(
      mergeMap(
        response => concat(
          of(actions.fetchProductsSuccess(response)),
          of(actions.loadingFinished())
        )
      ),
      catchError(
        error => concat(
          of(actions.loadingFinished()),
          of(actions.fetchProductsError(error))
        )
      )
    )
    return concat(
      of(actions.loadingStart()), 
      req
    )
  })
)

export const productEpics = combineEpics(
  fetchProductsEpic,
)