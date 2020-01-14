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
import ImagePicker from "react-native-image-crop-picker"

import styles from "../styles"

const hide = {
  0: { opacity: 0, zIndex: -999 },
  1: { opacity: 0, zIndex: -999 }
}

export default class LanguagePopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      canTouch: false
    }
  }

  toggleShow(show, offSound) {
    if (show) {
      this.setState({ canTouch: true })
      this.refs.container.fadeIn()
      this.refs.popUpContainer.bounceIn()
    } else {
      !offSound && _ROOT.click()
      this.setState({ isLoading: true })
      this.refs.popUpContainer.bounceOut()
      setTimeout(() => {
        this.refs.container.fadeOut().then(() => {
          this.refs.container.animate(hide).then(() => {
            this.setState({ isLoading: false })
          })
        })
      }, 350)
    }
  }

  _openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      const data = new FormData()
      data.append("profile_img", {
        uri: image.path,
        type: "image/jpeg", // or photo.type
        name: "Photo"
      })
      fetch("http://app.islamicmindplus.com/api/editprofile", {
        headers: {
          Authorization: `Bearer ${this.props.usertoken}`
        },
        method: "POST",
        body: data
      })
        .then(response => {
          return response.json()
        })
        .then(res => {
          if (res.status === 200) {
            this.toggleShow()
            this.props.onSuccess()
          } else {
            console.log("error")
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  _openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      const data = new FormData()
      data.append("profile_img", {
        uri: image.path,
        type: "image/jpeg", // or photo.type
        name: "Photo"
      })
      fetch("http://app.islamicmindplus.com/api/editprofile", {
        headers: {
          Authorization: `Bearer ${this.props.usertoken}`
        },
        method: "POST",
        body: data
      })
        .then(response => {
          return response.json()
        })
        .then(res => {
          if (res.status === 200) {
            this.toggleShow()
            this.props.onSuccess()
          } else {
            console.log("error")
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  render() {
    const { lang } = this.props

    return (
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
                  <Text style={styles[`popUpTitle${lang.alfaType}`]}>
                    {lang.changeImgPopUp.title}
                  </Text>
                  <TouchableOpacity
                    disabled={this.state.isLoading}
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
                <View style={styles.popUpBtn}>
                  <Button
                    alfa={lang.alfaType}
                    color="blue"
                    onPress={() => {
                      this._openCamera()
                    }}
                  >
                    {lang.changeImgPopUp.button[0]}
                  </Button>
                </View>
                <View style={styles.popUpBtn}>
                  <Button
                    alfa={lang.alfaType}
                    color="blue"
                    onPress={() => {
                      this._openGallery()
                    }}
                  >
                    {lang.changeImgPopUp.button[1]}
                  </Button>
                </View>
              </View>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      </TouchableWithoutFeedback>
    )
  }
}
