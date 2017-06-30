import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

configure(() => {
  require('../src/Containers/Login/Login.story')
}, module)

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'})
AppRegistry.registerComponent('AwesomeProject', () => StorybookUI)
export default StorybookUI
