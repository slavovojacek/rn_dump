import React from 'react'

import LoginForm from './Login.form'

import { assertSnapshots } from '../../TestUtils/snapshots'
import { formOnlyStore } from '../../state'

describe('LoginForm Snapshots', () => {
  const config = [
    {
      props: LoginForm.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {...LoginForm.defaultProps, pristine: true, submitting: false},
      desc: 'renders correctly when pristine and not submitting'
    },
    {
      props: {...LoginForm.defaultProps, pristine: false, submitting: true},
      desc: 'renders correctly when submitting and not pristine'
    },
    {
      props: {...LoginForm.defaultProps, pristine: false, submitting: false},
      desc: 'renders correctly when not pristine and not submitting'
    }
  ]

  config
    .forEach(conf => assertSnapshots(LoginForm, conf.props, conf.desc, formOnlyStore))
})
