import React, { Component } from "react"
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Platform
} from "react-native"
import * as Animatable from 'react-native-animatable'

import { Button } from "../../components/index"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"
const { HURUF, COLOR } = HIJAIYAH

const STYLE_ITEM = {
  "1": { "f": 1.1, "lh": 1.89 }, //alif
  "2": { "f": 1.2, "lh": 1.2 }, //ba
  "3": { "f": 1.3, "lh": 1.31 }, //ta
  "4": { "f": 1.3, "lh": 1.31 }, //
  "5": { "f": 1.15, "lh": 0.90 }, //ja
  "6": { "f": 1.1, "lh": 0.90 },
  "7": { "f": 1.05, "lh": 0.90 },
  "8": { "f": 1.2, "lh": 1.3 }, //dal
  "9": { "f": 1.1, "lh": 1.3 }, //zal
  "10": { "f": 1.2, "lh": 0.90 }, //ro
  "11": { "f": 1.1, "lh": 0.90 }, //za
  "12": { "f": 1.2, "lh": 0.90 }, //sin
  "13": { "f": 1, "lh": 0.90 },
  "14": { "f": 1.1, "lh": 0.90 },
  "15": { "f": 1.1, "lh": 0.90 }, //dad
  "16": { "f": 1.3, "lh": 1.6 }, //to
  "17": { "f": 1.3, "lh": 1.6 }, //za
  "18": { "f": 1, "lh": 0.90 }, //ain
  "19": { "f": 0.95, "lh": 0.90 }, //goin
  "20": { "f": 1.2, "lh": 1.5 }, //fa
  "21": { "f": 1.3, "lh": 1.2 }, //qof
  "22": { "f": 1.4, "lh": 2.2}, //kaf
  "23": { "f": 1.25, "lh": 1.3 }, //lam
  "24": { "f": 1.3, "lh": 0.90 }, //mim
  "25": { "f": 1.3, "lh": 1.2 }, //nun
  "26": { "f": 1.4, "lh": 1.1 },
  "27": { "f": 1.4, "lh": 1.3 }, //ha
  "28": { "f": 1.4, "lh": 1.3 }, //lamalif
  "29": { "f": 1.4, "lh": 1.3 }, //hamjah
  "30": { "f": 1.2, "lh": 1  } //ya
}

const FILTER = [28, 29]

export default HarakatList = (props) => {
  const { onPress } = props
  return  HURUF.map((e) => {
    if(FILTER.includes(e.id)) return
    return (<View key={'HijaiyahListItem'+e.id} style={styles.container}>
      <Button
        animationType={'bounceIn'}
        onPress={() => onPress(e.id, e)}
        useNativeDriver={true}
        style={styles.wrapperHijaiyah}
      >
        <Animatable.View
          useNativeDriver={true}
          delay={1200}
          duration={1200}
          animation={'bounceIn'}
          style={styles.hijaiyah} 
          >
          <ImageBackground style={styles.hijaiyahBackground} source={ImagesPath.img.iqra.paperSmall} resizeMode={'contain'}>
            <Text style={[styles.hijaiyahText, {
              fontSize: heightPercentageToDP(6) * STYLE_ITEM[e.id].f,
              lineHeight: heightPercentageToDP(8.5) * STYLE_ITEM[e.id].lh,
              left: -5,
              color: COLOR[e.id % 6]
            }]}>{e.arb} </Text>
          </ImageBackground>
        </Animatable.View>
      </Button>
    </View>)
  })
}

const styles = StyleSheet.create({
  container: {
    marginVertical: widthPercentageToDP(.8),
    marginHorizontal: widthPercentageToDP(2.2)
  },
  wrapperHijaiyah: {
    width: heightPercentageToDP(8.5),
    height: heightPercentageToDP(8.5),
    overflow: 'hidden'
  },
  hijaiyah: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  hijaiyahBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hijaiyahText: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'Uthman' : 'KFGQPCUthmanTahaNaskh-Bold'
  }
})