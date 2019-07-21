import { handleActions } from 'redux-actions'
import * as types from 'store/products/action-types'

const INITIAL_STATE = {
  products: null,
  loading: false,
  error: null,
  searchTerm: ''
}

export default handleActions({
  [types.FETCH_PRODUCTS_SUCCESS]: setProducts,
  [types.FETCH_PRODUCTS_ERROR]: setError,
  [types.LOADING_START]: startLoading,
  [types.LOADING_FINISH]: finishLoading,
  [types.CHANGE_SEARCH_TERM]: changeSearchTerm
}, INITIAL_STATE)


function setProducts(state = INITIAL_STATE, {payload}) {
  return {
    ...state,
    products: payload
  }
}

function setError(state = INITIAL_STATE, {payload:{error}}) {
  return {
    ...state,
    error
  }
}

function startLoading(state) {
  return {
    ...state,
    loading: true,
  }
}
function finishLoading(state) {
  return {
    ...state,
    loading: false
  }
}

function changeSearchTerm(state, {payload}) {
  return {
    ...state,
    searchTerm: payload
  }
}