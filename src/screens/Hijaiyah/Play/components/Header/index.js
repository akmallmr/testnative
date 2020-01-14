
import React, { Component } from "react"
import {
  View,
  Image,
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { Button } from "../index"
import { heightPercentageToDP } from "../../../../../utils/Responsive"
import styles from "./styles"

const getAnimationY = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}

export default HeaderPlay = (props) => {
  let { headerSource, leftButton, rightButton } = props

  return (
    <View style={styles.container} >

      <Animatable.Image 
        useNativeDriver={true}
        animation={getAnimationY(1, 1, heightPercentageToDP(-15), 0)}
        source={headerSource} 
        style={styles.headerImg} 
      />

      { leftButton &&
        <Button
          animation={getAnimationY(1, 1, -200, 0)}
          onPress={leftButton.onPress}
          useNativeDriver={true}
          style={styles.navLeft}
        >
          <Image 
            source={leftButton.source} 
            style={styles.imageContain} 
          />
        </Button>
      }

      { rightButton &&
        <Button
          animation={getAnimationY(1, 1, -200, 0)}
          onPress={rightButton.onPress}
          useNativeDriver={true}
          style={styles.navRight}
        >
          <Image 
            source={rightButton.source} 
            style={styles.imageContain} 
          />
        </Button>  
      }

    </View>
  )
}