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

const { HURUF, COLOR } = HIJAIYAH

const CUSTOM_STYLE = {
  "1": { f: 1.1, y: -0.15 },
  "2": { f: 1, y: 0 },
  "3": { f: 1, y: 0 },
  "4": { f: 1, y: 0 },
  "5": { f: 0.9, y: 0.2 },
  "6": { f: 0.9, y: 0.2 },
  "7": { f: 0.9, y: 0.15 },
  "8": { f: 1.1, y: -0.15 },
  "9": { f: 1.1, y: -0.15 },
  "10": { f: 1, y: 0.15 },
  "11": { f: 1, y: 0.1 },
  "12": { f: 1, y: 0.1 },
  "13": { f: 0.9, y: 0.1 },
  "14": { f: 0.9, y: 0.1 },
  "15": { f: 0.9, y: 0.1 },
  "16": { f: 1, y: -0.1 },
  "17": { f: 1, y: -0.1 },
  "18": { f: 0.85, y: 0.2 },
  "19": { f: 0.8, y: 0.15 },
  "20": { f: 0.95, y: -0.1 },
  "21": { f: 1, y: 0 },
  "22": { f: 1, y: -0.1 },
  "23": { f: 1, y: 0 },
  "24": { f: 0.85, y: 0.2 },
  "25": { f: 1, y: 0 },
  "26": { f: 1.1, y: 0.1 },
  "27": { f: 1, y: 0 },
  "28": { f: 1, y: -0.1 },
  "29": { f: 1, y: 0 },
  "30": { f: 1, y: 0.1 }
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
    let { data, twit, navHijaiyah } = this.props
    let height = this.state.height

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
            <TouchableWithoutFeedback
              onPress={() => Promise.all([this.hijaiyahPressed(), twit()])}
            >
              <Animatable.Text
                ref={element => (this.hijaiyahAr = element)}
                style={[
                  styles.hijaiyahArabText,
                  {
                    fontSize: height * 0.75 * CUSTOM_STYLE[data.id].f,
                    lineHeight: height,
                    bottom: height * CUSTOM_STYLE[data.id].y,
                    color: COLOR[data.id % 5],
                    left: Platform.OS === "android" ? -15 : 0
                  }
                ]}
              >
                {data.arb + " "}
              </Animatable.Text>
            </TouchableWithoutFeedback>
            <Animatable.View
              ref={element => (this.hijaiyahLtn = element)}
              style={[styles.hijaiyahLatin, { height: height * 0.18 }]}
            >
              <Text
                style={[styles.hijaiyahLatinText, { fontSize: height * 0.08 }]}
              >
                {data.trs.toLowerCase()}
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
