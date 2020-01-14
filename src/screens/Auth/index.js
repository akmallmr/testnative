import React, { Component } from "react"
import { View, Image, StatusBar, SafeAreaView, Platform } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import * as Animatable from "react-native-animatable"

import { Button, TabsMenu, LanguagePopUp, Alert } from "../../components"
import * as AuthType from "./components"

import { actionCreators } from "../../models"

import src from "../../constants/img"
import * as Languages from "../../constants/languages"

import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/Responsive"
import ASM from "../../utils/ASM"

import styles from "./styles"

const getAnimationSwitchMode = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
      disabledTab: false,
      isLoading: false
    }
    _ROOTSCREEN = this
  }

  _switchTab(tab) {
    if (!this.state.disabledTab) {
      this.setState({ activeTab: tab })
      this.refs.auth.bounceIn()
      this.refs.btnText.fadeIn()
      if (tab === 1) {
        const animation = {
          from: { height: widthPercentageToDP(42), opacity: 1 },
          to: { height: widthPercentageToDP(10), opacity: 0 }
        }
        this.refs.header.animate(animation)
      }
      if (this.state.activeTab === 1) {
        const animation = {
          from: { height: widthPercentageToDP(10), opacity: 0 },
          to: { height: widthPercentageToDP(42), opacity: 1 }
        }
        this.refs.header.animate(animation)
      }
    }
  }

  _toggleForgetPass() {
    const { activeTab } = this.state
    const height = heightPercentageToDP(80)
    const animationUp = getAnimationSwitchMode(1, 1, height, 0)
    const animationDown = getAnimationSwitchMode(1, 1, 0, height)

    if (activeTab < 2) {
      this.state.disabledTab = true
      this.setState({
        activeTab: 2
      })
      this.refs.btnText.fadeIn()
      this.refs.forget.animate(animationUp)
    } else {
      this.state.disabledTab = false
      this.refs.btnText.fadeIn()
      this.setState({
        activeTab: 0
      })
      this.refs.forget.animate(animationDown).then(() => {
        this.refs.auth2.resetData()
      })
    }
  }

  _onChangeLangBtnPress() {
    this.refs.langPopUP.toggleShow(true)
  }

  _onSubmitSuccess(status, res) {
    if(status === "success") {
      const data = { token: res.token }
      ASM.setData("auth", data).then(() => {
        this.props.setToken(res.token)
        this.props.navigation.navigate("Main")
      })
    }
    this.setState({ isLoading: false })
  }

  render() {
    const { lang } = this.props
    const { activeTab, disabledTab, isLoading } = this.state
    const Lang = Languages[lang]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Platform.OS === "android" ? "#405D1B" : "#81BA37"}
          barStyle="light-content"
        />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
          <Animatable.View
            ref="header"
            animation="fadeInDown"
            style={styles.header}
          >
            <View style={styles.logo}>
              <Image style={styles.img} source={src.img.logo} />
            </View>
          </Animatable.View>
          <Animatable.View
            useNativeDriver={true}
            animation="bounceIn"
            delay={500}
            style={styles.changeLanguage}
          >
            <Button
              alfa={Lang.alfaType}
              onPress={() => this._onChangeLangBtnPress()}
            >
              {Lang.name}
            </Button>
          </Animatable.View>
          <Animatable.View
            useNativeDriver={true}
            animation="fadeInUp"
            delay={1000}
            style={styles.contentContainer}
          >
            <View style={styles.content}>
              <TabsMenu
                alfa={Lang.alfaType}
                disabled={disabledTab}
                listTab={[Lang.auth.tabs[0], Lang.auth.tabs[1]]}
                activeTab={activeTab === 1 ? activeTab : 0}
                onTabSwitch={i => this._switchTab(i)}
              />
              <View style={styles.authContentBackColor}>
                <View style={styles.authContent}>
                  <Animatable.View useNativeDriver={true} ref="auth">
                    {activeTab === 1 ? (
                      <AuthType.Register
                        ref="auth1"
                        lang={Lang}
                        onSubmit={() => this.setState({ isLoading: true })}
                        onSubmitSuccess={(status, res) =>
                          this._onSubmitSuccess(status, res)
                        }
                      />
                    ) : (
                      <AuthType.Login
                        ref="auth0"
                        lang={Lang}
                        onForgetBtnPress={() => this._toggleForgetPass()}
                        onSubmit={() => this.setState({ isLoading: true })}
                        onSubmitSuccess={(status, res) =>
                          this._onSubmitSuccess(status, res)
                        }
                      />
                    )}
                  </Animatable.View>
                </View>
              </View>

              <Animatable.View
                useNativeDriver={true}
                animation={getAnimationSwitchMode(0, 0, 0, -1000)}
                duration={600}
                ref="forget"
                style={styles.forgetContainer}
              >
                <AuthType.Forgot
                  ref="auth2"
                  lang={Lang}
                  onClose={() => this._toggleForgetPass()}
                  onSubmit={() => this.setState({ isLoading: true })}
                  onSubmitSuccess={() => this._toggleForgetPass()}
                  onStepChange={step => {
                    if(step !== undefined){
                      if(step === 0) this.refs.alert.toggleShow(true)
                      this.setState({ activeTab: activeTab + 1 })
                      this.refs.btnText.fadeIn()
                    }
                    this.setState({ isLoading: false })
                  }}
                />
              </Animatable.View>
            </View>

            <View style={styles.submitBtn}>
              <Button
                alfa={Lang.alfaType}
                color="darkOrange"
                disabled={isLoading}
                isLoading={isLoading}
                style={styles.submitText}
                onPress={() => {
                  this.refs[`auth${activeTab < 2 ? activeTab : 2}`].submit()
                }}
              >
                <Animatable.Text ref="btnText" useNativeDrive={true}>
                  {Lang.auth.button[activeTab + 1].toUpperCase()}
                </Animatable.Text>
              </Button>
            </View>
          </Animatable.View>
        </KeyboardAwareScrollView>
        <LanguagePopUp ref="langPopUP" />
        <Alert
          ref="alert"
          alfa={Lang.alfaType}
          isSingleBtn={true}
          desc={Lang.auth.alert.desc}
          btnText={Lang.auth.alert.btn}
          onBtnPress={() => this.refs.alert.toggleShow(false)}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authData.token,
  lang: state.langSetting.lang,
  listLang: state.langSetting.listLang,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
