import React, { Component } from "react"
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
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { Button, HijaiyahList, HelpModal } from "../../components/index"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"

const { HURUF, COLOR } = HIJAIYAH
const CUSTOM_STYLE = {
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

export default class Hijaiyah2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      popup: false,
      help: false,
    }
  }

  twit = () => {
    let selected = this.state.selected
    let itemSelected = HURUF[selected]
    let sound = SoundsPath.hijaiyah[itemSelected.id]
    
    const s = new Sound(sound, (e) => {
      if (e) {      
        console.log('error', e);
        this.setState({ popup: false })
      } else {
        s.play(() => s.stop().release());
        setTimeout(() => {
          this.setState({ popup: false })
        }, 1000)
      }
    }); 
  }

  render() {
    let { selected, popup, help } = this.state
    let itemSelected = HURUF[selected]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground 
          style={{ flex: 1 }} 
          source={ImagesPath.img.iqra.background} 
          resizeMode={'stretch'}>
          <View style={styles.header}>

            <Animatable.Image 
              useNativeDriver={true}
              delay={500}
              duration={1200}
              animation={'zoomIn'}
              source={ImagesPath.img.iqra.headingHijaiyah2} 
              style={styles.headerImg} 
            />

            <Button
              animationType={'bounceIn'}
              onPress={() => this.props.navigation.goBack()}
              useNativeDriver={true}
              style={styles.navLeft}
            >
              <Animatable.Image 
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={'bounceIn'}
                source={ImagesPath.img.iqra.backIcon} 
                style={styles.buttonImg} 
              />
            </Button>

            <Button
              animationType={'bounceIn'}
              onPress={()=>this.setState({ help: true })}
              useNativeDriver={true}
              style={styles.navRight}
            >
              <Animatable.Image 
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={'bounceIn'}
                source={ImagesPath.img.iqra.helpIcon} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

          <View style={styles.wrapper}>
            <HijaiyahList 
              onPress={
                (key, item) => this.setState({ popup: true, selected: key })
              } 
            />
          </View>

        </ImageBackground>

        <Modal visible={popup} transparent={true} animationType={"fade"}>
          <View style={styles.modalBG}/>
          <View style={styles.modalWrapper}>
            <Animatable.View 
              duration={500}
              animation={'bounceIn'}
              easing={'ease-in'} 
              style={styles.modalPaper}
              onAnimationEnd={this.twit}
            >
              <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.iqra.paperPopup} resizeMode={'contain'}>
                <Text
                  style={[styles.modalHijaiyahText, {
                    fontSize: heightPercentageToDP(22) * CUSTOM_STYLE[itemSelected.id].f, 
                    lineHeight: widthPercentageToDP(56) * CUSTOM_STYLE[itemSelected.id].lh, 
                    bottom: heightPercentageToDP(7), 
                    color: COLOR[itemSelected.id % 6] 
                  }]}
                >
                  {'' + itemSelected.arb} 
                </Text>
                <View style={styles.modalTransliteration}>
                  <Text style={styles.modalTransliterationText} >
                    {itemSelected.trs}
                  </Text>
                </View>
              </ImageBackground>
            </Animatable.View>
          </View>
        </Modal>  

        <HelpModal 
          visible={help} 
          close={()=>this.setState({ help: false })}
        />

      </SafeAreaView>
    )
  }
}