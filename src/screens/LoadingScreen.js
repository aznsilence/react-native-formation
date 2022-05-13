import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import Images from '../images/Images'
import styles from './styles/LoadingScreenStyle'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.image} />
      <ActivityIndicator size='large' />
    </View>
  )
}

export default LoadingScreen
