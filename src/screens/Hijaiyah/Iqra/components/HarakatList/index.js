import React, { Component } from "react"
import { Text, View, ImageBackground, StyleSheet, Platform } from "react-native"
import * as Animatable from "react-native-animatable"

import { Button } from "../../../components/index"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../../constants/index"
const { HURUF, COLOR } = HIJAIYAH

const STYLE_ITEM = {
  "1": { f: 1.1, lh: 1.2 },
  "2": { f: 1.2, lh: 1.08 },
  "3": { f: 1.3, lh: 1.25 },
  "4": { f: 1.3, lh: 1.25 },
  "5": { f: 1.15, lh: 0.97 },
  "6": { f: 1.1, lh: 0.95 },
  "7": { f: 1.05, lh: 0.95 },
  "8": { f: 1.2, lh: 1.2 },
  "9": { f: 1.1, lh: 1.22 },
  "10": { f: 1.2, lh: 1 },
  "11": { f: 1.1, lh: 1 },
  "12": { f: 1.2, lh: 1 },
  "13": { f: 1, lh: 1 },
  "14": { f: 1.1, lh: 1 },
  "15": { f: 1.1, lh: 1 },
  "16": { f: 1.3, lh: 1.3 },
  "17": { f: 1.3, lh: 1.3 },
  "18": { f: 1, lh: 0.9 },
  "19": { f: 0.95, lh: 0.95 },
  "20": { f: 1.2, lh: 1.3 },
  "21": { f: 1.3, lh: 1.2 },
  "22": { f: 1.4, lh: 1.4 },
  "23": { f: 1.25, lh: 1.2 },
  "24": { f: 1.3, lh: 1 },
  "25": { f: 1.3, lh: 1.15 },
  "26": { f: 1.4, lh: 1.05 },
  "27": { f: 1.4, lh: 1.3 },
  "28": { f: 1.3, lh: 1.3 },
  "29": { f: 2, lh: 1.5 },
  "30": { f: 1.2, lh: 1 }
}

const ANDROID_STYLE_ITEM = {
  "1": { f: 1.1, lh: 1.27 }, // alif
  "2": { f: 1.05, lh: 1.1 }, //ba
  "3": { f: 1.05, lh: 1.19 }, //ta
  "4": { f: 1.05, lh: 1.19 }, //sa
  "5": { f: 1, lh: 0.9 }, //ja
  "6": { f: 1, lh: 0.9 }, //ha
  "7": { f: 0.9, lh: 0.8 }, //kha
  "8": { f: 1.2, lh: 1.27 }, //da
  "9": { f: 1.1, lh: 1.27 }, //zal
  "10": { f: 1, lh: 1 }, //ra
  "11": { f: 1, lh: 1.05 }, //za
  "12": { f: 0.9, lh: 1 }, //sa
  "13": { f: 0.9, lh: 1 }, //sha
  "14": { f: 0.9, lh: 1 }, //sa
  "15": { f: 0.9, lh: 1 }, //da
  "16": { f: 1.2, lh: 1.3 }, //ta
  "17": { f: 1.15, lh: 1.27 }, //zad
  "18": { f: 0.9, lh: 0.8 }, //ain
  "19": { f: 0.85, lh: 0.8 }, //gain
  "20": { f: 1, lh: 1.3 }, //fa
  "21": { f: 1, lh: 1 }, //kof
  "22": { f: 1.2, lh: 2 }, //kaf
  "23": { f: 1, lh: 1.15 }, //lam
  "24": { f: 1, lh: 0.9 }, //mim
  "25": { f: 1.1, lh: 1.2 }, //nun
  "26": { f: 1.1, lh: 0.9 }, //wau
  "27": { f: 1.1, lh: 1.2 },
  "28": { f: 1.2, lh: 1.2 },
  "29": { f: 1.05, lh: 1.15 },
  "30": { f: 1, lh: 1.03 }
}

export default class HarakatList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: null
    }
  }

  onLayout = data => {
    return (
      this.state.height === null &&
      this.setState({ height: data.nativeEvent.layout.height })
    )
  }

  render() {
    let { onPress } = this.props
    let height = this.state.height
    const FILTER = [28, 29]

    return HURUF.map((e, i) => {
      if (FILTER.includes(e.id)) return
      return (
        <View
          onLayout={this.onLayout}
          key={"HijaiyahListItem-" + e.id}
          style={styles.container}
        >
          <Button
            animationType={"bounceIn"}
            onPress={() => onPress(e)}
            useNativeDriver={true}
            style={styles.wrapperHijaiyah}
          >
            <Animatable.View
              useNativeDriver={true}
              delay={1200}
              duration={1200}
              animation={"bounceIn"}
              style={styles.hijaiyah}
            >
              <ImageBackground
                style={styles.hijaiyahBackground}
                source={ImagesPath.img.iqra.paperSmall}
                resizeMode={"contain"}
              >
                <Text
                  style={[
                    styles.hijaiyahText,
                    {
                      fontSize:
                        Platform.OS === "android"
                          ? height * 0.7 * ANDROID_STYLE_ITEM[e.id].f
                          : height * 0.7 * STYLE_ITEM[e.id].f,
                      lineHeight:
                        Platform.OS === "android"
                          ? height * 0.991 * ANDROID_STYLE_ITEM[e.id].lh
                          : height * 0.991 * STYLE_ITEM[e.id].lh,
                      color: COLOR[e.id % 6],
                      left: Platform.OS === "android" ? -3 : 0
                    }
                  ]}
                >
                  {e.arb}{" "}
                </Text>
              </ImageBackground>
            </Animatable.View>
          </Button>
        </View>
      )
    })
  }
}

const styles = StyleSheet.create({
  container: {
    margin: widthPercentageToDP(0.8),
    alignSelf: "center"
  },
  wrapperHijaiyah: {
    maxWidth: heightPercentageToDP(8.5),
    maxHeight: heightPercentageToDP(8.5),
    width: widthPercentageToDP(16),
    height: widthPercentageToDP(16),
    overflow: "hidden"
  },
  hijaiyah: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  hijaiyahBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hijaiyahText: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "Uthman" : "KFGQPCUthmanTahaNaskh-Bold"
  }
})
