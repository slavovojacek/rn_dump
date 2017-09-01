import React from 'react'

import { props as testDefaultProps } from './defaults'
import AwesomeComponent from './ConnectedComponent.main.component'

const getInstance = p => new AwesomeComponent(p)

describe('AwesomeComponent', () => {

  beforeEach(() => {
    this.props = {...testDefaultProps, apiFetch: jest.fn()}
  })

  afterEach(() => {
    this.props = null
  })

  describe('Instance', () => {
    test('componentDidMount throws if apiFetch is not of type Function', () => {
      const newProps = {...this.props, apiFetch: ''}
      let subject = getInstance(newProps)
      expect(() => subject.componentDidMount()).toThrow(TypeError)
    })

    test('apiFetch gets called on componentDidMount', () => {
      let subject = getInstance(this.props)
      subject.componentDidMount()
      expect(this.props.apiFetch).toHaveBeenCalledWith('John Doe')
    })
  })

})
