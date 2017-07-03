import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'

import AwesomeComponent from './Awesome.component.mock'

const getInstance = p => new AwesomeComponent(p)

describe('AwesomeComponent', () => {
  let props

  beforeEach(() => {
    props = {...AwesomeComponent.defaultProps}
  })

  // NOTE: It is questionable whether one needs to test the internals as shown below
  describe('Instance', () => {
    test('correctly sets up initial state', () => {
      let instance = getInstance(props)
      expect(instance.state)
        .toEqual({color: props.color, isWarningVisible: props.isWarningVisible})
    })

    test('changeColor correctly updates color (internal state)', () => {
      let instance = getInstance(props)
      instance.changeColor('purple')
      expect(instance.state.color).toEqual('purple')
    })

    test('toggleIsWarningVisible correctly toggles isWarningVisible (internal state)', () => {
      let instance = getInstance(props)
      const isWarningVisible_0 = props.isWarningVisible
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
      let instance = getInstance(props)
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
      let instance = getInstance(props)
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
