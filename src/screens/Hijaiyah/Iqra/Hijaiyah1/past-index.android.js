import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  Easing
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { Button } from "../../components/index"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"

const { HURUF, COLOR } = HIJAIYAH
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

const CUSTOM_STYLE = {
  "1": { "f": 1.1, "y": -.15 }, //alif
  "2": { "f": 1, "y": .01 }, //ba
  "3": { "f": 1, "y": .01 }, //ta 
  "4": { "f": 1, "y": .01 }, //sa
  "5": { "f": .9, "y": .2 }, //jim
  "6": { "f": .9, "y": .2 }, //ha 
  "7": { "f": .9, "y": .15 }, //kho
  "8": { "f": 1.1, "y": -0.1 },
  "9": { "f": 1.1, "y": -0.1 }, //dal
  "10": { "f": 1, "y": .10 },
  "11": { "f": 1, "y": .10 }, //zayn
  "12": { "f": 1, "y": .1 }, //sin
  "13": { "f": .9, "y": .1 }, //shin
  "14": { "f": .9, "y": .1 }, //sad
  "15": { "f": .9, "y": .1 }, //dad
  "16": { "f": 1, "y": -.1 }, //ta
  "17": { "f": 1, "y": -.1 }, //za
  "18": { "f": .85, "y": .2 }, //ain
  "19": { "f": .8, "y": .2 }, // gain
  "20": { "f": .95, "y": -.05 }, //fa
  "21": { "f": 1, "y": -.01 }, //kof
  "22": { "f": 1, "y": -.1 }, //kaf
  "23": { "f": 1, "y": -.01 }, //lam
  "24": { "f": .85, "y": .2 }, //mim
  "25": { "f": 1, "y": -.01 }, //nun
  "26": { "f": 1.1, "y": .07}, //wau 
  "27": { "f": 1, "y": -.01 },
  "28": { "f": 1, "y": -.1 },
  "29": { "f": 1, "y": .01 },
  "30": { "f": 1, "y": .10 }
}

export default class Hijaiyah1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      popup: false,
      help: false
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
      }
    }); 
  }

  navHijaiyah = (type) => {
    let { selected } = this.state
    let nextHijaiyah

    if(type === 'NEXT') {
      nextHijaiyah = selected + 1
    } else if(type === 'PREV') {
      nextHijaiyah = selected - 1
    }

    if(nextHijaiyah < 0) {
      nextHijaiyah = HURUF.length - 1
    } else 
    if (nextHijaiyah >= HURUF.length) {
      nextHijaiyah = 0
    }

    this.hijaiyahLtn.zoomIn(300)

    this.setState({ selected: nextHijaiyah }, this.twit)
  }

  hijaiyahPressed = () => {
    this.hijaiyahAr.jello(1500)
  }

  render() {
    let { selected, help } = this.state
    let itemSelected = HURUF[selected]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={{ flex: 1 }} 
          source={ImagesPath.img.iqra.background} 
          resizeMode={'stretch'}>
         
          <View style={styles.header} >

            <Animatable.Image 
              useNativeDriver={true}
              delay={500}
              duration={1200}
              animation={'zoomIn'}
              source={ImagesPath.img.iqra.headingHijaiyah1} 
              style={styles.headerImg} 
            />

            <Button
              animation={getAnimationY(1, 1, -200, 0)}
              onPress={() => this.props.navigation.goBack()}
              useNativeDriver={true}
              style={styles.navLeft }
            >
              <Image 
                source={ImagesPath.img.iqra.backIcon} 
                style={styles.buttonImg} 
              />
            </Button>

            <Button
              animation={getAnimationY(1, 1, -200, 0)}
              onPress={()=>this.setState({ help: true })}
              useNativeDriver={true}
              style={styles.navRight}
            >
              <Image 
                source={ImagesPath.img.iqra.helpIcon} 
                style={styles.buttonImg} 
              />
            </Button>
   
          </View>

          <View style={styles.wrapper}>
          
            <Button
              delay={1200}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.navHijaiyah('PREV')}
              useNativeDriver={true}
              style={styles.arrowIcon}
            >
              <Image 
                source={ImagesPath.img.iqra.arrowLeftIcon} 
                style={styles.buttonImg} 
              />
            </Button>
              
            <Animatable.View 
              duration={500}
              animation={'bounceIn'}
              easing={'ease-in'} 
              style={styles.hijaiyahWrapper}
            >
              <ImageBackground style={styles.hijaiyahPaper} source={ImagesPath.img.iqra.paperSlide} resizeMode={'contain'}>
                <TouchableWithoutFeedback onPress={this.hijaiyahPressed} >
                  <Animatable.Text 
                    ref={(element) => this.hijaiyahAr = element} 
                    onPress={this.twit}
                    style={[styles.hijaiyahArabText, { 
                      fontSize: widthPercentageToDP(45) * CUSTOM_STYLE[itemSelected.id].f, 
                      lineHeight: widthPercentageToDP(60), 
                      bottom: widthPercentageToDP(60)  * CUSTOM_STYLE[itemSelected.id].y,
                      left: -20, 
                      color: COLOR[itemSelected.id % 5] 
                    }]}
                  >
                    {itemSelected.arb+' '}
                  </Animatable.Text>
                </TouchableWithoutFeedback>
                <Animatable.View ref={(element) => this.hijaiyahLtn = element} style={styles.hijaiyahLatin} >
                  <Text style={styles.hijaiyahLatinText} >{itemSelected.trs.toLowerCase()}</Text>
                </Animatable.View>
              </ImageBackground>
            </Animatable.View>

            <Button
              delay={1200}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.navHijaiyah('NEXT')}
              useNativeDriver={true}
              style={styles.arrowIcon}
            >
              <Image 
                source={ImagesPath.img.iqra.arrowRightIcon} 
                style={styles.buttonImg} 
              />
            </Button>

          </View>

        </ImageBackground>

        <Modal visible={help} transparent={true} onRequestClose={()=>this.setState({ help: false })} animationType={"fade"}>
          <View style={styles.modalBG}/>

          <View style={styles.modalWrapper}>
            <View style={styles.modalPaper}>
              <View style={{ flex: .34, justifyContent: 'center' }}>
                <Image 
                  source={ImagesPath.img.iqra.headingHijaiyah1} 
                  style={{
                    top: heightPercentageToDP(3),
                    width: null,
                    height: heightPercentageToDP(6.3),
                    resizeMode: 'contain'
                  }} 
                />
              </View>
              <View style={{ flex: .66 }}>
                <Text style={{ color: '#333', textAlign: 'center', fontFamily: 'crayon_kids', fontSize: widthPercentageToDP(4.7), letterSpacing: -.1, lineHeight: widthPercentageToDP(5.5) }}> 
                  {`Hijaiyah or Arabic abjad is the\n Arabic script as it is codified for\n writing the Arabic language.\n It is written from right to left,\n in a cursive style, and includes\n 30 letters.`}                 
                </Text>
              </View>

              <Button 
                onPress={()=>this.setState({ help: false })}
                style={{ position: 'absolute', top: -widthPercentageToDP(5), right: -widthPercentageToDP(5), width: widthPercentageToDP(13.6), height: widthPercentageToDP(13.6) }}>
                <Image 
                  source={ImagesPath.img.iqra.closeModalIcon} 
                  style={styles.buttonImg} 
                />
              </Button>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    )
  }
}

