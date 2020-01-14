import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert
} from "react-native"

import Orientation from "react-native-orientation"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { SafeAreaView } from "react-navigation"
import * as Animatable from "react-native-animatable"
import YouTube from "react-native-youtube"

import { Header, PopUp } from "../../components"
import { ImagesPath } from "../../constants"

import * as Languages from "../../constants/languages"
import { actionCreators } from "../../models/index"
import { widthPercentageToDP } from "../../utils/Responsive"
import styles from "./styles"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: null,
      onReadyVideo: 50,
      isPlaying: false,
      isPaused: false,
      disabled: false
    }
    _ROOTSCREEN = this
  }

  _setHomeVideo() {
    this.props.getHomeVideoId(res => {
      if (res.status) {
        if (res.httpStatus === 200) {
          this.setState({
            isPlaying: false,
            videoId: res.data.result.video_id
          })
        } else {
          Alert.alert(`Sorry, something went wrong`)
        }
      } else {
        Alert.alert(
          `Failed to connect to the internet.\nPlease check your internet.`
        )
      }
    })
  }

  componentWillMount() {
    Orientation.lockToPortrait()
  }

  componentDidMount() {
    this._setHomeVideo()
    this.props.getProfile(res => {
      this.props.setProfile(res.result)
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lang !== this.props.lang) {
      this._setHomeVideo()
    }
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 450)
  }

  _onRouteBtnPress(route) {
    this._onPress()
    this.props.navigation.navigate(route)
    this.setState({
      isPaused: false,
      isPlaying: false
    })
  }

  _playVideo() {
    this._onPress()
    if (this.state.videoId) {
      this.refs.Play.bounceIn().then(() =>
        this.setState({
          isPlaying: !this.state.isPlaying,
          isPaused: !this.state.isPaused
        })
      )
    }
  }

  _showVideoContainer() {
    const Lang = Languages[this.props.lang]

    return this.state.isPlaying ? (
      <YouTube
        apiKey="AIzaSyBGtDlQzIfjnzkzaxclc_rRIIs5ZuZZclQ"
        videoId={this.state.videoId ? this.state.videoId : "orl0AAk_zUk"}
        play={this.state.isPaused}
        hidden={false}
        fullscreen={false}
        loop={false}
        controls={1}
        showinfo={true}
        modestbranding={true}
        rel={false}
        onReady={e => {
          setTimeout(() => {
            this.setState({ onReadyVideo: 51.5 })
          }, 500)
        }}
        onChangeFullscreen={e => {
          setTimeout(() => {
            this.setState({ onReadyVideo: 51 })
          }, 500)
          if (e.isFullscreen) {
            Orientation.lockToLandscape()
            console.log("true")
          } else {
            Orientation.lockToPortrait()
            setTimeout(() => {
              this.setState({ isPaused: true })
            }, 500)
            console.log("false")
          }
        }}
        onChangeState={e => {
          if (e.state === "playing") {
            this.setState({
              isPaused: true
            })
          } else if (e.state === "paused") {
            this.setState({
              isPaused: false
            })
          }
        }}
        onError={e => console.log(e)}
        style={[
          {
            backgroundColor: "transparent",
            height: widthPercentageToDP(this.state.onReadyVideo),
            borderRadius: widthPercentageToDP(7.5),
            overflow: "hidden",
            justifyContent: "center",
            elevation: Platform.OS === "android" ? 8 : 0
          }
        ]}
      />
    ) : (
      <ImageBackground
        source={ImagesPath.img.videoThumbnail}
        resizeMode="cover"
        style={styles.videoContainer}
      >
        <Animatable.View useNativeDriver={true} ref="Play">
          <TouchableOpacity
            style={styles.videoBtnBackColor}
            activeOpacity={0.7}
            onPress={() => {
              this._playVideo()
            }}
          >
            <View style={styles.videoBtn}>
              <View style={styles.videoBtnImg}>
                <Image source={ImagesPath.icon.playVideo} style={styles.img} />
              </View>
              <Text style={styles[`videoBtnText${Lang.alfaType}`]}>
                {Lang.home.button[0]}
              </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    )
  }

  handlePressIn = route => this.refs[route].transitionTo({ scale: 0.9 }, 300)

  handlePressOut = route => this.refs[route].transitionTo({ scale: 1 }, 300)

  render() {
    const Lang = Languages[this.props.lang]

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 4 }} />
        <StatusBar
          backgroundColor={Platform.OS === "android" ? "#405D1B" : "#81BA37"}
          barStyle="light-content"
        />
        <Animatable.View
          useNativeDriver={true}
          animation="fadeInDown"
          style={styles.navContainer}
        >
          <Header
            rightBtnPress={() => {
              this.refs.popUp.toggleShow(true)
              this.setState({
                isPaused: false
              })
            }}
            userdata={this.props.detail}
          />
        </Animatable.View>
        <Animatable.View
          useNativeDriver={true}
          animation="fadeInDown"
          style={styles.header}
        >
          <View style={styles.boxShadow}>{this._showVideoContainer()}</View>
        </Animatable.View>
        <Animatable.View
          animation="bounceIn"
          delay={500}
          style={styles.content}
        >
          <View style={styles.itemCol}>
            <TouchableOpacity
              disabled={this.state.disabled}
              activeOpacity={0.7}
              style={{ transform: [{ scale: 1 }] }}
              onPressIn={() => this.handlePressIn("Learn")}
              onPressOut={() => this.handlePressOut("Learn")}
              onPress={() => this._onRouteBtnPress("Learn")}
            >
              <Animatable.View
                useNativeDriver={true}
                ref="Learn"
                style={[styles.itemRow, styles.itemRowLeft]}
              >
                <View style={styles.item}>
                  <View style={styles.itemImg}>
                    <Image
                      source={ImagesPath.img.homeMenu.learn}
                      style={[styles.img, { transform: [{ rotate: "25deg" }] }]}
                    />
                  </View>
                  <Text style={styles[`itemText${Lang.alfaType}`]}>
                    {Lang.home.button[1]}
                  </Text>
                </View>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={this.state.disabled}
              activeOpacity={0.7}
              onPressIn={() => this.handlePressIn("Practice")}
              onPressOut={() => this.handlePressOut("Practice")}
              onPress={() => this._onRouteBtnPress("Practice")}
            >
              <Animatable.View
                useNativeDriver={true}
                ref="Practice"
                style={[styles.itemRow, styles.itemRowRight]}
              >
                <View style={styles.item}>
                  <View style={styles.itemImg}>
                    <Image
                      source={ImagesPath.img.homeMenu.practice}
                      style={[styles.img, { transform: [{ rotate: "25deg" }] }]}
                    />
                  </View>
                  <Text style={styles[`itemText${Lang.alfaType}`]}>
                    {Lang.home.button[2]}
                  </Text>
                </View>
              </Animatable.View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemCol}>
            <TouchableOpacity
              disabled={this.state.disabled}
              activeOpacity={0.7}
              onPressIn={() => this.handlePressIn("ReadQuran")}
              onPressOut={() => this.handlePressOut("ReadQuran")}
              onPress={() => this._onRouteBtnPress("ReadQuran")}
            >
              <Animatable.View
                useNativeDriver={true}
                ref="ReadQuran"
                style={[styles.itemRow, styles.itemRowLeft]}
              >
                <View style={styles.item}>
                  <View style={styles.itemImg}>
                    <Image
                      source={ImagesPath.img.homeMenu.quran}
                      style={[styles.img, { transform: [{ rotate: "25deg" }] }]}
                    />
                  </View>
                  <Text style={styles[`itemText${Lang.alfaType}`]}>
                    {Lang.home.button[3]}
                  </Text>
                </View>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={this.state.disabled}
              activeOpacity={0.7}
              onPressIn={() => this.handlePressIn("Hijaiyah")}
              onPressOut={() => this.handlePressOut("Hijaiyah")}
              onPress={() => this._onRouteBtnPress("Hijaiyah")}
            >
              <Animatable.View
                useNativeDriver={true}
                ref="Hijaiyah"
                style={[styles.itemRow, styles.itemRowRight]}
              >
                <View style={styles.item}>
                  <View style={styles.itemImg}>
                    <Image
                      source={ImagesPath.img.homeMenu.hijaiyah}
                      style={[styles.img, { transform: [{ rotate: "25deg" }] }]}
                    />
                  </View>
                  <Text style={styles[`itemText${Lang.alfaType}`]}>
                    {Lang.home.button[4]}
                  </Text>
                </View>
              </Animatable.View>
            </TouchableOpacity>
          </View>
        </Animatable.View>

        <PopUp
          ref="popUp"
          lang={Lang}
          navigation={this.props.navigation}
          userdata={this.props.detail}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authData.token,
  listLang: state.langSetting.listLang,
  lang: state.langSetting.lang,
  detail: state.authData.detail
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
