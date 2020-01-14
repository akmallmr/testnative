import React, { Component } from "react"
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform
} from "react-native"
import * as Animatable from "react-native-animatable"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"

const { HURUF, HARAKAT, COLOR, HARAKAT_TYPE, TANWIN_TYPE } = HIJAIYAH

const STYLE_ITEM = {
  "1": { f: 1.1, lh: 1.4 },
  "2": { f: 1.2, lh: 1.2 },
  "3": { f: 1.3, lh: 1.35 },
  "4": { f: 1.3, lh: 1.4 },
  "5": { f: 1.15, lh: 0.95 },
  "6": { f: 1.1, lh: 0.95 },
  "7": { f: 1.05, lh: 0.95 },
  "8": { f: 1.3, lh: 1.4 },
  "9": { f: 1.3, lh: 1.45 },
  "10": { f: 1.2, lh: 1 },
  "11": { f: 1.1, lh: 1 },
  "12": { f: 1.2, lh: 1 },
  "13": { f: 1, lh: 1 },
  "14": { f: 1.1, lh: 1 },
  "15": { f: 1.1, lh: 1 },
  "16": { f: 1.3, lh: 1.45 },
  "17": { f: 1.3, lh: 1.45 },
  "18": { f: 1, lh: 0.9 },
  "19": { f: 0.95, lh: 0.95 },
  "20": { f: 1.2, lh: 1.4 },
  "21": { f: 1.3, lh: 1.3 },
  "22": { f: 1.4, lh: 1.5 },
  "23": { f: 1.25, lh: 1.3 },
  "24": { f: 1.3, lh: 1 },
  "25": { f: 1.35, lh: 1.3 },
  "26": { f: 1.5, lh: 1.2 },
  "27": { f: 2, lh: 1.7 },
  "28": { f: 1.3, lh: 1.5 },
  "29": { f: 2, lh: 1.65 },
  "30": { f: 1.2, lh: 1 }
}

const ANDROID_STYLE_ITEM = {
  "1": { f: 1.3, lh: 2 }, //alif
  "2": { f: 1.3, lh: 1.4 }, //ba
  "3": { f: 1.3, lh: 1.35 }, //ta
  "4": { f: 1.3, lh: 1.25 }, //sa
  "5": { f: 1.15, lh: 0.87 }, //jim
  "6": { f: 1.1, lh: 0.85 }, //kha
  "7": { f: 1.05, lh: 1 }, //kho
  "8": { f: 1.2, lh: 1.3 }, //dal
  "9": { f: 1.1, lh: 1.22 }, //zal
  "10": { f: 1.2, lh: 1 }, //ra
  "11": { f: 1.1, lh: 1 }, //zain
  "12": { f: 1.2, lh: 1 }, //sin
  "13": { f: 1, lh: 1 }, //syin
  "14": { f: 1.1, lh: 1 }, //sad
  "15": { f: 1.1, lh: 1 }, //tad
  "16": { f: 1.3, lh: 2 }, //to
  "17": { f: 1.3, lh: 1.5 }, //do
  "18": { f: 1, lh: 0.8 }, //ain
  "19": { f: 0.95, lh: 1 }, //gain
  "20": { f: 1.2, lh: 1.5 }, //fa
  "21": { f: 1.3, lh: 1.2 }, //kof
  "22": { f: 1.4, lh: 2 }, // kaf
  "23": { f: 1.25, lh: 1.5 }, // lam
  "24": { f: 1.3, lh: 1 }, //mim
  "25": { f: 1.3, lh: 1.2 }, //nun
  "26": { f: 1.4, lh: 1.05 }, //wau
  "27": { f: 2, lh: 2 }, //ha
  "28": { f: 1.3, lh: 1.5 }, //lam alif
  "29": { f: 2, lh: 1.87 }, //hamjah
  "30": { f: 1.2, lh: 1 } //ya
}
export default class JManHero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: null
    }
  }

  componentDidMount() {}

  onLayout = data => {
    // return this.state.height === null &&
    this.setState({ height: data.nativeEvent.layout.height })
  }

  hijaiyahPressed = () => {
    this.hijaiyahAr && this.hijaiyahAr.jello(1500)
    this.props.twit && this.props.twit()
  }

  render() {
    let {
      state,
      question,
      questionSelection,
      selectedList,
      refText,
      started
    } = this.props
    let { onPress, choiceAnswer } = this.props
    let questionSelected = question[questionSelection]
    let heightJman = this.state.height
    const jBoyMatch = [
      ImagesPath.img.play.jBoy.answer,
      ImagesPath.img.play.jBoy.answerTrue,
      ImagesPath.img.play.jBoy.answerFalse
    ]
    const choice = [
      ImagesPath.img.play.trueChoice,
      ImagesPath.img.play.falseChoice
    ]

    return (
      <View
        onLayout={this.onLayout}
        style={{
          width: widthPercentageToDP(79.5),
          height: widthPercentageToDP(79.5) * 1.4627039627039626,
          maxWidth: heightPercentageToDP(65) * 0.6836653386454183,
          maxHeight: heightPercentageToDP(65)
        }}
      >
        {jBoyMatch.map((e, i) => (
          <Image
            key={"jBoyHijaiyah-" + i}
            source={e}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
              opacity: state === i ? 1 : 0
            }}
          />
        ))}

        {started && (
          <ImageBackground
            source={ImagesPath.img.play.bubbleIcon}
            resizeMode={"contain"}
            style={{
              // backgroundColor: 'red',
              // opacity: .3,
              width: heightJman * 0.31,
              height: heightJman * 0.31 * 0.8645833333333334,
              position: "absolute",
              top: heightJman * 0.105,
              right: -(heightJman * 0.075),
              // overflow: 'hidden',
              flexDirection: "row"
            }}
          >
            <View
              style={{
                position: "absolute",
                left: "14%",
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity disabled={state !== 0} onPress={onPress}>
                <Animatable.Text
                  ref={element => refText(element)}
                  style={[
                    styles.hijaiyahText,
                    {
                      textAlign: "center",
                      left: Platform.OS === "android" ? -5 : 0,
                      fontFamily:
                        Platform.OS === "android"
                          ? "Uthman"
                          : "KFGQPCUthmanTahaNaskh-Bold",
                      fontSize:
                        Platform.OS === "android"
                          ? heightJman *
                            0.14 *
                            ANDROID_STYLE_ITEM[questionSelected.id].f
                          : heightJman *
                            0.14 *
                            STYLE_ITEM[questionSelected.id].f,
                      lineHeight:
                        Platform.OS === "android"
                          ? heightJman *
                            0.14 *
                            1.4166666666666667 *
                            ANDROID_STYLE_ITEM[questionSelected.id].lh
                          : heightJman *
                            0.14 *
                            1.4166666666666667 *
                            STYLE_ITEM[questionSelected.id].lh,
                      color: COLOR[questionSelected.id % 6],
                      textAlignVertical: "center"
                    }
                  ]}
                >{`${questionSelected.arb + " "}`}</Animatable.Text>
              </TouchableOpacity>
            </View>
            {choice.map((e, i) => (
              <Image
                key={"Choice-" + (i + 1)}
                source={e}
                style={{
                  width: heightJman * 0.15,
                  height: heightJman * 0.15,
                  position: "absolute",
                  bottom: -heightJman * 0.08,
                  left: heightJman * 0.085,
                  opacity: state === i + 1 ? 1 : 0,
                  resizeMode: "contain"
                }}
              />
            ))}
          </ImageBackground>
        )}

        {started && (
          <Animatable.View
            animation={"zoomIn"}
            style={{
              position: "absolute",
              alignSelf: "center",
              width: heightJman * 0.77,
              height: heightJman * 0.77 * 0.26881720430107525,
              top: heightJman * 0.563,
              paddingHorizontal: heightJman * 0.04,
              borderRadius: heightJman * 0.045,
              overflow: "hidden",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "#FFF",
                opacity: 0.85
              }}
            />
            {question.map((e, idx) => (
              <TouchableOpacity
                key={"ListHurufItem-" + e.id}
                disabled={state !== 0}
                onPress={() => choiceAnswer(idx)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: state === 0 || selectedList === idx ? 1 : 0.3
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily:
                      Platform.OS === "android"
                        ? "Uthman"
                        : "KFGQPCUthmanTahaNaskh-Bold",
                    fontSize:
                      Platform.OS === "android"
                        ? heightJman * 0.12 * ANDROID_STYLE_ITEM[e.id].f
                        : heightJman * 0.12 * STYLE_ITEM[e.id].f,
                    lineHeight:
                      Platform.OS === "android"
                        ? heightJman * 0.16 * ANDROID_STYLE_ITEM[e.id].lh
                        : heightJman * 0.16 * STYLE_ITEM[e.id].lh,
                    color: COLOR[e.id % 6],
                    textAlignVertical: "center"
                  }}
                >{`${e.arb + " "}`}</Text>
              </TouchableOpacity>
            ))}
          </Animatable.View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(79.5),
    height: widthPercentageToDP(79.5) * 1.4627039627039626,
    maxWidth: heightPercentageToDP(65.5) * 0.6836653386454183,
    maxHeight: heightPercentageToDP(65.5),
    alignSelf: "center"
  },
  jBoyImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  arabicText: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "Uthman" : "KFGQPCUthmanTahaNaskh-Bold",
    textAlignVertical: "center"
  },
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  }
})
