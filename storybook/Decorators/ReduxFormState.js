import React from 'react'
import { Provider } from 'react-redux'

import { formOnlyStore } from '../../src/state'

export default getStory => (
  <Provider store={formOnlyStore}>
    {getStory()}
  </Provider>
)
