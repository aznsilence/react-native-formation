import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, Image, LogBox } from 'react-native'
import PlatsList from '../components/list/PlatsList.js'
import { getRestaurant } from '../services/Api'
import globalStyles from '../theme/Styles'
import LoadingScreen from './LoadingScreen'
import styles from './styles/RestaurantDetailsScreenStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantDetailScreen = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = useState()
  const { id } = route.params
  console.log(`restaurant : ${id}`)
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    const getData = async () => {
      const result = await getRestaurant(id)
      setRestaurant(result)
      navigation.setOptions({ title: result.title })
    }
    getData()
  }, [])

  if (restaurant) {
    return (
      <ScrollView>
        <Text style={globalStyles.heading}>{restaurant.title}</Text>
        <Image style={styles.image} source={{ uri: `${IMAGE_URL}${restaurant.photos[0].url}` }} />
        <Text>{restaurant.description}</Text>
        <View style={styles.address}>
          <Text>{`${restaurant.adresse?.adresse}, ${restaurant.adresse?.code_postal}, ${restaurant.adresse?.ville}`}</Text>
        </View>
        <PlatsList
          plats={restaurant.plats}
        />
      </ScrollView>
    )
  } else {
    return <LoadingScreen />
  }
}

export default RestaurantDetailScreen
