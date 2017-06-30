import React from 'react'
import { View, Text, TextInput } from 'react-native'

const renderField = (props) => {
  const {
    input,
    label,
    type,
    meta: {touched, error, warning}
  } = props

  const containerStyle = {minHeight: 50, marginBottom: 10}
  const inputStyle = {height: 50}

  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput {...input} placeholder={label} type={type} style={inputStyle}/>
      {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
    </View>
  )
}

export default renderField
