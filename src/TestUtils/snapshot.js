import React from 'react'
import renderer from 'react-test-renderer'

import { mockSetState } from './mocking'

const assertSnapshot = (C, config) => {
  const {props, state, desc} = config

  let Component

  try {
    const CWithMockState = mockSetState(C)
    Component = new CWithMockState(props)

    if (state) {
      Component.setState(state)
    }
  } catch (e) {
    Component = C(props)
  }

  const RenderedComponent = Component.render ? Component.render() : Component

  test(desc, () => {
    const tree = renderer
      .create(RenderedComponent)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
}

const assertSnapshots = (Component, configs) => {
  configs.forEach(config => assertSnapshot(Component, config))
}

export { assertSnapshots }
