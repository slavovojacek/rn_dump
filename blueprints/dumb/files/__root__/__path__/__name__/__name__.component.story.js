import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf, action } from '../../../.storybook/storybook'

import <%= pascalEntityName %>Component from './<%= pascalEntityName %>.component'

export default storiesOf('<%= pascalEntityName %>', module)
  .add('default', () => (
    <View style={{margin: 20}}>
      <Text>Please improve this story</Text>
      <Text>story file path (inside the project): /app/Components/<%= pascalEntityName %>/<%= pascalEntityName %>.component.story</Text>
      <<%= pascalEntityName %>Component />
    </View>
  ))
