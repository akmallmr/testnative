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
import { Button } from "../components/index"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"

const { HARAKAT, COLOR, HARAKAT_TYPE, TANWIN_TYPE } = HIJAIYAH

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

export default class JManHero extends Component {
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
    let { question, selectedHijaiyah, selectedHarokat, state } = this.props
    let { onSelectHijaiyah, onSelectHarokat, twit } = this.props
    let itemSelection = question[selectedHijaiyah]
    let heightJman = this.state.height
    const jBoyMatch = [
      ImagesPath.img.play.jBoyMatch.answer,
      ImagesPath.img.play.jBoyMatch.answerTrue,
      ImagesPath.img.play.jBoyMatch.answerFalse
    ]
    const HarakatSource = [
      ImagesPath.img.play.harakatMatch.fathah,
      ImagesPath.img.play.harakatMatch.kasrah,
      ImagesPath.img.play.harakatMatch.dammah
    ]

    return (
      <View onLayout={this.onLayout} style={styles.container}>
        {jBoyMatch.map((e, i) => (
          <Image
            key={"jBoyHarakat-" + i}
            source={e}
            style={[
              styles.jBoyImage,
              {
                opacity: state === i ? 1 : 0
              }
            ]}
          />
        ))}

        <View
          style={{
            position: "absolute",
            left: heightJman * 0.17,
            bottom: heightJman * 0.2225,
            width: heightJman * 0.35,
            height: heightJman * 0.35
          }}
        >
          <TouchableOpacity
            onPress={this.hijaiyahPressed}
            disabled={state !== 0}
          >
            {selectedHijaiyah !== -1 && (
              <View>
                {Platform.OS === "ios" && (
                  <Animatable.Text
                    ref={ref => (this.hijaiyahAr = ref)}
                    style={[
                      styles.arabicText,
                      {
                        fontSize:
                          heightJman *
                          0.35 *
                          0.65 *
                          CUSTOM_STYLE[itemSelection.id || 1].f,
                        color: COLOR[(itemSelection.id || 1) % 6],
                        lineHeight:
                          heightJman *
                          0.35 *
                          0.925 *
                          CUSTOM_STYLE[itemSelection.id || 1].lh
                      }
                    ]}
                  >
                    {itemSelection.arb}

                    {selectedHarokat !== -1 && (
                      <Text style={{ color: COLOR[selectedHarokat] }}>
                        {selectedHarokat !== -1
                          ? HARAKAT[HARAKAT_TYPE[selectedHarokat]] + " "
                          : null}
                      </Text>
                    )}
                  </Animatable.Text>
                )}
                {Platform.OS === "android" && (
                  <View>
                    <Animatable.Text
                      ref={ref => (this.hijaiyahAr = ref)}
                      style={[
                        styles.arabicText,
                        {
                          fontSize:
                            heightJman *
                            0.35 *
                            0.65 *
                            CUSTOM_STYLE[itemSelection.id || 1].f,
                          color: COLOR[(itemSelection.id || 1) % 6],
                          lineHeight:
                            heightJman *
                            0.35 *
                            0.925 *
                            CUSTOM_STYLE[itemSelection.id || 1].lh
                        }
                      ]}
                    >
                      {selectedHarokat !== -1 && (
                        <Text style={{ color: COLOR[selectedHarokat] }}>
                          {itemSelection.arb}
                          {HARAKAT[HARAKAT_TYPE[selectedHarokat]]}
                        </Text>
                      )}
                    </Animatable.Text>
                    <Animatable.Text
                      ref={ref => (this.hijaiyahAr = ref)}
                      style={[
                        styles.arabicText,
                        {
                          fontSize:
                            heightJman *
                            0.35 *
                            0.65 *
                            CUSTOM_STYLE[itemSelection.id || 1].f,
                          color: COLOR[(itemSelection.id || 1) % 6],
                          lineHeight:
                            heightJman *
                            0.35 *
                            0.925 *
                            CUSTOM_STYLE[itemSelection.id || 1].lh,
                          position: "absolute",
                          width: "100%",
                          justifyContent: "center"
                        }
                      ]}
                    >
                      {itemSelection.arb}
                    </Animatable.Text>
                  </View>
                )}
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Button
          disabled={state !== 0}
          style={{
            position: "absolute",
            left: heightJman * 0.26,
            bottom: heightJman * 0.05,
            width: heightJman * 0.17 * 1.018018018018018,
            height: heightJman * 0.17
          }}
          onPress={twit}
        >
          <Image
            source={ImagesPath.img.play.soundIcon}
            style={styles.imageContain}
          />
        </Button>

        {selectedHijaiyah === -1 &&
          question.map((e, i) => (
            <Button
              key={"HijaiyahSelection-" + i}
              onPress={() => onSelectHijaiyah(i)}
              animation={"bounceIn"}
              duration={1000}
              delay={50 * i}
              style={{
                position: "absolute",
                left: -heightJman * 0.05,
                top: heightJman * 0.25 + heightJman * 0.177 * i,
                width: heightJman * 0.158,
                height: heightJman * 0.158
                // borderWidth: 1
              }}
            >
              <ImageBackground
                source={ImagesPath.img.play.paper}
                style={styles.imageContain}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily:
                      Platform.OS === "android"
                        ? "Uthman"
                        : "KFGQPCUthmanTahaNaskh-Bold",
                    textAlignVertical: "center",
                    fontSize:
                      heightJman * 0.158 * 0.65 * CUSTOM_STYLE[e.id || 1].f,
                    color: COLOR[(e.id || 1) % 6],
                    lineHeight:
                      heightJman * 0.158 * 0.925 * CUSTOM_STYLE[e.id || 1].lh
                  }}
                >
                  {e.arb}
                </Text>
              </ImageBackground>
            </Button>
          ))}

        {selectedHijaiyah !== -1 &&
          selectedHarokat === -1 &&
          HarakatSource.map((e, i) => (
            <Button
              key={"HarakatSelection-" + i}
              onPress={() => onSelectHarokat(i)}
              animation={"bounceIn"}
              duration={1000}
              delay={50 * i}
              style={{
                position: "absolute",
                right: -heightJman * 0.05,
                top: heightJman * 0.25 + heightJman * 0.177 * i,
                width: heightJman * 0.158,
                height: heightJman * 0.158
              }}
            >
              <Image source={e} style={styles.imageContain} />
            </Button>
          ))}
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
