import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  Platform
} from "react-native"
import * as Animatable from "react-native-animatable"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"
// import styles from "./styles"

const { HURUF, COLOR, HARAKAT, HARAKAT_LATIN, TANWIN_TYPE } = HIJAIYAH
const CUSTOM_STYLE = {
  "1": { f: 1.1, lh: 1.2 },
  "2": { f: 1.05, lh: 1.05 },
  "3": { f: 1.05, lh: 1.12 },
  "4": { f: 1.05, lh: 1.12 },
  "5": { f: 1, lh: 1 },
  "6": { f: 1, lh: 1 },
  "7": { f: 0.9, lh: 1 },
  "8": { f: 1.2, lh: 1.2 },
  "9": { f: 1.1, lh: 1.22 },
  "10": { f: 1, lh: 1 },
  "11": { f: 1, lh: 1 },
  "12": { f: 0.9, lh: 1 },
  "13": { f: 0.9, lh: 1 },
  "14": { f: 0.9, lh: 1 },
  "15": { f: 0.9, lh: 1 },
  "16": { f: 1.2, lh: 1.22 },
  "17": { f: 1.15, lh: 1.22 },
  "18": { f: 0.9, lh: 1 },
  "19": { f: 0.85, lh: 1 },
  "20": { f: 1, lh: 1.2 },
  "21": { f: 1, lh: 1.07 },
  "22": { f: 1.2, lh: 1.23 },
  "23": { f: 1, lh: 1.1 },
  "24": { f: 1, lh: 1 },
  "25": { f: 1.1, lh: 1.1 },
  "26": { f: 1.1, lh: 1 },
  "27": { f: 1.2, lh: 1.2 },
  "28": { f: 1.05, lh: 1.15 },
  "29": { f: 1.3, lh: 1.2 },
  "30": { f: 1, lh: 0.98 }
}

const ANDROID_CUSTOM_STYLE = {
  "1": { f: 1, lh: 1.27 }, // alif
  "2": { f: 1, lh: 1.1 }, //ba
  "3": { f: 1, lh: 1.19 }, //ta
  "4": { f: 1, lh: 1.19 }, //sa
  "5": { f: 1, lh: 1.05 }, //ja
  "6": { f: 1, lh: 1.05 }, //ha
  "7": { f: 1, lh: 1.05 }, //kha
  "8": { f: 1, lh: 1.27 }, //da
  "9": { f: 1, lh: 1.27 }, //zal
  "10": { f: 1, lh: 1 }, //ra
  "11": { f: 1, lh: 1.05 }, //za
  "12": { f: 1, lh: 1 }, //sa
  "13": { f: 1, lh: 1 }, //sha
  "14": { f: 1, lh: 1 }, //sa
  "15": { f: 1, lh: 1 }, //da
  "16": { f: 1, lh: 1.3 }, //ta
  "17": { f: 1, lh: 1.27 }, //zad
  "18": { f: 1, lh: 1.05 }, //ain
  "19": { f: 1, lh: 1.05 },
  "20": { f: 1, lh: 1.3 }, //fa
  "21": { f: 1, lh: 1.1 },
  "22": { f: 1, lh: 1.28 },
  "23": { f: 1, lh: 1.15 },
  "24": { f: 1, lh: 1.1 },
  "25": { f: 1, lh: 1.2 },
  "26": { f: 1, lh: 1.07 },
  "27": { f: 1, lh: 1.15 },
  "28": { f: 1, lh: 1.2 },
  "29": { f: 1, lh: 1.15 },
  "30": { f: 1, lh: 0.95 }
}

export default class PaperModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heightPaper: 0
    }
  }

  onLayout = data => {
    ;(this.state.height === null) &
      this.setState({ height: data.nativeEvent.layout.height })
    // console.log({ state: this.state })
  }

  render() {
    let { visible, data, selectedHarokat, twit } = this.props
    let height = this.state.height

    return (
      <Modal visible={visible} transparent={true} animationType={"fade"}>
        <View style={styles.modalBG} />
        <View style={styles.modalWrapper}>
          <Animatable.View
            duration={500}
            animation={"bounceIn"}
            easing={"ease-in"}
            style={styles.modalPaper}
            onAnimationEnd={twit}
            onLayout={this.onLayout}
          >
            <ImageBackground
              style={{ flex: 1 }}
              source={ImagesPath.img.iqra.paperPopup}
              resizeMode={"contain"}
            >
              {Platform.OS === "ios" && (
                <Text
                  style={[
                    styles.modalHijaiyahText,
                    {
                      fontSize: height * 0.52 * CUSTOM_STYLE[data.id].f,
                      lineHeight: height * 0.8 * CUSTOM_STYLE[data.id].lh,
                      color: COLOR[data.id % 6]
                    }
                  ]}
                >
                  {"" + data.arb}
                  <Text style={{ color: COLOR[selectedHarokat] }}>
                    {HARAKAT[TANWIN_TYPE[selectedHarokat]] + " "}
                  </Text>
                </Text>
              )}
              {Platform.OS === "android" && (
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.modalHijaiyahText,
                      {
                        fontSize:
                          height * 0.52 * ANDROID_CUSTOM_STYLE[data.id].f,
                        lineHeight:
                          height * 0.8 * ANDROID_CUSTOM_STYLE[data.id].lh
                      }
                    ]}
                  >
                    <Text style={{ color: COLOR[selectedHarokat] }}>
                      {"" + data.arb}
                      {HARAKAT[TANWIN_TYPE[selectedHarokat]]}
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.modalHijaiyahText,
                      {
                        fontSize:
                          height * 0.52 * ANDROID_CUSTOM_STYLE[data.id].f,
                        lineHeight:
                          height * 0.8 * ANDROID_CUSTOM_STYLE[data.id].lh,
                        color: COLOR[data.id % 6]
                      }
                    ]}
                  >
                    {"" + data.arb}
                  </Text>
                </View>
              )}
              <View
                style={[styles.modalTransliteration, { height: height * 0.18 }]}
              >
                <Text
                  style={[
                    styles.modalTransliterationText,
                    { fontSize: height * 0.08 }
                  ]}
                >
                  {data.ltn + HARAKAT_LATIN[TANWIN_TYPE[selectedHarokat]]}
                </Text>
              </View>
            </ImageBackground>
          </Animatable.View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },

  modalBG: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: Platform.OS === "android" ? -30 : 0,
    backgroundColor: "#000",
    opacity: 0.4
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalPaper: {
    width: widthPercentageToDP(67.1) * 0.883495145631068,
    height: widthPercentageToDP(67.1)
  },
  modalHijaiyahText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily:
      Platform.OS === "android" ? "Uthman" : "KFGQPCUthmanTahaNaskh-Bold",
    textAlign: "center"
  },
  modalTransliteration: {
    position: "absolute",
    height: heightPercentageToDP(7),
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignSelf: "center"
  },
  modalTransliterationText: {
    fontSize: heightPercentageToDP(3.4),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    textAlign: "center",
    color: "#000"
  }
})
