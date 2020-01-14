import React, { Component, PureComponent } from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback
} from "react-native"
import PropTypes from "prop-types"
import Sound from "react-native-sound"
import * as Animatable from "react-native-animatable"
import Metrics from "../../utils/Metrics"
import Color from "../../styles/colors"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/Responsive"
import { ImagesPath } from "../../constants/index"
import { Button } from "./components/index"

const getAnimationY = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}
const getAnimationX = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateX: fromPos },
    to: { opacity: toOpacity, translateX: toPos }
  }
}

export default class Hijaiyah extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          style={{ flex: 1 }}
          source={ImagesPath.img.hijaiyah.background}
          resizeMode="cover"
        >
          <View
            style={{
              height: heightPercentageToDP(18.5),
              justifyContent: "flex-end"
            }}
          >
            <Animatable.Image
              useNativeDriver={true}
              delay={2200}
              duration={500}
              easing="ease-out"
              animation={getAnimationY(1, 1, -200, 0)}
              source={ImagesPath.img.hijaiyah.logo}
              style={{
                width: null,
                height: heightPercentageToDP(15),
                resizeMode: "contain"
              }}
            />

            <Button
              animationType={"bounceIn"}
              onPress={() => this.props.navigation.pop()}
              useNativeDriver={true}
              style={styles.homeIcon}
            >
              <Animatable.Image
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={"bounceIn"}
                source={ImagesPath.img.iqra.mainAppIcon}
                style={styles.buttonImg}
              />
            </Button>
          </View>

          <View
            style={{
              height: heightPercentageToDP(18),
              justifyContent: "flex-end"
            }}
          >
            <Animatable.Image
              useNativeDriver={true}
              delay={500}
              duration={1200}
              animation={"zoomIn"}
              source={ImagesPath.img.hijaiyah.heading}
              style={{
                width: null,
                height: heightPercentageToDP(15.3),
                resizeMode: "contain"
              }}
            />
          </View>

          <View
            style={{
              paddingTop: heightPercentageToDP(0.5),
              height: heightPercentageToDP(19.5),
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Button
              animationType={"bounceIn"}
              onPress={() => this.props.navigation.push("Iqra")}
              useNativeDriver={true}
              style={{
                width: heightPercentageToDP(19),
                height: heightPercentageToDP(19)
              }}
            >
              <Animatable.Image
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={"bounceIn"}
                source={ImagesPath.img.hijaiyah.iqra}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "contain"
                }}
              />
            </Button>
            <View style={{ width: heightPercentageToDP(1) }} />
            <Button
              animationType={"bounceIn"}
              onPress={() => this.props.navigation.push("Play")}
              useNativeDriver={true}
              style={{
                width: heightPercentageToDP(19),
                height: heightPercentageToDP(19)
              }}
            >
              <Animatable.Image
                useNativeDriver={true}
                delay={1400}
                duration={1200}
                animation={"bounceIn"}
                source={ImagesPath.img.hijaiyah.play}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "contain"
                }}
              />
            </Button>
          </View>

          <View style={styles.characterContainer}>
            <Animatable.Image
              useNativeDriver={true}
              delay={1800}
              duration={800}
              easing="ease-out"
              animation={getAnimationX(1, 1, -250, 0)}
              source={ImagesPath.img.hijaiyah.jboy}
              style={styles.characterJBoy}
            />
            <Animatable.Image
              useNativeDriver={true}
              delay={1800}
              duration={800}
              easing="ease-out"
              animation={getAnimationX(1, 1, 250, 0)}
              source={ImagesPath.img.hijaiyah.jgirl}
              style={styles.characterJGirl}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  characterContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  characterJBoy: {
    width: heightPercentageToDP(43.5) * 0.7266187050359713,
    height: heightPercentageToDP(43.5),
    resizeMode: "contain"
  },
  characterJGirl: {
    width: heightPercentageToDP(40.7) * 0.5943877551020408,
    height: heightPercentageToDP(40.7),
    resizeMode: "contain"
  },
  homeIcon: {
    position: "absolute",
    top: widthPercentageToDP(5),
    left: widthPercentageToDP(5),
    width: heightPercentageToDP(6.5),
    height: heightPercentageToDP(6.5)
  },
  buttonImg: { flex: 1, width: null, height: null, resizeMode: "contain" }
})
