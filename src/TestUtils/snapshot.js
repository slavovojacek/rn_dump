import React from 'react'
import renderer from 'react-test-renderer'

import { mockSetState } from './mocking'

const assertSnapshot = (C, config) => {
  const {props, state, desc, throws} = config

  if (throws) {
    test(desc, () => {
      expect(() => {
        if (C.prototype.render) {
          new C(props)
        } else {
          C(props)
        }
      }).toThrow(throws)
    })
  } else {
    let Component
    let RenderedComponent

    if (C.prototype.render) {
      const CWithMockState = mockSetState(C)
      Component = new CWithMockState(props)

      if (state) {
        Component.setState(state)
      }

      RenderedComponent = Component.render()
    } else {
      Component = C(props)
      RenderedComponent = Component
    }

    test(desc, () => {
      const tree = renderer
        .create(RenderedComponent)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
}

const assertSnapshots = (Component, configs) => {
  configs.forEach(config => assertSnapshot(Component, config))
  // if (Component.gql) assertGql(Component)
}

export { assertSnapshots }
