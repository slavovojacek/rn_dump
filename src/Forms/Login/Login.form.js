import PropTypes from 'prop-types'
import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import { reduxForm, Field } from 'redux-form'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const renderField = ({
                       input,
                       label,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <View style={{minHeight: 50, marginBottom: 10}}>
    <Text>{label}</Text>
    <TextInput {...input} placeholder={label} type={type} style={{height: 50}}/>
    {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
  </View>
)

const required = value => (value ? undefined : 'Required')

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
