import React, { Component } from "react"
import {
  View,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { connect } from "react-redux"
import { HijaiyahHelp, Button } from "../components/index"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"
import PaperSlide from "./PaperSlide"

const { HURUF } = HIJAIYAH
const getAnimationY = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}

class Hijaiyah1 extends Component {
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
        s.setVolume(10)
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

    this.hijaiyahLtn && this.hijaiyahLtn.zoomIn(300)

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
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.iqra.background} resizeMode={'cover'}>
         
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

            <PaperSlide 
              data={itemSelected}
              navHijaiyah={this.navHijaiyah}
              twit={this.twit}
            />
          </View>

        </ImageBackground>

        <HijaiyahHelp 
          visible={help} 
          language={this.props.lang}
          source={ImagesPath.img.iqra.helpImage.dammah}
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
)(Hijaiyah1)
