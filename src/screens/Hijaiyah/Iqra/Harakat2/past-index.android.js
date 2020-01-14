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
import { Button, HarakatList, HelpModal } from "../../components/index"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"

const { HURUF, COLOR, HARAKAT, HARAKAT_LATIN } = HIJAIYAH
const CUSTOM_STYLE = {
  "1": { "f": 1.1, "lh": 1.27}, // alif
  "2": { "f": 1.05, "lh": 1.1 }, //ba
  "3": { "f": 1.05, "lh": 1.19 }, //ta 
  "4": { "f": 1.05, "lh": 1.19 }, //sa
  "5": { "f": 1, "lh": 1.05 }, //ja
  "6": { "f": 1, "lh": 1.05 }, //ha
  "7": { "f": .9, "lh": 1.05 }, //kha
  "8": { "f": 1.2, "lh": 1.27 }, //da
  "9": { "f": 1.1, "lh": 1.27 }, //zal
  "10": { "f": 1, "lh": 1 }, //ra
  "11": { "f": 1, "lh": 1.05 }, //za
  "12": { "f": .9, "lh": 1 }, //sa
  "13": { "f": .9, "lh": 1 }, //sha
  "14": { "f": .9, "lh": 1 }, //sa
  "15": { "f": .9, "lh": 1 }, //da
  "16": { "f": 1.2, "lh": 1.3 }, //ta
  "17": { "f": 1.15, "lh": 1.27 }, //zad
  "18": { "f": .9, "lh": 1.05 }, //ain
  "19": { "f": .85, "lh": 1.05 },
  "20": { "f": 1, "lh": 1.3 }, //fa
  "21": { "f": 1, "lh": 1.1 },
  "22": { "f": 1.2, "lh": 1.28 },
  "23": { "f": 1, "lh": 1.15 },
  "24": { "f": 1, "lh": 1.1 },
  "25": { "f": 1.1, "lh": 1.2 },
  "26": { "f": 1.1, "lh": 1.07 },
  "27": { "f": 1.1, "lh": 1.15 },
  "28": { "f": 1.2, "lh": 1.2 },
  "29": { "f": 1.05, "lh": 1.15 },
  "30": { "f": 1, "lh": 1.03 }
}

export default class Harakat2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 1,
      selectedHarakat: 'fathah',
      popup: false,
      help: false,
    }
  }

  twit = () => {
    let { selected, selectedHarakat } = this.state
    let itemSelected = HURUF[selected-1]
    let sound = SoundsPath.harakat[selectedHarakat][itemSelected.id]
    
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
    let { selected, selectedHarakat, popup, help } = this.state
    let itemSelected = HURUF[selected-1]
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
              source={ImagesPath.img.iqra.headingHarakat2} 
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

          <View style={styles.harakat}>

            <Button
              style={styles.harakatItem}
              onPress={() => this.setState({ selectedHarakat: 'dhammah' })}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.dammah[selectedHarakat === 'dhammah' ? 'active' : 'normal']} />
            </Button>

            <Button
              style={styles.harakatItem}
              onPress={() => this.setState({ selectedHarakat: 'kasrah' })}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.kasrah[selectedHarakat === 'kasrah' ? 'active' : 'normal']} />
            </Button>

            <Button
              style={styles.harakatItem}
              onPress={() => this.setState({ selectedHarakat: 'fathah' })}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.fathah[selectedHarakat === 'fathah' ? 'active' : 'normal']} />
            </Button>
          </View>

          <View style={styles.wrapper}>  
            <HarakatList 
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
                    fontSize: widthPercentageToDP(35) * CUSTOM_STYLE[itemSelected.id].f,
                    lineHeight: widthPercentageToDP(50) * CUSTOM_STYLE[itemSelected.id].lh,
                    bottom: widthPercentageToDP(11),
                    color: COLOR[itemSelected.id % 6] 
                  }]}
                >
                  {'' + itemSelected.arb + HARAKAT[selectedHarakat]} 
                  {/* <Text style={{ color: COLOR[selectedHarakat === 'fathah' ? 0 : selectedHarakat === 'kasrah' ? 1 : 2 ] }}>{HARAKAT[selectedHarakat] + ' '}</Text> */}
                </Text>
                <View style={styles.modalTransliteration}>
                  <Text style={styles.modalTransliterationText} >
                    {itemSelected.ltn+HARAKAT_LATIN[selectedHarakat]}
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

