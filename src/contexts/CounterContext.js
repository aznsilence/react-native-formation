import React from 'react'

// Création du contexte
const CounterContext = React.createContext()

// On définit nos types d'actions disponible dans le contexte
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

// On prépare l'état initial
const initialState = {
  counter: 0
}

/**
 * Reducer du contexte : On applique la logique associée à l'action
 * @param Object state : Etat précédent
 * @param Object action : action envoyée dans le contexte par la fonction dispatch
 * @returns state : Etat mis à jour
 */
const CounterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

/**
 *
 * @param Object {children} : Enfants du contexte
 * @returns CounterProvider : Composant permettant l'accès à l'état global depuis les composants enfants
 */
const CounterProvider = ({ children }) => {
  // Similaire au useState() : On retourne l'état global et la méthode permettant de le mettre à jour
  const [state, dispatch] = React.useReducer(CounterReducer, initialState)
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

const useCounter = () => {
  // => contexte = { state, dispatch } provenant du provider
  const context = React.useContext(CounterContext)
  if (!context) throw new Error('useCounter must be used inside a CounterProvider')
  return context
}

export {
  useCounter,
  CounterProvider,
  actionTypes
}
