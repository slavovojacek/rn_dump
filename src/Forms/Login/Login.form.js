import PropTypes from 'prop-types'
import React from 'react'
import { View, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'

import renderField from '../../FormUtils/field'
import { required } from '../../FormUtils/validation'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

let LoginForm = ({pristine, submitting, handleSubmit, onSubmit, style}) => {
  return (
    <View {...style}>
      <Field name="email"
             component={renderField}
             type="email"
             label="Email"
             validate={[required]}/>
      <Field name="password"
             component={renderField}
             type="password"
             label="Password"
             validate={[required]}/>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} disabled={pristine || submitting}/>
    </View>
  )
}

LoginForm.propTypes = propTypes
LoginForm = reduxForm({
  form: 'Login',
  // destroyOnUnmount: true
})(LoginForm)

export default LoginForm
