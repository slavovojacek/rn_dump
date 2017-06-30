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

  // describe('Instance', () => {
  // })

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
