import React from 'react'
import { Text, View } from 'react-native'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.tick()
    }, this.props.interval)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick = () => {
    // Attention !!
    // this.state = <valeur> est interdit
    // On doit utiliser la méthode this.setState()
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <View>
        <Text>Il est : {this.state.date.toLocaleTimeString()}</Text>
      </View>
    )
  }
}

export default Clock
