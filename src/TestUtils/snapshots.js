import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

const assertSnapshots = (Container, configs, store = null) => {
  configs.forEach(config => assertSnapshot(Container, config.props, config.desc, store))
  if (Container.query !== null) assertQuery(Container)
}

const assertSnapshot = (Component, props, desc, store = null) => {
  let getComponent = p => null

  // In theory, if things are done correctly, this (wrapping
  // a component in Provider with a store) should never be needed.
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

const assertQuery = (Component) => {
  test('matches query', () => {
    expect(Component.query).toMatchSnapshot()
  })
}

export { assertSnapshots }
