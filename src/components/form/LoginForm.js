import React from 'react'
import { View } from 'react-native'
import Input from './Input'
import Button from '../Button'

const LoginForm = ({ credentials, setCredentials, onSubmit }) => {
  return (
    <View>
      <Input
        icon='person'
        onChangeText={(text) => setCredentials({ ...credentials, identifier: text })}
        value={credentials.identifier}
      />
      <Input
        icon='lock-closed'
        secureTextEntry
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        value={credentials.password}
      />
      <Button title='Se connecter' onPress={onSubmit} />
      {/* <View>
        <Text>{JSON.stringify(credentials, null, 2)}</Text>
      </View> */}
    </View>
  )
}

export default LoginForm
