import { createAction } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'

const apiFetch = createAction('API_FETCH_PENDING')
const apiFetchRejected = createAction('API_FETCH_REJECTED')
const apiFetchFulfilled = createAction('API_FETCH_FULFILLED')

function* main (action) {
  const respond = username => new Promise((resolve, reject) => {
    setTimeout(() => resolve({user: {name: username}}), 1500)
  })

  try {
    const user = yield call(respond, action.payload)
    yield put(apiFetchFulfilled(user))
  } catch (e) {
    yield put(apiFetchRejected(e.message))
  }
}

function* def () {
  yield takeLatest(apiFetch().type, main)
}

export { apiFetch, apiFetchRejected, apiFetchFulfilled }
export default def
