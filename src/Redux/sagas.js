import { all } from 'redux-saga/effects'

import LoginSaga from './Login/saga'

export default function* rootSaga () {
  yield all([
    LoginSaga()
  ])
}
