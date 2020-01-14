import React, { Component } from "react"
import {
  View,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { connect } from "react-redux"
import { HarakatList, TanwinHelp, Button } from "../components/index"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"
import PaperModal from "./PaperModal"

const { TANWIN_TYPE } = HIJAIYAH

class Tanwin2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: { "id": 1, "arb": "ا", "uni": "\u0627", "ltn": "", "trs": "alif" },
      selectedHarokat: 0,
      popup: false,
      help: false,
    }
  }
  

  twit = () => {
    let { item, selectedHarokat } = this.state
    let sound = SoundsPath.harakat[TANWIN_TYPE[selectedHarokat]][item.id]
    
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
    let { item, selectedHarokat, popup, help } = this.state
    const HarakatSource = [ 
      ImagesPath.img.iqra.harakat.fathatain, 
      ImagesPath.img.iqra.harakat.kasratain, 
      ImagesPath.img.iqra.harakat.dammatain
    ]

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
              source={ImagesPath.img.iqra.headingTanwin2} 
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
            { HarakatSource.map((e, i) => (
                <Button
                  key={"option-" + i}
                  style={styles.harakatItem}
                  onPress={() => this.setState({ selectedHarokat: i })}
                  animation={'bounceIn'}
                  duration={1200}
                  useNativeDriver={true}
                >
                  <Image style={styles.buttonImg} source={e[selectedHarokat === i ? 'active' : 'normal']} />
                </Button>
              ))
            }
          </View>

          <View style={styles.wrapper}>
            <HarakatList 
              onPress={(item) => this.setState({ popup: true, item: item })} 
            />
          </View>

        </ImageBackground>

        <PaperModal 
          visible={popup}
          data={item}
          selectedHarokat={selectedHarokat}
          twit={this.twit}
        />

        <TanwinHelp 
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
)(Tanwin2)