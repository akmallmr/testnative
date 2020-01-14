import React, { Component } from "react"
import {
  View,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound';
import { connect } from "react-redux"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { HarokatHelp, Button } from "../components/index"
import styles from "./styles"
import PaperSlide from "./PaperSlide"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"

const { HARAKAT_TYPE } = HIJAIYAH
const FILTER = [28, 29]
const HURUF = HIJAIYAH.HURUF.filter(e => !(FILTER.includes(e.id)))
const getAnimationY = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}

class Harakat1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      selectedHarokat: 0,
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

    // this.hijaiyahLtn.zoomIn(300)

    this.setState({ selected: nextHijaiyah }, this.twit)
  }

  hijaiyahPressed = () => {
    this.hijaiyahAr.jello(1500)
    this.twit()
  }

  twit = () => {
    let { selected, selectedHarokat } = this.state
    let itemSelected = HURUF[selected]
    let sound = SoundsPath.harakat[HARAKAT_TYPE[selectedHarokat]][itemSelected.id]
    
    const s = new Sound(sound, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        s.setVolume(10)
        s.play(() => s.stop().release());
      }
    }); 
  }

  render() {
    let { selected, selectedHarokat, help } = this.state
    let itemSelected = HURUF[selected]

    const HarakatSource = [ 
      ImagesPath.img.iqra.harakat.fathah, 
      ImagesPath.img.iqra.harakat.kasrah, 
      ImagesPath.img.iqra.harakat.dammah
    ]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.iqra.background} resizeMode={'cover'}>
         
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

            <PaperSlide 
              data={itemSelected}
              selectedHarokat={selectedHarokat}
              navHijaiyah={this.navHijaiyah}
              twit={this.twit}
            />
          
          </View>

          <View 
            style={{ 
              height: heightPercentageToDP(9.6), 
              marginBottom: heightPercentageToDP(3), 
              flexDirection: 'row-reverse',
              justifyContent: 'center',
            }}
          >
            { HarakatSource.map((e, i) => (
                <Button
                  key={"option-" + i}
                  style={{ width: heightPercentageToDP(9.6) * 1.358695652173913, height: heightPercentageToDP(9.6), marginHorizontal: widthPercentageToDP(1) }}
                  onPress={() => this.setState({ selectedHarokat: i }, this.twit)}
                  animation={'bounceIn'}
                  duration={1200}
                  useNativeDriver={true}
                >
                  <Image style={styles.buttonImg} source={e[selectedHarokat === i ? 'active' : 'normal']} />
                </Button>
              ))
            }
          </View>

        </ImageBackground>

        <HarokatHelp 
          visible={help} 
          language={this.props.lang}
          close={()=>this.setState({ help: false })}
        />

      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang,
})

export default connect(
  mapStateToProps,
  null
)(Harakat1)