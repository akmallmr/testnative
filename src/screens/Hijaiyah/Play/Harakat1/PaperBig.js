import React, { Component } from "react"
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform
} from "react-native"
import * as Animatable from "react-native-animatable"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"

const { HARAKAT, COLOR, HARAKAT_TYPE } = HIJAIYAH

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

export default class PaperBig extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: null
    }
  }

  componentDidMount() {}

  onLayout = data => {
    ;(this.state.height === null) &
      this.setState({ height: data.nativeEvent.layout.height })
    console.log({ state: this.state })
  }

  hijaiyahPressed = () => {
    this.hijaiyahAr && this.hijaiyahAr.jello(1500)
    this.props.twit && this.props.twit()
  }

  render() {
    let { question, selected, state } = this.props
    let height = this.state.height
    const choice = [
      ImagesPath.img.play.trueChoice,
      ImagesPath.img.play.falseChoice
    ]

    return (
      <View
        onLayout={this.onLayout}
        style={{
          width: widthPercentageToDP(54),
          height: widthPercentageToDP(54),
          maxWidth: heightPercentageToDP(30.5),
          maxHeight: heightPercentageToDP(30.5),
          marginTop: heightPercentageToDP(2.8),
          alignSelf: "center"
        }}
      >
        <ImageBackground
          style={{ flex: 1 }}
          source={ImagesPath.img.play.paperBig}
          resizeMode={"contain"}
        >
          <TouchableOpacity
            onPress={this.hijaiyahPressed}
            disabled={state !== 0}
          >
            <View>
              <Animatable.Text
                ref={ref => (this.hijaiyahAr = ref)}
                style={{
                  textAlign: "center",
                  fontFamily:
                    Platform.OS === "android"
                      ? "Uthman"
                      : "KFGQPCUthmanTahaNaskh-Bold",
                  textAlignVertical: "center",
                  fontSize: height * 0.65 * CUSTOM_STYLE[question.id || 1].f,
                  color: COLOR[(question.id || 1) % 6],
                  lineHeight: height * 0.925 * CUSTOM_STYLE[question.id || 1].lh
                }}
              >
                <Text style={{ color: COLOR[selected] }}>
                  {question.arb}
                  {HARAKAT[HARAKAT_TYPE[selected]]}
                </Text>
              </Animatable.Text>
              <Animatable.Text
                ref={ref => (this.hijaiyahAr = ref)}
                style={{
                  textAlign: "center",
                  fontFamily:
                    Platform.OS === "android"
                      ? "Uthman"
                      : "KFGQPCUthmanTahaNaskh-Bold",
                  textAlignVertical: "center",
                  fontSize: height * 0.65 * CUSTOM_STYLE[question.id || 1].f,
                  color: COLOR[(question.id || 1) % 6],
                  lineHeight:
                    height * 0.925 * CUSTOM_STYLE[question.id || 1].lh,
                  position: "absolute",
                  width: "100%",
                  justifyContent: "center"
                }}
              >
                {question.arb}
              </Animatable.Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        {choice.map((e, i) => (
          <Image
            key={"Choice-" + (i + 1)}
            source={e}
            style={{
              width: height * 0.31,
              height: height * 0.31,
              position: "absolute",
              top: height * 0.05,
              right: -height * 0.13,
              opacity: state === i + 1 ? 1 : 0,
              resizeMode: "contain"
            }}
          />
        ))}
      </View>
    )
  }
}
