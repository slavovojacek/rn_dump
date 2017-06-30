import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

const assertSnapshots = (Component, props, desc, store = null) => {
  let getComponent = p => null

  if (store !== null) {
    getComponent = p => (
      <Provider store={store}>
        <Component {...p}/>
      </Provider>
    )
  } else {
    getComponent = p => <Component {...p}/>
  }

  test(desc, () => {
    const tree = renderer
      .create(getComponent(props))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
}

export { assertSnapshots }
