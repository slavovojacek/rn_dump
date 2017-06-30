import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'

import reducers, { formReducer } from './Redux/reducers'
import sagas from './Redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

const formOnlyStore = createStore(formReducer)
const getMockStore = state => configureStore()(state)

export { formOnlyStore, getMockStore }
export default store
