import { Linking } from 'react-native'

const noop = () => {
  console.info(`Noop called`)
}

const openUrl = url => {
  Linking
    .openURL(url)
    .catch(err => console.error(`An error occurred opening ${url}`, err))
}

export {
  noop, openUrl
}
