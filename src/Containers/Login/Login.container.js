/*
    USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'

import styles from './Login.container.styles'

export class LoginContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}

LoginContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
