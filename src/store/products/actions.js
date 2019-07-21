import { createAction } from 'redux-actions'
import * as types from 'store/products/action-types'

export const fetchProducts = createAction(types.FETCH_PRODUCTS)
export const fetchProductsSuccess = createAction(types.FETCH_PRODUCTS_SUCCESS, ({response}) => response)
export const fetchProductsError = createAction(types.FETCH_PRODUCTS_ERROR)
export const loadingStart = createAction(types.LOADING_START)
export const loadingFinished = createAction(types.LOADING_FINISH)