import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native"

import * as Animatable from "react-native-animatable"

import { Button } from "../../"
import { ImagesPath } from "../../../constants"

import * as Languages from "../../../constants/languages"

import styles from "../styles"

const hide = {
  0: { opacity: 0, zIndex: -999 },
  1: { opacity: 0, zIndex: -999 }
}

export default class LanguagePopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectLang: 0,
      disabled: false,
      isShowing: false,
      canTouch: false
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  componentDidMount() {
    const { lang } = _ROOTSCREEN.props
    const id = _ROOTSCREEN.props.listLang.filter(a => {
      if (a.code === lang) return a
    })
    this._changeLang(id[0].id, false)
  }

  async toggleShow(show, offSound) {
    if (show) {
      await this.setState({ isShowing: true, canTouch: true })
      this.refs.container.fadeIn()
      this.refs.popUpContainer.bounceIn()
    } else {
      !offSound && _ROOT.click()
      this.setState({ disabled: true })
      this.refs.popUpContainer.bounceOut()
      setTimeout(() => {
        this.refs.container.fadeOut().then(() => {
          this.refs.container.animate(hide).then(() => {
            this.setState({ disabled: false, isShowing: false })
          })
        })
      }, 350)
    }
  }

  _changeLang(id, change) {
    const language = _ROOTSCREEN.props.listLang

    Languages.changeLang(language[id].code)
    change !== false && _ROOTSCREEN.props.setLang(language[id].code)
    this.setState({ selectLang: id })
  }

  render() {
    const language = _ROOTSCREEN.props.listLang
    const { selectLang, disabled, isShowing } = this.state
    const Lang = Languages[language[selectLang].code]

    return isShowing ? (
      <TouchableWithoutFeedback
        onPress={() => {
          if (this.state.canTouch) {
            this.setState({ canTouch: false })
            this.toggleShow(false, true)
          }
        }}
      >
        <Animatable.View
          animation={hide}
          style={styles.container}
          ref="container"
          duration={300}
        >
          <TouchableWithoutFeedback>
            <Animatable.View
              useNativeDriver={true}
              duration={700}
              animation="fadeOut"
              ref="popUpContainer"
              style={styles.popUpBackColor}
            >
              <View style={styles.popUpContainer}>
                <View>
                  <Text style={styles[`popUpTitle${Lang.alfaType}`]}>
                    {Lang.langPopUp}
                  </Text>
                  <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.7}
                    onPress={() => {
                      this.setState({ canTouch: false })
                      this.toggleShow(false)
                    }}
                    style={styles.popUpCloseBtn}
                  >
                    <Animatable.Image
                      ref="close"
                      source={ImagesPath.icon.close}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                </View>
                {language.map((item, index) => {
                  return (
                    <View key={index}>
                      <View style={styles.popUpBtn}>
                        <Button
                          alfa={Languages[item.code].alfaType}
                          disabled={item.id === selectLang || disabled}
                          onPress={() =>
                            this._changeLang(index, index === 1 ? 1 : 0)
                          }
                          color={item.id !== selectLang && "white"}
                          style={item.id !== selectLang && { color: "#FE665A" }}
                        >
                          {Languages[item.code].name}
                        </Button>
                      </View>
                    </View>
                  )
                })}
              </View>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      </TouchableWithoutFeedback>
    ) : (
      <View />
    )
  }
}
