import React, { Component } from "react"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"

import { View } from "react-native-animatable"

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

  handlePressIn = () => this.button.transitionTo({ scale: 0.9 }, 300)

  handlePressOut = () => this.button.transitionTo({ scale: 1 }, 300)

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
      isLoading,
      ...res
    } = this.props

    return (
      <TouchableOpacity
        {...res}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={() => this._onPress()}
        disabled={this.state.disabled || disabled}
        activeOpacity={0.7}
      >
        <View
          ref={ref => (this.button = ref)}
          style={[styles.backColor, backButtonStyle, styles[`${color}Back`]]}
        >
          <View style={[styles.btn, buttonStyle, color && styles[color]]}>
            {customChild ? (
              children
            ) : (
              <Text style={[styles[`btnText${alfa ? alfa : "Latin"}`], style]}>
                {children ? children : " "}
              </Text>
            )}
            { isLoading &&
              <View 
                useNativeDriver={true}
                animation={isLoading ? "fadeIn" : "fadeOut"} 
                style={[styles.loading, color && styles[color]]}
              >
                <ActivityIndicator size="small" color="#fff" />
              </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
