import { createAction } from 'redux-actions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export const apiFetch = createAction('API_FETCH_PENDING')
export const apiFetchRejected = createAction('API_FETCH_REJECTED')
export const apiFetchFulfilled = createAction('API_FETCH_FULFILLED')

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser (action) {
  try {
    const user = yield call(Promise.resolve({ok: true}), action.payload)
    yield put(apiFetchFulfilled(user))
  } catch (e) {
    yield put(apiFetchRejected(e.message))
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
// function* mySaga () {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
// }

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
function* mySaga () {
  yield takeLatest(apiFetch().type, fetchUser)
}

export default mySaga