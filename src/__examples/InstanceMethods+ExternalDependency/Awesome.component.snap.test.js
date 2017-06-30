import React from 'react'
import renderer from 'react-test-renderer'

import AwesomeComponent from './Awesome.component'

describe('AwesomeComponent Snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AwesomeComponent {...AwesomeComponent.defaultProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
