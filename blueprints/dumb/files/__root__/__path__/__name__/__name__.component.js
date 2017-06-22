/*
    USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './<%= pascalEntityName %>.component.styles'

<%= pascalEntityName %>.propTypes = {
}

export const <%= pascalEntityName %> = props => {
  return (
    <View></View>
  )
}

<%= pascalEntityName %>.displayName = '<%= pascalEntityName %>'

export default <%= pascalEntityName %>
