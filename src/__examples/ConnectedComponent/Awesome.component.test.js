import React from 'react'
import { Some } from '@threestup/monads'

import { AwesomeComponent, mapStateToProps, mapDispatchToProps } from './Awesome.component'
import { initialState } from './lib/reducer'
import { apiFetch } from './lib/saga'

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

  // describe('DOM Interaction', () => {
  // })

  describe('Connect', () => {
    const getState = (state = initialState) => ({AwesomeState: state})

    describe('mapStateToProps', () => {
      test('correctly maps properties of initialState', () => {
        const globalState = getState()
        const state = globalState.AwesomeState
        const subject = mapStateToProps(globalState)
        expect(subject.username.is_none()).toEqual(state.data.is_none())
        expect(subject.error).toEqual(state.error)
        expect(subject.showLoading).toEqual(state.isPending)
      })

      test('correctly maps data to username if present in global state', () => {
        const data = Some({user: {name: 'John Doe'}})
        const globalState = getState({...initialState, data})
        const state = globalState.AwesomeState
        const subject = mapStateToProps(globalState)
        expect(subject.username.is_some()).toEqual(true)
        expect(subject.username.unwrap()).toEqual(data.map(_ => _.user.name).unwrap())
        expect(subject.error).toEqual(state.error)
        expect(subject.showLoading).toEqual(state.isPending)
      })
    })

    describe('mapDispatchToProps', () => {
      test('correctly maps the apiFetch method', () => {
        const subject = mapDispatchToProps
        expect(subject.apiFetch).toEqual(apiFetch)
      })
    })
  })
})
