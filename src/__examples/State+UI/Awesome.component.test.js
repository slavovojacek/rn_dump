import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'

import AwesomeComponent from './Awesome.component'

import { mockSetState } from '../../TestUtils/mocking'

const ComponentWithMockSetState = mockSetState(AwesomeComponent)
const getInstance = p => new ComponentWithMockSetState(p)

describe('AwesomeComponent', () => {

  beforeEach(() => {
    this.props = {...AwesomeComponent.defaultProps}
  })

  afterEach(() => {
    this.props = null
  })

  describe('Instance', () => {
    test('correctly sets up initial state', () => {
      let instance = getInstance(this.props)
      expect(instance.state)
        .toEqual({color: this.props.color, isWarningVisible: this.props.isWarningVisible})
    })

    test('changeColor correctly updates color (internal state)', () => {
      let instance = getInstance(this.props)
      instance.changeColor('purple')
      expect(instance.state.color).toEqual('purple')
    })

    test('toggleIsWarningVisible correctly toggles isWarningVisible (internal state)', () => {
      let instance = getInstance(this.props)
      const isWarningVisible_0 = this.props.isWarningVisible
      instance.toggleIsWarningVisible()
      const isWarningVisible_1 = instance.state.isWarningVisible
      expect(isWarningVisible_1).toEqual(!isWarningVisible_0)
      instance.toggleIsWarningVisible()
      const isWarningVisible_2 = instance.state.isWarningVisible
      expect(isWarningVisible_2).toEqual(!isWarningVisible_1)
    })
  })

  describe('DOM Interaction', () => {
    test('changeColor is called with correct arguments when first Text is pressed', () => {
      let instance = getInstance(this.props)
      const changeColor = jest
        .spyOn(instance, 'changeColor')
        .mockImplementation(jest.fn())
      const subject = shallow(instance.render())
        .find(Text)
        .at(0)
      subject.simulate('press')
      expect(changeColor).toHaveBeenCalledWith('blue')
    })

    test('toggleIsWarningVisible is called when second Text is pressed', () => {
      let instance = getInstance(this.props)
      const toggleIsWarningVisible = jest
        .spyOn(instance, 'toggleIsWarningVisible')
        .mockImplementation(jest.fn())
      const subject = shallow(instance.render())
        .find(Text)
        .at(1)
      subject.simulate('press')
      expect(toggleIsWarningVisible).toHaveBeenCalled()
    })
  })

  // describe('Connect', () => {
  // })
})
