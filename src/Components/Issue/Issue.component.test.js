import React from 'react'
import { shallow } from 'enzyme'

import Issue from './Issue.component'

import { openUrl } from '../../Utils/misc'
import { issueDefault, props as testDefaultProps } from './defaults'

jest
  .mock('../Reactions/Reactions.component', () => 'Reactions')
  .mock('../../Utils/misc', () => ({
    openUrl: jest.fn()
  }))

describe('Issue', () => {
  beforeEach(() => {
    this.props = {...testDefaultProps}
  })

  afterEach(() => {
    this.props = null
    jest.clearAllMocks()
  })

  describe('DOM Interaction', () => {
    test('', () => {
      const issue = issueDefault({id: 'Some Id', url: 'https://some.url'})
      const newProps = {...this.props, issue}
      const subject = shallow(<Issue {...newProps}/>)
        .find('Text')
        .at(0)
      subject.simulate('press')
      expect(openUrl).toHaveBeenCalledWith(issue.url)
    })
  })
})
