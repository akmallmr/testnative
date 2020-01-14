import React, { Component } from "react"
import {
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { connect } from "react-redux"
import { HijaiyahList, HijaiyahHelp, Button } from "../components/index"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"
import PaperModal from "./PaperModal"

const { HURUF } = HIJAIYAH

class Hijaiyah2 extends Component {
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
        s.setVolume(10)
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
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.iqra.background} resizeMode={'cover'}>
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
        
        <PaperModal
           visible={popup}
           data={itemSelected}
           twit={this.twit}
        />

        <HijaiyahHelp 
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
)(Hijaiyah2)