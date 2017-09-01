import React from 'react'
import { connect } from 'react-redux'

import Component from './Awesome.component'
import { apiFetch } from './lib/saga'

const mapStateToProps = ({AwesomeState}) => ({
  username: AwesomeState.data
    .map(_ => _.user.name),
  error: AwesomeState.error,
  showLoading: AwesomeState.isPending
})

const mapDispatchToProps = {
  apiFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
