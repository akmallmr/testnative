import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"

import { View } from "react-native-animatable"

import styles from "./styles"

export default class ListItem extends Component {
  handlePressIn = () => this.button.transitionTo({ scale: 0.9 }, 300)

  handlePressOut = () => this.button.transitionTo({ scale: 1 }, 300)

  render() {
    let { text, onPress, disabled, alfa } = this.props

    return (
      <TouchableOpacity
        onPressIn={disabled ? () => {} : this.handlePressIn}
        onPressOut={disabled ? () => {} : this.handlePressOut}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <View
          animation="bounceIn"
          ref={ref => (this.button = ref)}
          style={styles.itemWrapper}
        >
          <View style={styles.itemContent}>
            <Text style={styles[`itemText${alfa ? alfa : "Latin"}`]}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
