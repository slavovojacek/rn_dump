import { AppRegistry } from 'react-native'

import StorybookUI from './storybook'
import App from './src/App'

AppRegistry.registerComponent('AwesomeProject', () => App)

export default ( __DEV__ ? StorybookUI : App )
