import React from 'react'
import { Some } from '@threestup/monads'

import { ApolloContainer, mapPropsToOptions, mapResultsToProps } from './Apollo.container'

jest.mock('./Apollo.container.ui', () => null)

const getInstance = p => new ApolloContainer(p)

describe('ApolloContainer', () => {
  let props

  beforeEach(() => {
    props = {...ApolloContainer.defaultProps}
  })

  // describe('Instance', () => {
  // })

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
