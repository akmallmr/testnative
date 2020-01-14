import React, { PureComponent } from "react"
import { Text, Image, TouchableOpacity } from "react-native"

import { View } from "react-native-animatable"

import src from "../../constants/img"

import styles from "./styles"

export default class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { disabled: false, isMounted: false }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }
  componentWillUnmount() {
    this.state.isMounted = false
  }

  _onPress(btn) {
    const { rightBtnPress, leftBtnPress } = this.props
    _ROOT.click()
    this.setState({ disabled: true })
    this.refs[btn].bounceIn(300)
    if (btn === "right") rightBtnPress && rightBtnPress()
    else if (btn === "left") leftBtnPress && leftBtnPress()
    setTimeout(() => {
      this.state.isMounted && this.setState({ disabled: false })
    }, 300)
  }

  render() {
    const {
      leftBtn,
      title,
      rightBtn,
      isSmall,
      isTextSmall,
      titleColor,
      alfa,
      userdata
    } = this.props

    return (
      <View style={styles.container}>
        <View ref="left" style={styles.left}>
          {leftBtn !== "none" &&
            (leftBtn ? (
              <TouchableOpacity
                onPress={() => this._onPress("left")}
                disabled={this.state.disabled}
                style={[styles.btn, isSmall && styles.smallBtn]}
                activeOpacity={0.7}
              >
                <Image style={styles.img} source={src.icon[leftBtn]} />
              </TouchableOpacity>
            ) : (
              <View style={styles.logo}>
                <Image style={styles.img} source={src.img.logo2} />
              </View>
            ))}
        </View>
        <View style={styles.center}>
          <Text
            numberOfLines={1} 
            style={[
              styles[`title${alfa ? alfa : "Latin"}`],
              (isTextSmall || isSmall) &&
                styles[`smallTitle${alfa ? alfa : "Latin"}`],
              titleColor && { color: titleColor }
            ]}
          >
            {title}
          </Text>
        </View>
        <View ref="right" style={styles.right}>
          {rightBtn !== "none" &&
            (rightBtn ? (
              <TouchableOpacity
                onPress={() => this._onPress("right")}
                disabled={this.state.disabled}
                style={[styles.btn, isSmall && styles.smallBtn]}
                activeOpacity={0.7}
              >
                <Image style={styles.img} source={src.icon[rightBtn]} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this._onPress("right")}
                disabled={this.state.disabled}
                style={[styles.btn, styles.btnImg]}
                activeOpacity={0.7}
              >
                <Image style={styles.img} source={{uri: 'http://app.islamicmindplus.com'+userdata.profile_img}} />
              </TouchableOpacity>
            ))}
        </View>
      </View>
    )
  }
}
