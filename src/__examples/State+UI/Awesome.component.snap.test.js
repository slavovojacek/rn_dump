import React from 'react'
import renderer from 'react-test-renderer'

import AwesomeComponent from './Awesome.component'

let getInstance = p => new AwesomeComponent(p)

describe('AwesomeComponent Snapshots', () => {
  it('renders correctly', () => {
    let instance = getInstance(AwesomeComponent.defaultProps)

    const tree = renderer
      .create(instance.render())
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when color is red', () => {
    const props = {...AwesomeComponent.defaultProps, color: 'red'}
    let instance = getInstance(props)

    const tree = renderer
      .create(instance.render())
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when isWarningVisible is true', () => {
    const props = {...AwesomeComponent.defaultProps, isWarningVisible: true}
    let instance = getInstance(props)

    const tree = renderer
      .create(instance.render())
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
