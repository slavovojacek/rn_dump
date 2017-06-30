import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import { LoginContainer } from './Login.container'
import { initialState } from '../../Redux/Login/reducer'
import { getMockStore } from '../../state'

describe('Login Container UI', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={getMockStore(initialState)}>
          <LoginContainer {...LoginContainer.defaultProps} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})