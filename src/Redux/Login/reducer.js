import typeToReducer from 'type-to-reducer'
import { Some, None } from 'tsp-monads'

import { apiFetch } from './saga'

const initialState = {
  data: None,
  isPending: false,
  error: None
}

const reducer = typeToReducer({
  [ apiFetch().type ]: {
    PENDING: () => ({
      ...initialState,
      isPending: true
    }),
    REJECTED: (state, action) => ({
      ...initialState,
      error: Some(action.payload),
    }),
    FULFILLED: (state, action) => ({
      ...initialState,
      data: Some(action.payload)
    })
  }
}, initialState)

export default reducer
