import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
  CameraRoll,
  PermissionsAndroid
} from "react-native"

import Orientation from "react-native-orientation"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Animatable from "react-native-animatable"
import YouTube from "react-native-youtube"
import RNFetchBlob from "rn-fetch-blob"

import { ListView, ListItem, Header, Alert } from "../../../components"
import { ImagesPath } from "../../../constants"
import * as Languages from "../../../constants/languages"

import { widthPercentageToDP } from "../../../utils/Responsive"

import { actionCreators } from "../../../models"

import styles from "./styles"

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

class SubjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertMsg: {
        ref: null,
        alfa: null,
        isSingleBtn: null,
        title: null,
        desc: null,
        btnText: null,
        onBtnPress: null,
        canCloseWrapper: undefined
      },
      contentData: {
        title: null,
        description: null,
        videoID: null,
        videoFilename: null,
        downloadProgress: 0
      },
      otherContentData: [],
      onReadyVideo: 50,
      isPlaying: false,
      isPaused: false,
      isMounted: false,
      disabled: false
    }
  }

  componentDidMount() {
    const contentId = this.props.navigation.getParam("contentId", null)

    if (contentId === null) {
      this.props.navigation.goBack()
    } else {
      this.props.getSubjectContent(contentId, res => {
        if (res.status) {
          if (res.httpStatus === 200) {
            // console.log("Success")
            const langID = parseInt(this.props.lang.split("lang")[1])
            const otherContent = this.props.navigation.getParam(
              "otherContent",
              []
            )
            const subjectTitle = res.data.result.content.subject.title.find(
              e => {
                return e.id === langID
              }
            ).pivot.title

            this.props.setQuestion(contentId, res.data)
            // console.log(res.data)
            this.setState({
              contentData: {
                title: subjectTitle,
                description: res.data.result.title,
                videoID: res.data.result.video_id,
                videoFilename: res.data.result.video_filename
              },
              otherContentData: otherContent,
              isMounted: true
            })
          } else if (res.httpStatus === 500) {
            const Lang = Languages[this.props.lang]
            this.setState({
              alertMsg: {
                ref: "networkConnection",
                alfa: Lang.alfaType,
                isSingleBtn: true,
                title: Lang.errorNetwork.title,
                desc: Lang.errorNetwork.desc,
                btnText: Lang.errorNetwork.btn,
                onBtnPress: () => {
                  this.refs.networkConnection.toggleShow(false)
                  this.reloadPage()
                },
                canCloseWrapper: false
              }
            })
            setTimeout(() => {
              this.refs.networkConnection.toggleShow(true)
            }, 100)
          }
        } else {
          const Lang = Languages[this.props.lang]
          this.setState({
            alertMsg: {
              ref: "networkConnection",
              alfa: Lang.alfaType,
              isSingleBtn: true,
              title: Lang.errorNetwork.title,
              desc: Lang.errorNetwork.desc,
              btnText: Lang.errorNetwork.btn,
              onBtnPress: () => {
                this.refs.networkConnection.toggleShow(false)
                this.reloadPage()
              },
              canCloseWrapper: false
            }
          })
          setTimeout(() => {
            this.refs.networkConnection.toggleShow(true)
          }, 300)
        }
      })
    }
  }

  reloadPage() {
    setTimeout(() => {
      this.componentDidMount()
    }, 1000)
  }

  componentWillMount() {
    this.state.isMounted = false
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 450)
  }

  _onPracticeBtnPress() {
    const contentId = this.props.navigation.getParam("contentId", null)
    const langID = parseInt(this.props.lang.split("lang")[1])

    this._onPress()
    this.setState({
      isPaused: false
    })

    if (this.props.question.result.quizzes.length) {
      this.props.navigation.navigate("Practice", {
        subjectTitle: this.state.contentData.description
      })
    } else {
      const Lang = Languages[this.props.lang]
      this.setState({
        alertMsg: {
          ref: "practiceAlert",
          alfa: Lang.alfaType,
          isSingleBtn: true,
          title: Lang.practice.alert[0].title,
          desc: Lang.practice.alert[0].desc,
          btnText: Lang.auth.alert.btn,
          onBtnPress: () => {
            this.refs.practiceAlert.toggleShow(false)
          },
          canCloseWrapper: undefined
        }
      })
      setTimeout(() => {
        this.refs.practiceAlert.toggleShow(true)
      }, 100)
    }
  }

  fakAndroid() {
    CameraRoll.getPhotos({ first: 1000000 }).then(res => {
      console.log(res, "images data")
    })
  }

  _onDownloadBtnPress() {
    let dirs = RNFetchBlob.fs.dirs
    let fileName = this.state.contentData.videoFilename
    let videoUrl = `http://app.islamicmindplus.com${fileName}`
    let filePath = `${dirs.DocumentDir}/Video${fileName}`
    // console.log(filePath)
    //Check if the file is exist on local directore
    if (fileName) {
      RNFetchBlob.fs
        .exists(filePath)
        .then(exist => {
          if (exist) {
            const Lang = Languages[this.props.lang]
            this.setState({
              alertMsg: {
                ref: "downloadIsExist",
                alfa: Lang.alfaType,
                isSingleBtn: true,
                title: Lang.downloadVideo.downloadExist.title,
                desc: Lang.downloadVideo.downloadExist.desc,
                btnText: Lang.downloadVideo.downloadExist.btn,
                onBtnPress: () => {
                  this.refs.downloadIsExist.toggleShow(false)
                },
                canCloseWrapper: undefined
              }
            })
            setTimeout(() => {
              this.refs.downloadIsExist.toggleShow(true)
            }, 100)
          } else {
            Platform.OS === "android" ? requestCameraPermission() : null
            this.refs.DownloadModal.toggleShow(true)
            this.task = RNFetchBlob.config({ path: filePath }).fetch(
              "GET",
              videoUrl
            )
            // listen to download progress event
            this.task
              .progress((received, total) => {
                let progress = received / total
                let progressFixed = Number.parseFloat(progress).toFixed(2)
                if (!parseInt(progressFixed)) {
                  let res = progressFixed.toString().split(".")
                  console.log(parseInt(res[1]).toString())
                  this.setState(function(previousState, currentProps) {
                    return {
                      contentData: {
                        title: previousState.contentData.title,
                        description: previousState.contentData.description,
                        videoID: previousState.contentData.videoID,
                        videoFilename: previousState.contentData.videoFilename,
                        downloadProgress: parseInt(res[1]).toString() + "%"
                      }
                    }
                  })
                } else {
                  this.setState(function(previousState, currentProps) {
                    return {
                      contentData: {
                        title: previousState.contentData.title,
                        description: previousState.contentData.description,
                        videoID: previousState.contentData.videoID,
                        videoFilename: previousState.contentData.videoFilename,
                        downloadProgress: "100%"
                      }
                    }
                  })
                }
              })
              .then(res => {
                // console.log("The file saved to ", res.path())
                CameraRoll.saveToCameraRoll(
                  Platform.OS === "android"
                    ? `file://${res.path()}`
                    : res.path(),
                  "video"
                ).then(res => console.log(res))
                this.refs.DownloadModal.toggleShow(false)
                // return resolve(res.path())
              })
              .catch((errorMessage, statusCode) => {
                console.log("Error", errorMessage, statusCode)
                // return reject(errorMessage)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      const Lang = Languages[this.props.lang]
      this.setState({
        alertMsg: {
          ref: "videoAlert",
          alfa: Lang.alfaType,
          isSingleBtn: true,
          title: Lang.practice.alert[2].title,
          desc: Lang.practice.alert[2].desc,
          btnText: Lang.auth.alert.btn,
          onBtnPress: () => {
            this.refs.videoAlert.toggleShow(false)
          }
        },
        canCloseWrapper: undefined
      })
      setTimeout(() => {
        this.refs.videoAlert.toggleShow(true)
      }, 100)
    }
  }

  _cancelDownload() {
    this.task.cancel()
    let dirs = RNFetchBlob.fs.dirs
    let fileName = this.state.contentData.videoFilename
    let filePath = `${dirs.DocumentDir}/Video${fileName}`

    RNFetchBlob.fs
      .unlink(filePath)
      .then(res => {
        return null
        // console.log(res)
      })
      .catch(err => {
        return null
        // console.log(err)
      })
  }

  _onFavoriteBtnPress() {
    this._onPress()
    const Lang = Languages[this.props.lang]
    const data = new FormData()
    data.append("content_id", this.props.question.result.content.id)
    fetch("http://app.islamicmindplus.com/api/addtofavourite", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.token}`
      },
      body: data
    })
      .then(response => response.json())
      .then(respond => {
        if (respond.status === 200) {
          this.setState({
            alertMsg: {
              ref: "addToFav",
              alfa: Lang.alfaType,
              isSingleBtn: true,
              title: Lang.downloadVideo.addToFav.title,
              desc: Lang.downloadVideo.addToFav.desc,
              btnText: Lang.downloadVideo.addToFav.btn,
              onBtnPress: () => {
                this.refs.addToFav.toggleShow(false)
              }
            },
            canCloseWrapper: undefined
          })
          setTimeout(() => {
            this.refs.addToFav.toggleShow(true)
          }, 100)
        } else {
          this.setState({
            alertMsg: {
              ref: "alredyAddToFav",
              alfa: Lang.alfaType,
              isSingleBtn: true,
              title: Lang.downloadVideo.errAddToFav.title,
              desc: Lang.downloadVideo.errAddToFav.desc,
              btnText: Lang.downloadVideo.errAddToFav.btn,
              onBtnPress: () => {
                this.refs.alredyAddToFav.toggleShow(false)
              }
            },
            canCloseWrapper: undefined
          })
          setTimeout(() => {
            this.refs.alredyAddToFav.toggleShow(true)
          }, 100)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  _playVideo() {
    this._onPress()
    if (this.state.contentData.videoID === null) {
      const Lang = Languages[this.props.lang]
      this.setState({
        alertMsg: {
          ref: "videoAlert",
          alfa: Lang.alfaType,
          isSingleBtn: true,
          title: Lang.practice.alert[2].title,
          desc: Lang.practice.alert[2].desc,
          btnText: Lang.auth.alert.btn,
          onBtnPress: () => {
            this.refs.videoAlert.toggleShow(false)
          },
          canCloseWrapper: undefined
        }
      })
      setTimeout(() => {
        this.refs.videoAlert.toggleShow(true)
      }, 100)
    }

    if (this.state.contentData.videoID) {
      this.setState({
        isPlaying: !this.state.isPlaying,
        isPaused: !this.state.isPaused
      })
    }
  }

  _showVideoContainer() {
    const { contentData, disabled } = this.state
    const Lang = Languages[this.props.lang]

    return this.state.isPlaying ? (
      <YouTube
        apiKey="AIzaSyBGtDlQzIfjnzkzaxclc_rRIIs5ZuZZclQ"
        videoId={contentData.videoID ? contentData.videoID : "orl0AAk_zUk"}
        play={this.state.isPaused}
        hidden={false}
        fullscreen={false}
        loop={false}
        controls={1}
        showinfo={true}
        rel={false}
        modestbranding={true}
        onReady={e => {
          setTimeout(() => {
            this.state.isMounted && this.setState({ onReadyVideo: 51.5 })
          }, 500)
        }}
        onChangeFullscreen={e => {
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
          Platform.OS === "android"
            ? this.setState({
                isPaused: false
              })
            : null

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
            alignSelf: "stretch",
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
        <View useNativeDriver={true} ref="Play">
          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            onPress={() => this._playVideo()}
            onPressIn={() => this.handlePressIn(0)}
            onPressOut={() => this.handlePressOut(0)}
          >
            <Animatable.View ref="btn0" style={styles.videoBtnBackColor}>
              <View style={styles.videoBtn}>
                <View style={styles.videoBtnImg}>
                  <Image
                    source={ImagesPath.icon.playVideo}
                    style={styles.img}
                  />
                </View>
                <Text style={styles[`videoBtnText${Lang.alfaType}`]}>
                  {Lang.learn.button[0]}
                </Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }

  handlePressIn(id) {
    this.refs[`btn${id}`].transitionTo({ scale: 0.9 }, 300)
  }

  handlePressOut(id) {
    this.refs[`btn${id}`].transitionTo({ scale: 1 }, 300)
  }

  render() {
    const { contentData, otherContentData, disabled } = this.state
    const { lang } = this.props
    const Lang = Languages[lang]

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomColor} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar
            backgroundColor={Platform.OS === "android" ? "#405D1B" : "#81BA37"}
            barStyle="light-content"
          />
          <View style={styles.navContainer}>
            <Header
              leftBtn="back"
              rightBtn="none"
              title={contentData.title}
              alfa={Lang.alfaType}
              titleColor="#fff"
              leftBtnPress={() => {
                this.props.navigation.popToTop()
                this.setState({
                  isPaused: false
                })
              }}
            />
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.headerBackColor}>
              <View style={styles.header}>
                <Text style={styles[`headerTitle${Lang.alfaType}`]}>
                  {contentData.description ? contentData.description : " "}
                </Text>
                <View style={[styles.boxShadow]}>
                  {this._showVideoContainer()}
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.7}
                    onPress={() => this._onDownloadBtnPress()}
                    onPressIn={() => this.handlePressIn(1)}
                    onPressOut={() => this.handlePressOut(1)}
                  >
                    <Animatable.View ref="btn1" style={styles.btnBackColor}>
                      <View style={styles.btn}>
                        <Image
                          source={ImagesPath.icon.download}
                          style={styles.img}
                        />
                        <Text style={styles[`btnText${Lang.alfaType}`]}>
                          {Lang.learn.button[1]}
                        </Text>
                      </View>
                    </Animatable.View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.7}
                    onPress={() => this._onFavoriteBtnPress()}
                    onPressIn={() => this.handlePressIn(2)}
                    onPressOut={() => this.handlePressOut(2)}
                  >
                    <Animatable.View ref="btn2" style={styles.btnBackColor}>
                      <View style={styles.btn}>
                        <Image
                          source={ImagesPath.icon.favorite}
                          style={styles.img}
                        />
                        <Text style={styles[`btnText${Lang.alfaType}`]}>
                          {Lang.learn.button[2]}
                        </Text>
                      </View>
                    </Animatable.View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.7}
                    onPress={() => this._onPracticeBtnPress()}
                    onPressIn={() => this.handlePressIn(3)}
                    onPressOut={() => this.handlePressOut(3)}
                  >
                    <Animatable.View ref="btn3" style={styles.btnBackColor}>
                      <View style={styles.btn}>
                        <Image
                          source={ImagesPath.icon.practice}
                          style={styles.img}
                        />
                        <Text style={styles[`btnText${Lang.alfaType}`]}>
                          {Lang.learn.button[3]}
                        </Text>
                      </View>
                    </Animatable.View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles[`contentTitle${Lang.alfaType}`]}>
              {Lang.learn.title}
            </Text>
            <View style={styles.contentListContainer}>
              <ListView
                keyExtractor={e => "sura-" + e.key}
                data={otherContentData}
                extraData={disabled}
                renderItem={({ item }) => (
                  <ListItem
                    alfa={Lang.alfaType}
                    disabled={disabled}
                    text={item.title}
                    onPress={() => {
                      this.setState({
                        isPlaying: false
                      })
                      this._onPress()
                      this.props.navigation.push("SubjectDetail", {
                        contentId: item.contentId,
                        otherContent: otherContentData.filter(
                          e => e.contentId > item.contentId
                        )
                      })
                    }}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
        {/* Add One For All Alert ;) */}
        <Alert
          ref={this.state.alertMsg.ref}
          canCloseWrapper={this.state.alertMsg.canCloseWrapper}
          alfa={this.state.alertMsg.alfa}
          isSingleBtn={this.state.alertMsg.isSingleBtn}
          title={this.state.alertMsg.title}
          desc={this.state.alertMsg.desc}
          btnText={this.state.alertMsg.btnText}
          onBtnPress={this.state.alertMsg.onBtnPress}
        />
        {/* Download Modal is can't reusable Like Above this comment */}
        <Alert
          ref="DownloadModal"
          canCloseWrapper={false}
          isSingleBtn={true}
          alfa={Lang.alfaType}
          title={"Harap Tunggu"}
          desc={this.state.contentData.downloadProgress}
          btnText={"Batal"}
          onBtnPress={() => {
            this.refs.DownloadModal.toggleShow(false)
            this._cancelDownload()
          }}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authData.token,
  lang: state.langSetting.lang,
  question: state.practiceData.question
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail)
