import React, { Component } from "react"
import {
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  Modal,
  Image
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { connect } from "react-redux"

import { widthPercentageToDP, heightPercentageToDP } from "../../../utils/Responsive"
import { ImagesPath } from "../../../constants/index"
import { Button, ReportBoard } from "./components/index"
import styles from "./styles"

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reportModal: false
    }
  }

  

  render() {
    const { hijaiyah, lang, star } = this.props 
    console.log({ hijaiyah, lang, star })
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.hijaiyah.background} resizeMode={'cover'}>
          <View 
            style={{ 
              height: heightPercentageToDP(20.2), 
              justifyContent: 'flex-end',
              paddingBottom: heightPercentageToDP(3.4)
            }}
          >

            <Animatable.Image 
              useNativeDriver={true}
              delay={500}
              duration={400}
              animation={'zoomIn'}
              easing={'ease-out'}
              source={ImagesPath.img.play.heading} 
              style={{ 
                width: null,
                height: heightPercentageToDP(10.1), 
                resizeMode: 'contain'
              }} 
            />

            <Button
              useNativeDriver={true}
              delay={1200}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.pop()}
              useNativeDriver={true}
              style={styles.homeIcon}
            >
              <Image 
                source={ImagesPath.img.iqra.homeIcon} 
                style={styles.buttonImg} 
              />
            </Button>

            <Button
              useNativeDriver={true}
              delay={1200}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.setState({ reportModal: true })}
              useNativeDriver={true}
              style={styles.reportIcon}
            >
              <Image 
                source={ImagesPath.img.play.navIcon.report} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              delay={800}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Hijaiyah1')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.hijaiyah1} 
                style={styles.buttonImg} 
              />
            </Button>
            <View style={{ width: widthPercentageToDP(7) }} />
            <Button
              delay={850}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Hijaiyah2')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.hijaiyah2} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              delay={900}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Harakat1')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.harokat1} 
                style={styles.buttonImg} 
              />
            </Button>
            <View style={{ width: widthPercentageToDP(7) }} />
            <Button
              delay={950}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Harakat2')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.harokat2} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              delay={900}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Tanwin1')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.tanwin1} 
                style={styles.buttonImg} 
              />
            </Button>
            <View style={{ width: widthPercentageToDP(7) }} />
            <Button
              delay={950}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Tanwin2')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.play.itemIcon.tanwin2} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

        </ImageBackground>
        
        <Modal
          visible={this.state.reportModal}
          transparent={true}
          onRequestClose={() => this.setState({ reportModal: false })}
        >
         <View style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: .4
          }}/>
          <ReportBoard 
            hijaiyah={hijaiyah} 
            language={lang} 
            close={() => this.setState({ reportModal: false })}
          />
        </Modal>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang,
  hijaiyah: state.hijaiyah,
  star: Object.keys(state.hijaiyah).reduce((g, i) => {
    g += state.hijaiyah[i].star
    return g
  }, 0)
})

export default connect(
  mapStateToProps,
  null
)(Play)