import React from 'react'
import renderer from 'react-test-renderer'

const assertSnapshots = (Component, props, desc) => {
  test(desc, () => {
    const tree = renderer
      .create(<Component {...props}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
}

export { assertSnapshots }
