import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native"

import * as Animatable from "react-native-animatable"

import { Button, LanguagePopUp } from "../"
import { ImagesPath } from "../../constants"

import ASM from "../../utils/ASM"

import styles from "./styles"

const hide = {
  0: { opacity: 0, zIndex: -999 },
  1: { opacity: 0, zIndex: -999 }
}

export default class SettingsPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      isShowing: false,
      canTouch: false
    }
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

  render() {
    const { lang, userdata } = this.props
    const { disabled, isShowing } = this.state

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
          duration={418.9}
        >
          <Animatable.View
            duration={700}
            animation={hide}
            ref="popUpContainer"
            style={styles.popUpBackColor}
          >
            <TouchableWithoutFeedback>
              <View style={styles.popUpContainer}>
                <View>
                  <Text style={styles[`popUpTitle${lang.alfaType}`]}>
                    {lang.setPopUp.title[0]}
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
                <View style={styles.profileContainer}>
                  <View style={styles.profileImgContainer}>
                    <View style={styles.profileImg}>
                      <Image
                        source={{
                          uri:
                            "http://app.islamicmindplus.com" +
                            userdata.profile_img
                        }}
                        style={styles.img}
                      />
                    </View>
                  </View>
                  <View style={styles.profileTextContainer}>
                    <View>
                      <Text numberOfLines={1} style={styles.profileName}>
                        {userdata.fullname
                          ? userdata.fullname
                          : userdata.username}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popUpBtn}>
                  <Button
                    disabled={disabled}
                    alfa={lang.alfaType}
                    onPress={() =>
                      this.props.navigation.navigate("EditProfile")
                    }
                  >
                    {lang.setPopUp.button[0]}
                  </Button>
                </View>
                <View style={styles.separator} />
                <Text style={styles[`popUpSubTitle${lang.alfaType}`]}>
                  {lang.setPopUp.title[1]}
                </Text>
                <View style={styles.popUpBtn}>
                  <Button
                    disabled={disabled}
                    alfa={lang.alfaType}
                    onPress={() => this.refs.langPopUP.toggleShow(true)}
                  >
                    {lang.name}
                  </Button>
                </View>
                <View style={styles.separator} />
                <View style={styles.popUpGroup}>
                  <View style={{ flex: 1, marginRight: 4 }}>
                    <View style={styles.popUpGroupBtn}>
                      <Button disabled={disabled} alfa={lang.alfaType}>
                        {lang.setPopUp.button[1]}
                      </Button>
                    </View>
                    <View style={styles.popUpGroupBtn}>
                      <Button disabled={disabled} alfa={lang.alfaType}>
                        {lang.setPopUp.button[2]}
                      </Button>
                    </View>
                  </View>
                  <View style={{ flex: 1, marginLeft: 4 }}>
                    <View style={styles.popUpGroupBtn}>
                      <Button disabled={disabled} alfa={lang.alfaType}>
                        {lang.setPopUp.button[3]}
                      </Button>
                    </View>
                    <View style={styles.popUpGroupBtn}>
                      <Button disabled={disabled} alfa={lang.alfaType}>
                        {lang.setPopUp.button[4]}
                      </Button>
                    </View>
                  </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.popUpBtn}>
                  <Button
                    disabled={disabled}
                    alfa={lang.alfaType}
                    onPress={() => {
                      ASM.deleteData("auth").then(() => {
                        this.props.navigation.navigate("Auth")
                      })
                    }}
                    color="red"
                  >
                    {lang.setPopUp.button[5]}
                  </Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Animatable.View>
          <LanguagePopUp ref="langPopUP" />
        </Animatable.View>
      </TouchableWithoutFeedback>
    ) : (
      <View />
    )
  }
}
