import React from 'react'
import { shallow } from 'enzyme'

import Issue from './Issue.component'

import { openUrl } from '../../../../../Utils/misc'
import { issueDef } from '../../../defs/index'

const testDefaultProps = {
  issue: issueDef(),
}

jest
  .mock('../Reactions/Reactions.component', () => 'Reactions')
  .mock('../../../../../Utils/misc', () => ({
    openUrl: jest.fn()
  }))

describe('Issue Component', () => {
  beforeEach(() => {
    this.props = {
      ...testDefaultProps,
      // Add override properties, usually mock functions
    }
  })

  afterEach(() => {
    this.props = null
    jest.clearAllMocks()
  })

  describe('DOM Interaction', () => {
    test('', () => {
      const issue = issueDef({id: 'Some Id', url: 'https://some.url'})
      const newProps = {...this.props, issue }
      const subject = shallow(<Issue {...newProps}/>)
        .find('Text')
        .at(0)
      subject.simulate('press')
      expect(openUrl).toHaveBeenCalledWith(issue.url)
    })
  })
})
