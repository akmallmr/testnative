import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"

import * as Animatable from "react-native-animatable"

import Button from "../../../../components/Button"

import defaultStyle from "../../../../components/PopUp/styles"
import styles from "./styles"
import src from "../../../../constants/img"
import Sound from "react-native-sound"
import SoundsPath from "../../../../constants/sounds"

const hide = {
  0: { opacity: 0, zIndex: -999 },
  1: { opacity: 0, zIndex: -999 }
}

export default class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: props.answers ? props.answers : [],
      correct: 0,
      star: [1, 3, 2],
      isLoading: true
    }
    this.incrementCorrectAnswer = null
  }

  starSound = () => {
    const s = new Sound(SoundsPath.star, e => {
      if (e) {
        console.log("error", e)
      } else {
        s.play(() => s.stop().release())
      }
    })
  }

  toggleShow(isShowing, answers) {
    if (isShowing) {
      this.refs.container.fadeIn().then(() => {
        this.refs.popUpContainer.bounceIn().then(() => {
          const correct = answers.filter(a => a.valid === 1)
          this.setState({ answers })
          if(correct.length) {
            this.incrementCorrectAnswer = setInterval(() => {
              this.setState(prev => {
                if (prev.correct + 1 === correct.length) {
                  clearInterval(this.incrementCorrectAnswer)
                  this.refs.contentText.bounceIn()
                }
                return {
                  correct: prev.correct + 1,
                  isLoading: prev.correct + 1 === correct.length ? false : true
                }
              })
            }, 1500 / correct.length)
          } else {
            this.refs.contentText.bounceIn().then(() => {
              this.setState({ correct: 0, isLoading: false })
            })
          }
        })
      })
    } else {
      this.setState({ isLoading: true })
      this.refs.popUpContainer.bounceOut(400).then(() => {
        this.refs.container.fadeOut(500).then(() => {
          this.refs.container.animate(hide).then(() => {
            this.refs.contentText.fadeOut()
            this.setState({ answers: [], correct: 0 })
          })
        })
      })
    }
  }

  render() {
    const { answers, isLoading, star, correct } = this.state
    const { onRightBtnPress, onLeftBtnPress, lang } = this.props

    return (
      <Animatable.View
        animation={hide}
        style={defaultStyle.container}
        ref="container"
        duration={300}
      >
        <Animatable.View
          useNativeDriver={true}
          duration={700}
          animation="fadeOut"
          ref="popUpContainer"
          style={styles.container}
        >
          <View style={styles.starContainer}>
            {star.map((item, i) => {
              const isCorrect = correct / answers.length * 3 >= item
              const star = src.icon[i + 1 === 2 ? "largeStar" : "largeStarM"]

              return (
                <View
                  key={item}
                  style={i + 1 === 2 ? styles.starMiddle : styles.star}
                >
                  <Animatable.Image
                    animation={isCorrect ? "bounceIn" : undefined}
                    source={isCorrect ? star.active : star.nonactive}
                    style={styles.img}
                    onLoadStart={() => {
                      isCorrect ? this.starSound() : undefined
                    }}
                  />
                </View>
              )
            })}
          </View>
          <View style={[defaultStyle.popUpContainer, styles.popUpContainer]}>
            <View style={styles.textContainer}>
            <Animatable.View ref="contentText" animation="fadeOut">
              <Text style={styles[`congratulationText${lang.alfaType}`]}>
                {lang.practice.result.title(correct / answers.length * 3 < 2)}
              </Text>
              <Text style={styles[`scoreText${lang.alfaType}`]}>
                {lang.practice.result.content(
                  correct,
                  this.props.answers.length
                )}
              </Text>
            </Animatable.View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                disabled={isLoading}
                color="darkOrange"
                onPress={() => onLeftBtnPress && onLeftBtnPress()}
                alfa={lang.alfaType}
              >
                {lang.practice.button[2].toUpperCase()}
              </Button>
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={styles.button}>
              <Button
                disabled={isLoading}
                onPress={() => onRightBtnPress && onRightBtnPress()}
                alfa={lang.alfaType}
              >
                {lang.practice.button[3].toUpperCase()}
              </Button>
            </View>
          </View>
        </Animatable.View>
      </Animatable.View>
    )
  }
}
