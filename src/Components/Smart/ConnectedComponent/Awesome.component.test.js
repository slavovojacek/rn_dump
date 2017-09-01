import React from 'react'

import AwesomeComponent from './Awesome.component'

const getInstance = p => new AwesomeComponent(p)

describe('AwesomeComponent', () => {

  beforeEach(() => {
    this.props = {...AwesomeComponent.defaultProps, apiFetch: jest.fn()}
  })

  afterEach(() => {
    this.props = null
  })

  describe('Instance', () => {
    test('apiFetch gets called on componentDidMount', () => {
      let instance = getInstance(this.props)
      instance.componentDidMount()
      expect(this.props.apiFetch).toHaveBeenCalledWith('John Doe')
    })
  })
})
