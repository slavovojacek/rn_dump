import { Linking } from 'react-native'

const openUrl = url => {
  Linking
    .openURL(url)
    .catch(err => console.error(`An error occurred opening ${url}`, err))
}

export {
  openUrl
}
