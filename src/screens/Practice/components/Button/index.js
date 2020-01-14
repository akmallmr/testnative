import React, { Component } from "react"
import { View, TouchableOpacity, Text } from "react-native"

import styles from "./styles"

export default class Button extends Component {
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

  _onPress() {
    const { onPress } = this.props
    _ROOT.click()
    this.setState({ disabled: true })
    onPress && onPress()
    setTimeout(() => {
      this.state.isMounted && this.setState({ disabled: false })
    }, 300)
  }

  render() {
    const {
      color,
      alfa,
      style,
      backButtonStyle,
      buttonStyle,
      customChild,
      children,
      disabled,
      ...res
    } = this.props

    return (
      <TouchableOpacity
        style={[styles.backColor, backButtonStyle, styles[`${color}Back`]]}
        {...res}
        onPress={() => this._onPress()}
        disabled={this.state.disabled || (disabled && disabled)}
        activeOpacity={0.7}
      >
        <View style={[styles.btn, buttonStyle, color && styles[color]]}>
          {customChild ? (
            children
          ) : (
            <Text style={[styles[`btnText${alfa ? alfa : "Latin"}`], style]}>
              {children ? children : " "}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}
