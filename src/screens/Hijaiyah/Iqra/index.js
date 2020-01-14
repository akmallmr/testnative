import React, { Component } from "react"
import {
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  Image
} from "react-native"
import * as Animatable from 'react-native-animatable'

import { widthPercentageToDP, heightPercentageToDP } from "../../../utils/Responsive"
import { ImagesPath } from "../../../constants/index"
import { Button } from "../components/index"
import styles from "./styles"

export default class Iqra extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {

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
              source={ImagesPath.img.iqra.heading} 
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
                source={ImagesPath.img.iqra.hijaiyah1} 
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
                source={ImagesPath.img.iqra.hijaiyah2} 
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
                source={ImagesPath.img.iqra.harokat1} 
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
                source={ImagesPath.img.iqra.harokat2} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              delay={1000}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Tanwin1')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.iqra.tanwin1} 
                style={styles.buttonImg} 
              />
            </Button>
            <View style={{ width: widthPercentageToDP(7) }} />
            <Button
              delay={1050}
              duration={1200}
              animation={'bounceIn'}
              onPress={() => this.props.navigation.push('Tanwin2')}
              useNativeDriver={true}
              style={styles.button}
            >
              <Image 
                source={ImagesPath.img.iqra.tanwin2} 
                style={styles.buttonImg} 
              />
            </Button>
          </View>

        </ImageBackground>
      </SafeAreaView>
    )
  }
}