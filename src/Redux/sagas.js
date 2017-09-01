import { all } from 'redux-saga/effects'

import LoginSaga from '../Containers/LoginContainer/lib/saga'

export default function* main () {
  yield all([
    LoginSaga()
  ])
}
