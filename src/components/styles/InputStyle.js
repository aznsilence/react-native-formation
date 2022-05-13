import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 5,
    borderColor: 'grey',

    padding: 10
  }
})
