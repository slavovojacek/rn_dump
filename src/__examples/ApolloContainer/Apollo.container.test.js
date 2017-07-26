import React from 'react'
import { Linking } from 'react-native'

import { ApolloContainer, mapPropsToOptions, mapResultsToProps } from './Apollo.container'

jest
  .mock('Linking', () => ({
    openURL: () => ({ then: jest.fn(), catch: jest.fn() })
  }))
  .mock('./Apollo.container.ui', () => null)

const getInstance = p => new ApolloContainer(p)

describe('ApolloContainer', () => {

  beforeEach(() => {
    this.props = {...ApolloContainer.defaultProps}
  })

  afterEach(() => {
    this.props = null
  })

  describe('Instance', () => {
    describe('openIssue', () => {
      test('calls openURL on Linking with the correct argument', () => {
        const instance = getInstance(this.props)
        const url = 'http://some.url'
        const openURL = jest
          .spyOn(Linking, 'openURL')
        instance.openIssue(url)
        expect(openURL).toHaveBeenCalledWith(url)
      })
    })
  })

  // describe('DOM Interaction', () => {
  // })

  describe('Apollo', () => {
    describe('mapOptionsToProps', () => {
      test('returns correct mapping', () => {
        const subject = mapPropsToOptions({})
        expect(subject.variables).toEqual({
          repoOwner: 'Threestup', repoName: 'monads', limit: 20
        })
        expect(subject.pollInterval).toBeUndefined()
      })
    })
  })
})
