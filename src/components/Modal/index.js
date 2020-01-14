import React, { Component } from "react"
import { Dimensions } from "react-native"

import { View } from "react-native-animatable"

import styles from "./styles"

const makeAnimation = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}

const { width, height } = Dimensions.get("screen")

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: null
    }
    this.toggleModal = this._toggleModal.bind(this)
  }

  async _toggleModal(visible) {
    const inScreen = makeAnimation(1, 1, height, 0)
    const outScreen = makeAnimation(1, 1, 0, height)

    if (visible) {
      await this.setState({ visible: true })
      this.refs.modal.animate(inScreen)
    } else {
      this.refs.modal.animate(outScreen).then(() => {
        this.setState({ visible: false })
      })
    }
  }

  render() {
    const { visible } = this.state
    const { children } = this.props
    const hide = makeAnimation(0, 0, height, height)

    return (
      <View
        ref="modal"
        useNativeDriver={true}
        duration={400}
        style={styles.container}
        animation={hide}
      >
        {visible && children}
      </View>
    )
  }
}
