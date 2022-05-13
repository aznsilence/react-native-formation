import React from 'react'
import { View, ScrollView, Text, Image, SafeAreaView, FlatList } from 'react-native'
import globalStyles from '../../theme/Styles'
import styles from '../styles/ListStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const categoriesTrad = {
  starter: 'Entrées',
  dish: 'Plats',
  dessert: 'Dessert',
  drink: 'Boissons'
}

const PlatListItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: `${IMAGE_URL}${item.photos[0]?.url}` }}
      />
      <View>
        <Text style={styles.title}>{item.nom}</Text>
        <Text>{item.description}</Text>
        <Text>{item.price.toFixed(2)} €</Text>
      </View>
    </View>
  )
}

const PlatsList = ({ plats, header }) => {
  const categories = [...new Set(plats.map(p => p.category))]

  return (
    <SafeAreaView>
      {
          categories.map((c, i) => {
            return (
              <FlatList
                key={i}
                scrollEnabled={false}
                nestedScrollEnabled
                ListHeaderComponent={
                  <Text style={globalStyles.heading}>{categoriesTrad[c]}</Text>
                }
                data={plats.filter(p => p.category === c)}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <PlatListItem item={item} />}
              />
            )
          })
        }
    </SafeAreaView>
  )
}

export default PlatsList
