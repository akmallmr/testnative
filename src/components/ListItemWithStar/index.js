import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"

import { View, Image } from "react-native-animatable"
import styles from "./styles"
import src from "../../constants/img"

export default class ListItemWithStar extends Component {
  _renderStars() {
    const { star } = this.props
    let stars = []

    for (let i = 0; i < 3; i++) {
      stars.push(
        <View key={i} style={styles.star}>
          <Image
            ref={`star${i}`}
            onLoadStart={() => this.refs[`star${i}`][i < star ? "bounceIn" : "rubberBand"]()}
            source={i < star ? src.icon.star.active : src.icon.star.nonactive}
            style={styles.img}
          />
        </View>
      )
    }

    return stars
  }

  handlePressIn = () => this.button.transitionTo({ scale: 0.9 }, 300)

  handlePressOut = () => this.button.transitionTo({ scale: 1 }, 300)

  render() {
    const { text, onPress, disabled, alfa } = this.props

    return (
      <TouchableOpacity
        onPressIn={disabled ? () => {} : this.handlePressIn}
        onPressOut={disabled ? () => {} : this.handlePressOut}
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
      >
        <View 
          animation="bounceIn"
          ref={ref => (this.button = ref)}
          style={styles.itemWrapper}
        >
          <View style={styles.itemContent}>
            <View style={styles.starContent}>{this._renderStars()}</View>
            <Text style={styles[`itemText${alfa ? alfa : "Latin"}`]}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
