import React from 'react'
import { Provider } from 'react-redux'

import { formStore } from '../../src/state'

export default getStory => (
  <Provider store={formStore}>
    {getStory()}
  </Provider>
)
