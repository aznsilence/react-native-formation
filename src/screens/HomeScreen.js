import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const HomeScreen = () => {
  const { logout } = useAuth()
  const devices = useCameraDevices()
  const device = devices.back

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      if (cameraPermission !== 'authorized') {
        const newCameraPermission = await Camera.requestCameraPermission()
      }

      const microphonePermission = await Camera.getMicrophonePermissionStatus()
      if (microphonePermission !== 'authorized') {
        const newMicrophonePermission = await Camera.requestMicrophonePermission()
      }
    }
    getPermissions()
  }, [])

  return (
    <View>
      <Text>HOME SCREEN</Text>
      {device && <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive
                 />}
      <Button title='Se déconnecter' onPress={logout} />
    </View>
  )
}

export default HomeScreen
