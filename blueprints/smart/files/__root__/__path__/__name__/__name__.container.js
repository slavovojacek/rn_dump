/*
    USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'

import styles from './<%= pascalEntityName %>.container.styles'

<%= pascalEntityName %>Container.propTypes = {
}

export class <%= pascalEntityName %>Container extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View></View>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>Container)
