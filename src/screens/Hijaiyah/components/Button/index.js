import React, { PureComponent } from "react"
import { TouchableWithoutFeedback } from "react-native"
import PropTypes from "prop-types"

import { View } from "react-native-animatable"

export default class ButtonCell extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  state = {
    disabled: false
  }

  handlePress = () => {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.props.onPress()
      this.setState({ disabled: false })
    }, 300)
  }

  handlePressIn = () => this.view.transitionTo({ scale: 0.9 }, 300)

  handlePressOut = () => this.view.transitionTo({ scale: 1 }, 300)

  render() {
    let { onPress, duration, disabled, children, ...viewProps } = this.props
    return (
      <TouchableWithoutFeedback
        disabled={this.state.disabled || disabled}
        onPress={this.handlePress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <View {...viewProps} style={[this.props.style]}>
          <View style={{ flex: 1 }} ref={element => (this.view = element)}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
