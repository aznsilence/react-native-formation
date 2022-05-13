import React, { createContext, useReducer, useContext, useEffect } from 'react'

const CartContext = createContext()

const actionTypes = {
  ADD_CART: 'ADD_CART',
  REMOVE_CART: 'REMOVE_CART',
  RESET_CART: 'RESET_CART'
}

const initialState = {
  cart: [{ id: 1, name: 'hamburger', price: 10, qty: 0 }, { id: 2, name: 'bigmac', price: 15, qty: 0 }],
  total: 0
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      console.log('ajoute au panier')
      return {
        ...initialState
      }
    case actionTypes.REMOVE_CART:
      console.log('retire du panier')
      return {
        ...initialState
      }
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside a CartProvider')
  return context
}

export {
  useCart,
  CartProvider,
  actionTypes
}
