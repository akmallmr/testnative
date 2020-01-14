import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Modal
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { Button } from "../../components/index"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { ImagesPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"

const { HURUF, COLOR } = HIJAIYAH

const STYLE_ITEM = {
  "1": { "f": 1.1, "lh": 1.2 },
  "2": { "f": 1.2, "lh": 1.08 },
  "3": { "f": 1.3, "lh": 1.25 },
  "4": { "f": 1.3, "lh": 1.25 },
  "5": { "f": 1.15, "lh": 0.97 },
  "6": { "f": 1.1, "lh": 0.95 },
  "7": { "f": 1.05, "lh": 0.95 },
  "8": { "f": 1.2, "lh": 1.2 },
  "9": { "f": 1.1, "lh": 1.22 },
  "10": { "f": 1.2, "lh": 1 },
  "11": { "f": 1.1, "lh": 1 },
  "12": { "f": 1.2, "lh": 1 },
  "13": { "f": 1, "lh": 1 },
  "14": { "f": 1.1, "lh": 1 },
  "15": { "f": 1.1, "lh": 1 },
  "16": { "f": 1.3, "lh": 1.3 },
  "17": { "f": 1.3, "lh": 1.3 },
  "18": { "f": 1, "lh": 0.9 },
  "19": { "f": 0.95, "lh": 0.95 },
  "20": { "f": 1.2, "lh": 1.3 },
  "21": { "f": 1.3, "lh": 1.2 },
  "22": { "f": 1.4, "lh": 1.4 },
  "23": { "f": 1.25, "lh": 1.2 },
  "24": { "f": 1.3, "lh": 1 },
  "25": { "f": 1.3, "lh": 1.15 },
  "26": { "f": 1.4, "lh": 1.05 },
  "27": { "f": 1.4, "lh": 1.3 },
  "28": { "f": 1.3, "lh": 1.3 },
  "29": { "f": 2, "lh": 1.5 },
  "30": { "f": 1.2, "lh": 1  }
}

export default class PaperSlide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heightPaper: 0
    }
  }

  componentWillReceiveProps(nextProps){

  }

  onLayout = (data) => {
    this.state.height === null & this.setState({ height: data.nativeEvent.layout.height })
  }

  render() {
    let { data, visible, twit } = this.props
    let heightPaper = this.state.height

    return (
      <Modal visible={visible} transparent={true} animationType={"fade"}>
        <View style={styles.modalBG}/>
        <View style={styles.modalWrapper}>
          <Animatable.View 
            onLayout={this.onLayout}
            duration={500}
            animation={'bounceIn'}
            easing={'ease-in'} 
            style={styles.modalPaper}
            onAnimationEnd={twit}
          >
            <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.iqra.paperPopup} resizeMode={'contain'}>
              <Text
                style={[styles.modalHijaiyahText, {
                  fontSize: heightPaper * .65 * STYLE_ITEM[data.id].f, 
                  lineHeight: heightPaper * .9 * STYLE_ITEM[data.id].lh, 
                  color: COLOR[data.id % 6] 
                }]}
              >
                {'' + data.arb} 
              </Text>
              <View style={[styles.modalTransliteration, { height: heightPaper * .18 }]}>
                <Text style={[styles.modalTransliterationText, { fontSize: heightPaper * .08 }]} >
                  {data.trs}
                </Text>
              </View>
            </ImageBackground>
          </Animatable.View>
        </View>
      </Modal>  
    )
  }
}