import React from 'react'
import { Provider } from 'react-redux'

import { getMockStore } from '../../src/state'

export default state => getStory => (
  <Provider store={getMockStore(state)}>
    {getStory()}
  </Provider>
)
