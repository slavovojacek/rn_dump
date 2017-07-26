import React from 'react'
import { View, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'

import Config from './Login.form.config'

import renderField from '../../FormUtils/field'
import { required } from '../../FormUtils/validation'

let LoginForm = ({pristine, submitting, handleSubmit, onSubmit, style}) => {
  return (
    <View style={style}>
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

LoginForm.displayName = Config.displayName
LoginForm.propTypes = Config.propTypes
LoginForm.defaultProps = Config.defaultProps

export { LoginForm }

export default reduxForm({
  form: 'Login', // destroyOnUnmount: true
})(LoginForm)
