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
  "1": { "f": 1.1, "lh": 1.2 },
  "2": { "f": 1.2, "lh": 1.27 },
  "3": { "f": 1.3, "lh": 1.40 },
  "4": { "f": 1.3, "lh": 1.40 }, //sa
  "5": { "f": 1.15, "lh": 0.97 }, //jim
  "6": { "f": 1.1, "lh": 0.95 }, //kha
  "7": { "f": 1.05, "lh": 0.95 }, //kho
  "8": { "f": 1.2, "lh": 1.2 },
  "9": { "f": 1.1, "lh": 1.22 },
  "10": { "f": 1.2, "lh": 1 },
  "11": { "f": 1.1, "lh": 1 },
  "12": { "f": 1.2, "lh": 1 },
  "13": { "f": 1, "lh": 1 },
  "14": { "f": 1.1, "lh": 1 },
  "15": { "f": 1.1, "lh": 1 },
  "16": { "f": 1.3, "lh": 1.5 },
  "17": { "f": 1.3, "lh": 1.5 }, //dho
  "18": { "f": 1, "lh": 0.9 },
  "19": { "f": 0.95, "lh": 0.95 },
  "20": { "f": 1.2, "lh": 1.4 },
  "21": { "f": 1.3, "lh": 1.2 },
  "22": { "f": 1.4, "lh": 2.1 },
  "23": { "f": 1.25, "lh": 1.3 },
  "24": { "f": 1.3, "lh": 1 },
  "25": { "f": 1.3, "lh": 1.15 },
  "26": { "f": 1.4, "lh": 1.05 },
  "27": { "f": 1.4, "lh": 1.3 },
  "28": { "f": 1.3, "lh": 2 },
  "29": { "f": 2, "lh": 2 },
  "30": { "f": 1.2, "lh": 1  }
}

export default HijaiyahList = (props) => {
  const { onPress } = props

  return  HURUF.map((e) => (
    <View key={'HijaiyahListItem-'+e.id} style={styles.container}>
      <Button
        animationType={'bounceIn'}
        onPress={() => onPress(e.id - 1, e)}
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
              right: 5,
              color: COLOR[e.id % 6]
            }]}>{e.arb} </Text>
          </ImageBackground>
        </Animatable.View>
      </Button>
    </View>
  ))
}

const styles = StyleSheet.create({
  container: {
    margin: widthPercentageToDP(.8)
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