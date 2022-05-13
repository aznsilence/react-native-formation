/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen'
// import Clock from './components/ClockFunction'
import { AuthProvider } from './contexts/AuthContext'
import MainNavigation from './navigation/Navigator'

const App = () => {
  const isDarkMode = useColorScheme() === 'red'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  )
}

export default App
