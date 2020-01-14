import React, { Component } from "react"
import {
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/Responsive"
import { ImagesPath } from "../../constants/index"
import { Button } from "./components/index"
import { connect } from "react-redux"

import { bindActionCreators } from "redux"
import * as HijaiyahActions from "../../models/hijaiyah/actions"

import styles from "./styles"

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

class Hijaiyah extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
    console.log({props})
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() { 

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.hijaiyah.background} resizeMode={'cover'}>
          <View style={styles.header}>
            <Animatable.Image 
              useNativeDriver={true}
              delay={2200}
              duration={500}
              easing="ease-out"
              animation={getAnimationY(1, 1, -200, 0)}
              source={ImagesPath.img.hijaiyah.logo} 
              style={styles.logo} 
            />
            
            <Button
              animationType={'bounceIn'}
              onPress={() => this.props.navigation.pop()}
              useNativeDriver={true}
              style={styles.homeIcon}
            >
              <Animatable.Image 
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={'bounceIn'}
                source={ImagesPath.img.iqra.mainAppIcon} 
                style={styles.imageContain} 
              />
            </Button>
          </View>

          <View 
            style={styles.hijaiyahHeader} >
            <Animatable.Image 
              useNativeDriver={true}
              delay={500}
              duration={1200}
              animation={'zoomIn'}
              source={ImagesPath.img.hijaiyah.heading} 
              style={styles.hijaiyahHeaderImage} 
            />
          </View>

          <View style={styles.menuContainer} >

            <Button
              animationType={'bounceIn'}
              onPress={() => this.props.navigation.push('Iqra')}
              useNativeDriver={true}
              style={styles.menuButton}
            >
              <Animatable.Image 
                useNativeDriver={true}
                delay={1200}
                duration={1200}
                animation={'bounceIn'}
                source={ImagesPath.img.hijaiyah.iqra} 
                style={styles.imageContain} 
              />
            </Button>
            <View style={{ width: heightPercentageToDP(1) }} />
            <Button
              animationType={'bounceIn'}
              onPress={() => this.props.navigation.push('Play')}
              useNativeDriver={true}
              style={styles.menuButton}
            >
              <Animatable.Image 
                useNativeDriver={true}
                delay={1400}
                duration={1200}
                animation={'bounceIn'}
                source={ImagesPath.img.hijaiyah.play} 
                style={styles.imageContain} 
              />
            </Button>
          </View>

          <View style={styles.characterContainer}>
            <Animatable.Image 
              useNativeDriver={true}
              delay={1800}
              duration={800}
              easing="ease-out"
              animation={getAnimationX(1, 1, widthPercentageToDP(-56), 0)}
              source={ImagesPath.img.hijaiyah.jboy} 
              style={styles.characterJBoy} 
            />
            <Animatable.Image 
              useNativeDriver={true}
              delay={1800}
              duration={800}
              easing="ease-out"
              animation={getAnimationX(1, 1, widthPercentageToDP(56), 0)}
              source={ImagesPath.img.hijaiyah.jgirl} 
              style={styles.characterJGirl} 
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => ({
  hijaiyah: state.hijaiyah,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HijaiyahActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hijaiyah)