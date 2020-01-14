import React, { Component } from "react"
import { View, Text, TouchableWithoutFeedback } from "react-native"

import * as Animatable from "react-native-animatable"

import Button from "../../components/Button"

import defaultStyle from "../../components/PopUp/styles"
import styles from "./styles"

const hide = {
  0: { opacity: 0, zIndex: -999 },
  1: { opacity: 0, zIndex: -999 }
}

export default class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
      canTouch: false
    }
  }

  async toggleShow(show) {
    if (show) {
      await this.setState({ isShowing: true, canTouch: true })
      this.refs.container.fadeIn()
      this.refs.popUpContainer.bounceIn()
    } else {
      this.refs.popUpContainer.bounceOut()
      setTimeout(() => {
        this.refs.container.fadeOut().then(() => {
          this.refs.container.animate(hide).then(() => {
            this.setState({ isShowing: false })
          })
        })
      }, 350)
    }
  }

  render() {
    const { isShowing } = this.state
    const {
      title,
      desc,
      alfa,
      isSingleBtn,
      onRightBtnPress,
      onLeftBtnPress,
      onBtnPress,
      leftBtnText,
      rightBtnText,
      btnText,
      canCloseWrapper
      // if you declare the Alert component without using canCloseWrapper,
      // so this props have true default value
      // Actually this props have undefined default value hahah:v
    } = this.props

    return isShowing ? (
      <TouchableWithoutFeedback
        onPress={() => {
          if (this.state.canTouch) {
            if (canCloseWrapper === undefined) {
              this.setState({ canTouch: false })
              this.toggleShow(false)
            }
          }
        }}
      >
        <Animatable.View
          animation={hide}
          style={defaultStyle.container}
          ref="container"
          duration={300}
        >
          <TouchableWithoutFeedback>
            <Animatable.View
              useNativeDriver={true}
              duration={700}
              animation="fadeOut"
              ref="popUpContainer"
              style={styles.container}
            >
              <View
                style={[defaultStyle.popUpContainer, styles.popUpContainer]}
              >
                <View style={styles.textContainer}>
                  <Animatable.View ref="contentText" animation="fadeIn">
                    {title && (
                      <Text
                        style={
                          styles[`congratulationText${alfa ? alfa : "Latin"}`]
                        }
                      >
                        {title}
                      </Text>
                    )}
                    {desc && (
                      <Text style={styles[`scoreText${alfa ? alfa : "Latin"}`]}>
                        {desc}
                      </Text>
                    )}
                  </Animatable.View>
                </View>
              </View>
              {isSingleBtn ? (
                <View style={styles.buttonContainer}>
                  <View style={[styles.button, { flex: 1 }]}>
                    <Button
                      alfa={alfa}
                      color="darkOrange"
                      onPress={() => {
                        if (this.state.canTouch) {
                          this.setState({ canTouch: false })
                          onBtnPress && onBtnPress()
                        }
                      }}
                    >
                      {btnText.toUpperCase()}
                    </Button>
                  </View>
                </View>
              ) : (
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Button
                      alfa={alfa}
                      color="darkOrange"
                      onPress={() => onLeftBtnPress && onLeftBtnPress()}
                    >
                      {leftBtnText.toUpperCase()}
                    </Button>
                  </View>
                  <View style={{ flex: 0.1 }} />
                  <View style={styles.button}>
                    <Button
                      alfa={alfa}
                      onPress={() => {
                        if (this.state.canTouch) {
                          this.setState({ canTouch: false })
                          onRightBtnPress && onRightBtnPress()
                        }
                      }}
                    >
                      {rightBtnText.toUpperCase()}
                    </Button>
                  </View>
                </View>
              )}
            </Animatable.View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      </TouchableWithoutFeedback>
    ) : (
      <View />
    )
  }
}
