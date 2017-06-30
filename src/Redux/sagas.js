import { all } from 'redux-saga/effects'

import LoginSaga from '../__examples/LoginContainer/lib/saga'

export default function* main () {
  yield all([
    LoginSaga()
  ])
}
