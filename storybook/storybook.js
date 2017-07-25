import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

configure(() => {
  require('../src/__examples/LoginContainer/Login.container.story')
  require('../src/__examples/ApolloContainer/Apollo.container.story')
}, module)

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'})
AppRegistry.registerComponent('AwesomeProject', () => StorybookUI)
export default StorybookUI
