import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const CartListItem = ({ item }) => {
  return (
    <View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.qty}</Text>
        <Text>{item.price.toFixed(2)} €</Text>
      </View>
    </View>
  )
}

const CartList = ({ carts, header }) => {
  return (
    <SafeAreaView>
      {
          carts.map((c, i) => {
            return (
              <FlatList
                key={i}
                scrollEnabled={false}
                nestedScrollEnabled
                ListHeaderComponent={
                  <Text style={globalStyles.heading}>{categoriesTrad[c]}</Text>
                }
                data={plats}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <CartListItem item={item} />}
              />
            )
          })
        }
    </SafeAreaView>
  )
}

export default CartList
