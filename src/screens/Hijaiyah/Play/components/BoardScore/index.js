
import React, { Component } from "react"
import {
  Text,
  View,
  Image
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { widthPercentageToDP } from "../../../../../utils/Responsive"
import { ImagesPath } from "../../../../../constants/index"
import styles from "./styles"

const getAnimationX = (fromPos, toPos) => {
  return { 
    from: { translateX: fromPos }, 
    to: { translateX: toPos } 
  }
}

export default BoardScore = (props) => {
  let { time, score } = props
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animatable.View 
          duration={1500} 
          animation={getAnimationX(widthPercentageToDP(-50), 0)} 
          style={{ flexDirection: 'row' }}
        >
          <Image 
            source={ImagesPath.img.play.nav.timerIcon} 
            style={styles.imgIcon} 
          />
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.text}>{ time }</Text>
          </View>
        </Animatable.View>

        <Animatable.View 
          duration={1500} 
          animation={getAnimationX(widthPercentageToDP(50), 0)} 
          style={{ flexDirection: 'row' }}
        >
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.text}>{ score }</Text>
          </View>
          <Image 
            source={ImagesPath.img.play.nav.trueIcon} 
            style={styles.imgIcon} 
          />
        </Animatable.View>
      </View>
    </View>
  )
}