import typeToReducer from 'type-to-reducer'
import { Some, None } from 'tsp-monads'

export const initialState = {
  data: None,
  isPending: false,
  error: None
}

const reducer = typeToReducer({
  [ 'API_FETCH' ]: {
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
