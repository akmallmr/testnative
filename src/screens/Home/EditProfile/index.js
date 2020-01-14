import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Image } from "react-native-animatable"

import { Header, ImagePopUp } from "../../../components"
import { ImagesPath } from "../../../constants"

import * as Languages from "../../../constants/languages"
import { actionCreators } from "../../../models/index"
import styles from "./styles"
import Button from "../../../components/Button/index"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../utils/Responsive"
import EditPopUp from "./EditPopUp/index"
import EditPw from "./EditPopUp/index-edit-pw"

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      showEditName: false
    }
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    this.refs.img.bounceIn(300)
    this.refs.popUp.toggleShow(true)
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  render() {
    const Lang = Languages[this.props.lang]
    const userdata = this.props.detail
    const isJawi = Lang.alfaType === "Jawi"

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 4 }} />
        <StatusBar
          backgroundColor={Platform.OS === "android" ? "#405D1B" : "#81BA37"}
          barStyle="light-content"
        />
        <View style={styles.navContainer}>
          <Header
            rightBtn="none"
            title={Lang.editProfile.title}
            alfa={Lang.alfaType}
            titleColor="#fff"
            leftBtn="back"
            leftBtnPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.editProfileContainer}>
          <View>
            <View style={styles.profileImgBackColor}>
              <View style={styles.profileImgContainer}>
                <View style={styles.profileImg}>
                  <Image
                    source={{
                      uri:
                        "http://app.islamicmindplus.com" + userdata.profile_img
                    }}
                    style={styles.img}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              disabled={this.state.disabled}
              activeOpacity={0.7}
              onPress={() => this._onPress()}
              style={styles.changeImgBtn}
            >
              <Image
                ref="img"
                source={ImagesPath.icon.camera}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.textGroup,
              isJawi && { flexDirection: "row-reverse" },
              { marginTop: widthPercentageToDP(10) }
            ]}
          >
            <Text style={styles[`leftText${Lang.alfaType}`]}>
              {Lang.editProfile.fullName}
            </Text>
            <View style={{ flexDirection: isJawi ? "row-reverse" : "row" }}>
              <View
                style={{
                  width: widthPercentageToDP(45)
                }}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.rightText,
                    {
                      [`padding${
                        isJawi ? "Left" : "Right"
                      }`]: widthPercentageToDP(2),
                      alignSelf: "stretch",
                      textAlign: isJawi ? "left" : "right",
                      position: "absolute",
                      width: "100%"
                    }
                  ]}
                >
                  {userdata.fullname}
                </Text>
              </View>
              <View style={{ bottom: widthPercentageToDP(1) }}>
                <Button
                  customChild={true}
                  onPress={() => {
                    this.refs.EditPopUp.toggleShow(true)
                    this.refs.EditPopUp.clearForm()
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ position: "relative" }}>
                      <Image ref="img" source={ImagesPath.icon.edit} />
                    </View>
                  </View>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.textGroup,
              isJawi && { flexDirection: "row-reverse" }
            ]}
          >
            <Text style={styles[`leftText${Lang.alfaType}`]}>
              {Lang.editProfile.password}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button
                customChild={true}
                onPress={() => {
                  this.refs.EditPw.toggleShow(true)
                  this.refs.EditPw.clearForm()
                }}
              >
                <View style={{ flexDirection: isJawi ? "row-reverse" : "row" }}>
                  <Text
                    style={[
                      styles.rightText,
                      {
                        padding: widthPercentageToDP(1),
                        [`padding${
                          isJawi ? "Right" : "Left"
                        }`]: widthPercentageToDP(2)
                      },
                      isJawi && {
                        fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
                      }
                    ]}
                  >
                    {Lang.editProfile.popUpTitle[1]}
                  </Text>
                  <View style={{ position: "relative" }}>
                    <Image ref="img" source={ImagesPath.icon.edit} />
                  </View>
                </View>
              </Button>
            </View>
          </View>
          <View
            style={[
              styles.textGroup,
              isJawi && { flexDirection: "row-reverse" }
            ]}
          >
            <Text style={styles[`leftText${Lang.alfaType}`]}>
              {Lang.editProfile.subTitle[0]}
            </Text>
            <Text style={styles.rightText}>{userdata.username}</Text>
          </View>
          <View
            style={[
              styles.textGroup,
              isJawi && { flexDirection: "row-reverse" }
            ]}
          >
            <Text style={styles[`leftText${Lang.alfaType}`]}>
              {Lang.editProfile.subTitle[1]}
            </Text>
            <Text style={styles.rightText}>{userdata.email}</Text>
          </View>
        </View>
        <ImagePopUp
          ref="popUp"
          lang={Lang}
          usertoken={this.props.token}
          onSuccess={() => {
            this.props.getProfile(res => {
              this.props.setProfile(res.result)
            })
          }}
        />
        <EditPopUp
          ref="EditPopUp"
          lang={Lang}
          usertoken={this.props.token}
          onSuccess={() => {
            this.props.getProfile(res => {
              this.props.setProfile(res.result)
            })
          }}
        />
        <EditPw
          ref="EditPw"
          lang={Lang}
          usertoken={this.props.token}
          onSuccess={() => {
            this.props.getProfile(res => {
              this.props.setProfile(res.result)
            })
          }}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang,
  detail: state.authData.detail,
  token: state.authData.token
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
