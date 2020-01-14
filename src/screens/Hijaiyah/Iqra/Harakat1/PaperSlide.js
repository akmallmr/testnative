import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Platform
} from "react-native"
import * as Animatable from "react-native-animatable"
import { Button } from "../../components/index"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"
// import styles from "./styles"

const { HURUF, COLOR, HARAKAT, HARAKAT_TYPE, HARAKAT_LATIN } = HIJAIYAH

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
  "27": { f: 1.1, lh: 1.2 },
  "28": { f: 1.2, lh: 1.2 },
  "29": { f: 1.05, lh: 1.15 },
  "30": { f: 1, lh: 0.98 }
}

export default class PaperSlide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heightPaper: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.id !== this.props.data.id) {
      this.hijaiyahLtn && this.hijaiyahLtn.zoomIn(300)
    }
  }

  onLayout = data => {
    ;(this.state.height === null) &
      this.setState({ height: data.nativeEvent.layout.height })
    // console.log({ state: this.state })
  }

  hijaiyahPressed = () => {
    this.hijaiyahAr && this.hijaiyahAr.jello(1500)
  }

  render() {
    // const height = widthPercentageToDP(62) > heightPercentageToDP(35) ? heightPercentageToDP(35) : widthPercentageToDP(62)
    let { data, selectedHarokat, twit, navHijaiyah } = this.props
    let height = this.state.height
    // console.log(COLOR[selectedHarokat])
    return (
      <View
        onLayout={this.onLayout}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Button
          delay={1200}
          duration={1200}
          animation={"bounceIn"}
          onPress={() => navHijaiyah("PREV")}
          useNativeDriver={true}
          style={styles.arrowIcon}
        >
          <Image
            source={ImagesPath.img.iqra.arrowLeftIcon}
            style={styles.imageContain}
          />
        </Button>

        <Animatable.View
          duration={500}
          animation={"bounceIn"}
          easing={"ease-in"}
          style={styles.hijaiyahWrapper}
        >
          <ImageBackground
            style={styles.hijaiyahPaper}
            source={ImagesPath.img.iqra.paperSlide}
            resizeMode={"contain"}
          >
            {Platform.OS === "ios" && (
              <TouchableWithoutFeedback
                onPress={() => Promise.all([this.hijaiyahPressed(), twit()])}
              >
                <Animatable.Text
                  ref={element => (this.hijaiyahAr = element)}
                  style={[
                    styles.hijaiyahArabText,
                    {
                      fontSize: height * 0.5 * CUSTOM_STYLE[data.id].f,
                      lineHeight: height * 0.78 * CUSTOM_STYLE[data.id].lh,
                      color: COLOR[data.id % 5]
                    }
                  ]}
                >
                  {data.arb}
                  <Text style={{ color: COLOR[selectedHarokat] }}>
                    {HARAKAT[HARAKAT_TYPE[selectedHarokat]]}
                  </Text>
                </Animatable.Text>
              </TouchableWithoutFeedback>
            )}
            {Platform.OS === "android" && (
              <TouchableWithoutFeedback
                onPress={() => Promise.all([this.hijaiyahPressed(), twit()])}
              >
                <View>
                  <Animatable.Text
                    ref={element => (this.hijaiyahAr = element)}
                    style={[
                      styles.hijaiyahArabText,
                      {
                        fontSize: height * 0.5 * CUSTOM_STYLE[data.id].f,
                        lineHeight: height * 0.78 * CUSTOM_STYLE[data.id].lh,
                        color: COLOR[data.id % 5]
                      }
                    ]}
                  >
                    <Text style={{ color: COLOR[selectedHarokat] }}>
                      {data.arb}
                      {HARAKAT[HARAKAT_TYPE[selectedHarokat]]}
                    </Text>
                  </Animatable.Text>
                  <Animatable.Text
                    ref={element => (this.hijaiyahAr = element)}
                    style={[
                      styles.hijaiyahArabText,
                      {
                        fontSize: height * 0.5 * CUSTOM_STYLE[data.id].f,
                        lineHeight: height * 0.78 * CUSTOM_STYLE[data.id].lh,
                        color: COLOR[data.id % 5],
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                      }
                    ]}
                  >
                    {data.arb}
                  </Animatable.Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            <Animatable.View
              ref={element => (this.hijaiyahLtn = element)}
              style={[styles.hijaiyahLatin, { height: height * 0.18 }]}
            >
              <Text
                style={[styles.hijaiyahLatinText, { fontSize: height * 0.08 }]}
              >
                {data.ltn + HARAKAT_LATIN[HARAKAT_TYPE[selectedHarokat]]}
              </Text>
            </Animatable.View>
          </ImageBackground>
        </Animatable.View>

        <Button
          delay={1200}
          duration={1200}
          animation={"bounceIn"}
          onPress={() => navHijaiyah("NEXT")}
          useNativeDriver={true}
          style={styles.arrowIcon}
        >
          <Image
            source={ImagesPath.img.iqra.arrowRightIcon}
            style={styles.imageContain}
          />
        </Button>
      </View>
    )
  }
}

const height = heightPercentageToDP(35)
const styles = StyleSheet.create({
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },

  arrowIcon: {
    width: widthPercentageToDP(15),
    height: widthPercentageToDP(15),
    maxWidth: heightPercentageToDP(8.5),
    maxHeight: heightPercentageToDP(8.5),
    bottom: widthPercentageToDP(5)
  },
  hijaiyahWrapper: {
    width: widthPercentageToDP(62) * 0.8835820895522388,
    height: widthPercentageToDP(62),
    maxWidth: heightPercentageToDP(35) * 0.8835820895522388,
    maxHeight: heightPercentageToDP(35),
    marginHorizontal: widthPercentageToDP(2.7),
    overflow: "hidden"
  },
  hijaiyahPaper: {
    flex: 1
  },
  hijaiyahArabText: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "Uthman" : "KFGQPCUthmanTahaNaskh-Bold"
  },
  hijaiyahLatin: {
    position: "absolute",
    height: height * 0.18,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignSelf: "center"
  },
  hijaiyahLatinText: {
    fontSize: height * 0.08,
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#333",
    textAlign: "center"
  }
})
