import React from 'react'
import { View } from 'react-native'
import Input from './Input'
import Button from '../Button'

const RegisterForm = ({ userData, setUserData, onSubmit }) => {
  return (
    <View>
      <Input
        icon='person'
        onChangeText={(text) => setUserData({ ...userData, username: text })}
        value={userData.username}
      />
      <Input
        icon='mail-sharp'
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        value={userData.email}
      />
      <Input
        icon='lock-closed'
        secureTextEntry
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        value={userData.password}
      />
      <Button title="S'enregistrer" onPress={onSubmit} />
      {/* <View>
        <Text>{JSON.stringify(credentials, null, 2)}</Text>
      </View> */}
    </View>
  )
}

export default RegisterForm
