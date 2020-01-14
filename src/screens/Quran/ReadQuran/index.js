import React, { Component } from "react"
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Alert
} from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Metrics from "../../../utils/Metrics"
import Color from "../../../styles/colors"
import {
  SURAH as suraList,
  QURAN as quranList,
  TRANSLATIONS as translationList
} from "../../../constants/index"

import { AyahTab, WordTab, Player } from "../components/index"
import { AudioPlayer, RES as ResAP } from "./AudioPlayer"
import { actionCreators } from "../../../models"

import * as Languages from "../../../constants/languages"
import styles from "./styles"
import Warning from "../../../components/Alert/index"

class Quran extends Component {
  constructor(props) {
    super(props)
    let navData = props.navigation.state.params
    // let navData = {
    //   "key": 1,
    //   "arabic": "الفاتحة",
    //   "name": "Al-Fatihah",
    //   "location": "Makkah",
    //   "translate": "Pembukaan",
    //   "total": 7
    // }
    let data = quranList[navData.key].reduce((g, i) => {
      g[i.aya - 1] = g[i.aya - 1] || []
      g[i.aya - 1].push(i)
      return g
    }, [])

    this.state = {
      tabIndex: "AYAH",
      suraName: navData.name,
      data: data,
      sura: navData.key,
      totalAya: navData.total,
      selectedAya: 1,
      selectedWord: 0,
      isPlaying: false,
      audioPlay: false,
      sura: navData.key,
      stateAyah: {
        selectedAya: 1,
        isPlaying: false
      },
      stateWord: {
        selectedAya: 1,
        selectedWord: 0,
        isPlaying: false
      }
    }

    this.audioPlayerAyah = new AudioPlayer()
    this.audioPlayerWord = new AudioPlayer()
    this.audioPlayerAyah.setAudio(this.audioPlayerAyah.getInfo(navData.key, 1))
    this.audioPlayerWord.setAudio(
      this.audioPlayerWord.getInfoWBW(navData.key, 1, 1)
    )
  }

  renderTab() {
    let {
      data,
      tabIndex,
      suraName,
      isPlaying,
      stateAyah,
      stateWord
    } = this.state
    let element

    switch (tabIndex) {
      case "AYAH":
        element = (
          <AyahTab
            data={data}
            state={stateAyah}
            translationList={translationList}
            navAya={this.navAya}
          />
        )
        break

      case "WORD":
        element = (
          <WordTab
            data={data}
            state={stateWord}
            nextPrevWord={this.nextPrevAyaWord}
            playAudio={this.playAudioWord}
          />
        )
        break

      default:
        element = (
          <AyahTab
            ref={ele => (this.AyahTab = ele)}
            data={data}
            state={stateAyah}
            translationList={translationList}
            navAya={this.navAya}
          />
        )
        break
    }

    return element
  }

  render() {
    const { lang } = this.props
    const Lang = Languages[lang]
    let { tabIndex, suraName, isPlaying, stateAyah, stateWord } = this.state
    let navPlayer = {
      AYAH: {
        isPlaying: stateAyah.isPlaying,
        togglePlaying: this.togglePlayingAyah,
        navAya: this.navAya
      },
      WORD: {
        isPlaying: stateWord.isPlaying,
        togglePlaying: this.togglePlayingWord,
        navAya: this.navAyaWord
      }
    }
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => this.checkIfPlay()}
              style={{ width: Metrics.screenWidth * 0.12 }}
            >
              <Image
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "contain"
                }}
                source={require("../../../assets/images/icons/icon-back.png")}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.headerTitleText}>{suraName}</Text>
            </View>
            <View style={{ width: Metrics.screenWidth * 0.09 }} />
          </View>

          <View style={styles.contentWrapper}>
            <View style={styles.content}>
              <View style={styles.tabWrapper}>
                <TouchableOpacity
                  onPress={() => this.switchTab("AYAH")}
                  style={[
                    styles.tabItem,
                    tabIndex === "AYAH" ? styles.tabItemActive : {}
                  ]}
                >
                  <Text
                    style={[
                      styles[`tabItemText${Lang.alfaType}`],
                      tabIndex === "AYAH" ? { color: Color.primary.orange } : {}
                    ]}
                  >
                    {Lang.surah.tabs[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.switchTab("WORD")}
                  style={[
                    styles.tabItem,
                    tabIndex === "WORD" ? styles.tabItemActive : {}
                  ]}
                >
                  <Text
                    style={[
                      styles[`tabItemText${Lang.alfaType}`],
                      tabIndex === "WORD" ? { color: Color.primary.orange } : {}
                    ]}
                  >
                    {Lang.surah.tabs[1]}
                  </Text>
                </TouchableOpacity>
              </View>

              {this.renderTab()}
            </View>
          </View>

          <Player {...navPlayer[tabIndex]} />
        </View>
        <Warning
          ref="Warning"
          alfa={Lang.alfaType}
          title={Lang.surah.alert.title}
          desc={Lang.surah.alert.desc}
          leftBtnText={Lang.surah.alert.btn[0]}
          rightBtnText={Lang.surah.alert.btn[1]}
          onLeftBtnPress={() => {
            this.props.navigation.goBack()
            this.audioPlayerAyah.navPlayer("STOP")
          }}
          onRightBtnPress={() => this.refs.Warning.toggleShow(false)}
        />
      </SafeAreaView>
    )
  }

  checkIfPlay = () => {
    this.state.audioPlay
      ? this.refs.Warning.toggleShow(true)
      : this.props.navigation.goBack()
  }

  switchTab = key => {
    this.audioPlayerWord.navPlayer("STOP")
    this.audioPlayerAyah.navPlayer("STOP")
    this.setState(
      {
        tabIndex: key,
        selectedAya: 1,
        selectedWord: 0,
        isPlaying: false
      },
      () => (key === "AYAH" ? this.setAudioAyah() : this.setAudioAyah())
    )
  }

  navAya = (type, value = 1, byPlayer = false) => {
    let { sura, totalAya, stateAyah } = this.state
    let { isPlaying, selectedAya } = stateAyah
    let nextAya = selectedAya

    if (type === "NEXT") {
      nextAya = selectedAya + 1
    } else if (type === "PREV") {
      nextAya = selectedAya - 1
    } else if (type === "GOTO") {
      nextAya = value
    }
    // console.log({type, nextAya})

    if (nextAya > totalAya && byPlayer) {
      // console.log('END PLAYING')
      return this.setState(
        { stateAyah: { selectedAya: 1, isPlaying: false } },
        () => {
          Ayah_Tab.scrollToIndex(0)
          this.audioPlayerAyah.navPlayer("STOP")
          this.setAudioAyah()
        }
      )
    }

    if (nextAya < 1 || nextAya > totalAya) return

    this.setState(
      prevState => ({
        stateAyah: { ...prevState.stateAyah, selectedAya: nextAya }
      }),
      () => {
        this.setAudioAyah()
      }
    )
  }

  setAudioAyah() {
    // console.log('SET AUDIO')

    let { sura, totalAya, stateAyah } = this.state
    let { isPlaying, selectedAya } = stateAyah
    let info = this.audioPlayerAyah.getInfo(sura, selectedAya)
    this.audioPlayerAyah
      .setAudio(info)
      .then(res => {
        isPlaying && this.playAudioAyah()
      })
      .catch(error => Alert.alert("Error", error.message))
  }

  playAudioAyah = () => {
    let { isPlaying, selectedAya } = this.state.stateAyah

    Ayah_Tab.scrollToIndex(selectedAya - 1)
    this.audioPlayerAyah
      .playAudio()
      .then(res => {
        // console.log('FINISH PLAYING')
        this.navAya("NEXT", 0, true)
      })
      .catch(error => Alert.alert("Error", error.message))
  }

  togglePlayingAyah = () => {
    let { isPlaying, selectedAya } = this.state.stateAyah

    isPlaying ? this.audioPlayerAyah.navPlayer("PAUSE") : this.playAudioAyah()
    this.setState(prevState => ({
      audioPlay: !this.state.audioPlay,
      stateAyah: {
        ...prevState.stateAyah,
        isPlaying: !isPlaying
      }
    }))
  }

  navAyaWord = type => {
    let { totalAya, stateWord } = this.state
    let { selectedAya } = stateWord
    let nextAya = selectedAya

    if (type === "NEXT") {
      nextAya = selectedAya + 1
    } else if (type === "PREV") {
      nextAya = selectedAya - 1
    }

    if (nextAya < 1 || nextAya > totalAya) return

    this.setState(
      prevState => ({
        stateWord: {
          ...prevState.stateWord,
          selectedAya: nextAya,
          selectedWord: 0
        }
      }),
      () => {
        this.setAudioWord()
      }
    )
  }

  nextPrevAyaWord = (type, value = 0) => {
    let { data, totalAya, stateWord } = this.state
    let { selectedAya, selectedWord } = stateWord
    let totalWord = data[selectedAya - 1].length
    let nextAya = selectedAya
    let nextWord

    if (type === "NEXT") {
      nextWord = selectedWord + 1
    } else if (type === "PREV") {
      nextWord = selectedWord - 1
    } else if (type === "GOTO") {
      nextWord = value
    }

    if (nextWord < 0) {
      nextAya = selectedAya - 1
      nextWord = 0
      nextWord = data[nextAya - 1] ? data[nextAya - 1].length - 1 : 0
      // console.log('PREV AYA')
    } else if (nextWord >= totalWord) {
      nextAya = selectedAya + 1
      nextWord = 0
      // console.log('NEXT AYA')
    }

    if (nextAya < 1 || nextAya > totalAya) return

    this.setState(
      prevState => ({
        stateWord: {
          ...prevState.stateWord,
          selectedAya: nextAya,
          selectedWord: nextWord
        }
      }),
      () => {
        this.setAudioWord()
      }
    )
  }

  setAudioWord = () => {
    let { sura, stateWord } = this.state
    let { selectedAya, selectedWord, isPlaying } = stateWord
    let info = this.audioPlayerWord.getInfoWBW(
      sura,
      selectedAya,
      selectedWord + 1
    )
    this.audioPlayerWord
      .setAudio(info)
      .then(res => this.playAudioWord())
      .catch(error => Alert.alert("Error", error.message))
  }

  playAudioWord = () => {
    let { selectedAya, isPlaying } = this.state.stateWord
    this.audioPlayerWord
      .playAudio()
      .then(res => {
        isPlaying && this.nextPrevAyaWord("NEXT")
      })
      .catch(error => Alert.alert("Error", error.message))
  }

  togglePlayingWord = () => {
    let { isPlaying } = this.state.stateWord
    isPlaying ? this.audioPlayerWord.navPlayer("PAUSE") : this.playAudioWord()
    this.setState(prevState => ({
      audioPlay: !this.state.audioPlay,
      stateWord: {
        ...prevState.stateWord,
        isPlaying: !isPlaying
      }
    }))
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quran)
