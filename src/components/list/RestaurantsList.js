import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/ListStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantListItem = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { id: item._id })}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: `${IMAGE_URL}${item.photos[0].url}` }} />
        <Text>{item.title}</Text>
        <Text>{item.description.substring(0, 80) + '...'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const RestaurantsList = ({ restaurants }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={restaurants}
        // Grâce au virtual DOM et keyExtractor il pourra rafraichir seulement l'élément qui a changé
        keyExtractor={restaurant => restaurant._id}
        renderItem={({ item }) => <RestaurantListItem item={item} />}
      />
    </SafeAreaView>
  )
}

export default RestaurantsList
