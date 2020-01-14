import React, { Component } from "react"
import { View, Image, Text } from "react-native"
import * as Animatable from 'react-native-animatable'
import { Button } from '../../components'
import { ImagesPath, Languages } from '../../../../../constants/index';
import styles from './styles';

const paperAnimation = {
  0: { opacity: 0, scale: 0, },
  0.4: { opacity: 1, scale: .8, },
  0.6: { opacity: 1, scale: 1.1, },
  0.9: { opacity: 1, scale: .9, },
  1: { opacity: 1, scale: 1, },
}

export default class ReportBoard extends Component {

  render() {
    const { language, hijaiyah } = this.props
    const { hijaiyah1, hijaiyah2, harokat1, harokat2, tanwin1, tanwin2 } = hijaiyah
    let LANGUAGE = Languages[language]

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }} >

          <View style={styles.modalWrapper}>

            <Animatable.View  
              animation={paperAnimation} 
              duration={750} 
              style={styles.modalPaper}
            >
              <View style={styles.wrapper}>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.ghjy1} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{hijaiyah1.score || '-'}</Text> </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.ghjy2} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{hijaiyah2.score || '-'}</Text> </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.ghrk} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{harokat1.score || '-'}</Text> </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.mhrk} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{harokat2.score || '-'}</Text> </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.gtwn} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{tanwin1.score || '-'}</Text> </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Image source={ImagesPath.img.play.storyBoard.mtwn} style={styles.imageContain} />
                  <View style={styles.scoreBoard}>
                    <Text style={styles.scoreText}> {`${LANGUAGE.play.highScore}: `}<Text style={styles.scoreValueText}>{tanwin2.score || '-'}</Text> </Text>
                  </View>
                </View>

                <View style={styles.topBoard}>
                  <Image
                    source={ImagesPath.img.play.topBoard.reports}
                    style={styles.imageContain}
                  />
                </View>
              </View>
            
              
              <Button 
                onPress={() => this.props.close()}
                style={styles.exitButton}
              >
                <Image 
                  style={styles.imageContain}
                  source={ImagesPath.img.iqra.closeModalIcon} 
                />
              </Button>
            </Animatable.View>
            
          </View>
        </View>
      </View>
    );
  }
}