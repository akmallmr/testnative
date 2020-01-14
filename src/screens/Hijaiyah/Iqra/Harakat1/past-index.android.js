import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound';
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { Button, HelpModal } from "../../components/index"
import styles from "./styles"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"

const { COLOR, HARAKAT, HARAKAT_LATIN } = HIJAIYAH
const FILTER = [28, 29]
const HURUF = HIJAIYAH.HURUF.filter(e => !(FILTER.includes(e.id)))
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
  "1": { "f": 1.1, "lh": 1.2 }, // alif
  "2": { "f": 1.05, "lh": 1.05 }, //ba
  "3": { "f": 1.05, "lh": 1.12 }, //ta 
  "4": { "f": 1.05, "lh": 1.12 }, //sa
  "5": { "f": 1, "lh": 1 }, //ja
  "6": { "f": 1, "lh": 1 }, //ha
  "7": { "f": .9, "lh": 1 }, //kha
  "8": { "f": 1.2, "lh": 1.2 }, //da
  "9": { "f": 1.1, "lh": 1.22 }, //zal
  "10": { "f": 1, "lh": 1 }, //ra
  "11": { "f": 1, "lh": 1 }, //za
  "12": { "f": .9, "lh": 1 }, //sa
  "13": { "f": .9, "lh": 1 }, //sha
  "14": { "f": .9, "lh": 1 }, //sa
  "15": { "f": .9, "lh": 1 }, //da
  "16": { "f": 1.2, "lh": 1.22 }, //ta
  "17": { "f": 1.15, "lh": 1.22 }, //zad
  "18": { "f": .9, "lh": 1 }, //ain
  "19": { "f": .85, "lh": 1 },
  "20": { "f": 1, "lh": 1.2 }, //fa
  "21": { "f": 1, "lh": 1.07 },
  "22": { "f": 1.2, "lh": 1.23 },
  "23": { "f": 1, "lh": 1.1 },
  "24": { "f": 1, "lh": 1 },
  "25": { "f": 1.1, "lh": 1.1 },
  "26": { "f": 1.1, "lh": 1 },
  "27": { "f": 1.1, "lh": 1.1 },
  "28": { "f": 1.2, "lh": 1.2 },
  "29": { "f": 1.05, "lh": 1.15 },
  "30": { "f": 1, "lh": .98 }
}

export default class Harakat1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      selectedHarakat: 'fathah',
      help: false
    }
  }

  navHijaiyah = (type) => {
    let { selected } = this.state
    let nextHijaiyah

    // console.log({HURUF})

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
    this.twit()
  }

  twit = () => {
    let { selected, selectedHarakat } = this.state
    let itemSelected = HURUF[selected]
    let sound = SoundsPath.harakat[selectedHarakat][itemSelected.id]
    
    const s = new Sound(sound, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        s.play(() => s.stop().release());
      }
    }); 
  }

  render() {
    let { selected, selectedHarakat, help } = this.state
    let itemSelected = HURUF[selected]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground 
            style={{ flex: 1 }} 
            source={ImagesPath.img.iqra.background} 
            resizeMode={'stretch'}>
         
          <View style={styles.header} >

            <Animatable.Image 
              useNativeDriver={true}
              delay={500}
              duration={1200}
              animation={'zoomIn'}
              source={ImagesPath.img.iqra.headingHarakat1} 
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
                    style={[styles.hijaiyahArabText, { 
                      position: 'absolute',
                      top: 0, 
                      left: 0, 
                      right: 0,
                      bottom: 0,
                      fontSize: widthPercentageToDP(35) * CUSTOM_STYLE[itemSelected.id].f, 
                      lineHeight: widthPercentageToDP(50) * CUSTOM_STYLE[itemSelected.id].lh, 
                      bottom: widthPercentageToDP(11), 
                      color: COLOR[itemSelected.id % 6] 
                    }]}
                  >
                    {'' + itemSelected.arb + HARAKAT[selectedHarakat]} 
                    {/* <Text style={{ color: COLOR[selectedHarakat === 'fathah' ? 0 : selectedHarakat === 'kasrah' ? 1 : 2 ] }}>{HARAKAT[selectedHarakat] + ' '}</Text> */}
                  </Animatable.Text>
                </TouchableWithoutFeedback>
                <Animatable.View ref={(element) => this.hijaiyahLtn = element} style={styles.hijaiyahLatin} >
                  <Text style={styles.hijaiyahLatinText} >{itemSelected.ltn+HARAKAT_LATIN[selectedHarakat]}</Text>
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

          <View 
            style={{ 
              height: heightPercentageToDP(9.6), 
              marginBottom: heightPercentageToDP(3), 
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >

            <Button
              style={{ width: heightPercentageToDP(9.6) * 1.358695652173913, height: heightPercentageToDP(9.6), marginHorizontal: widthPercentageToDP(1) }}
              onPress={() => this.setState({ selectedHarakat: 'dhammah' }, this.twit)}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.dammah[selectedHarakat === 'dhammah' ? 'active' : 'normal']} />
            </Button>

            <Button
              style={{ width: heightPercentageToDP(9.6) * 1.358695652173913, height: heightPercentageToDP(9.6), marginHorizontal: widthPercentageToDP(1) }}
              onPress={() => this.setState({ selectedHarakat: 'kasrah' }, this.twit)}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.kasrah[selectedHarakat === 'kasrah' ? 'active' : 'normal']} />
            </Button>

            <Button
              style={{ width: heightPercentageToDP(9.6) * 1.358695652173913, height: heightPercentageToDP(9.6), marginHorizontal: widthPercentageToDP(1) }}
              onPress={() => this.setState({ selectedHarakat: 'fathah' }, this.twit)}
              animation={'bounceIn'}
              duration={1200}
              useNativeDriver={true}
            >
              <Image style={styles.buttonImg} source={ImagesPath.img.iqra.harakat.fathah[selectedHarakat === 'fathah' ? 'active' : 'normal']} />
            </Button>
          </View>

        </ImageBackground>

        <HelpModal 
          visible={help} 
          close={()=>this.setState({ help: false })}
        />

      </SafeAreaView>
    )
  }
}


