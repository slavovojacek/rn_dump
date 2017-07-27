import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import { assertGql } from './gql'

import { isNull } from '../Utils/type'

const assertSnapshot = (Component, props, desc, store = null) => {
  let getComponent = p => null

  // In theory, if things are done correctly, this (wrapping
  // a component in Provider with a store) should never be needed.
  if (!isNull(store)) {
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

const assertSnapshots = (Component, configs, store = null) => {
  configs.forEach(config => assertSnapshot(Component, config.props, config.desc, store))
  if (!isNull(Component.gql)) assertGql(Component)
}

export { assertSnapshots }
