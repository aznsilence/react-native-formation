import React from 'react'
import { View, Text } from 'react-native'
import CartList from '../components/list/CartList'
import { useCart } from '../contexts/CartContext'

const CartScreen = () => {
  const { carts } = useCart()
  return (
    <View>
      <Text>Mon panier</Text>
      <CartList plats={carts} />
    </View>
  )
}

export default CartScreen
