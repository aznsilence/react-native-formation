import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import RestaurantsScreen from '../screens/RestaurantsScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { useAuth } from '../contexts/AuthContext'
import LoadingScreen from '../screens/LoadingScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
// import CounterScreen from '../screens/CounterScreen'

// On instancie la navigation par onglets
const TabNavigator = createBottomTabNavigator()

// On instancie la navigation empilée
const AuthNavigator = createNativeStackNavigator()

// Navigation dans la liste des restaurants
const RestaurantsNavigator = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Group>
        {/* <AuthNavigator.Screen name='Loading' component={LoadingScreen} /> */}
        <AuthNavigator.Screen name='Login' component={LoginScreen} />
        <AuthNavigator.Screen name='Register' component={RegisterScreen} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  )
}

const RestaurantsNavigation = () => {
  return (
    <RestaurantsNavigator.Navigator
      initialRouteName='RestaurantsList'
    >
      <RestaurantsNavigator.Group>
        <RestaurantsNavigator.Screen
          name='RestaurantsList'
          component={RestaurantsScreen}
          options={{
            title: 'Restaurants'
          }}
        />
        <RestaurantsNavigator.Screen
          name='RestaurantDetails'
          component={RestaurantDetailsScreen}
          options={{
            title: 'Chargement...'
          }}
        />
      </RestaurantsNavigator.Group>
    </RestaurantsNavigator.Navigator>
  )
}

// On crée notre navigateur avec nos écrans
const MainNavigation = () => {
  return (
    <TabNavigator.Navigator
      // Force l'affichage sur une page en particulier
      initialRouteName='Restaurants'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Restaurants':
              iconName = focused ? 'restaurant' : 'restaurant-outline'
              break
            default:
              break
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey'
      })}
    >
      <TabNavigator.Group>
        <TabNavigator.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <TabNavigator.Screen
          name='Restaurants'
          component={RestaurantsNavigation}
          options={{
            headerShown: false
          }}
        />
      </TabNavigator.Group>
    </TabNavigator.Navigator>
  )
}

const Navigator = () => {
  const { state: { loading, user, token } } = useAuth()

  if (loading) {
    return <LoadingScreen />
  } else {
    return (user && token) ? <MainNavigation /> : <AuthNavigation />
  }

// const [isLoggedIn, setIsLoggedIn] = useState(false)
// if (isLoggedIn) {
//   return <MainNavigation />
// } else {
//   return <AuthNavigation />
// }
}

// On exporte notre navigateur
export default Navigator
