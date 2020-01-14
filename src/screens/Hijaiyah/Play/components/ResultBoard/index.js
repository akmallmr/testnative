import React, { PureComponent } from "react"
import { View, Modal, Image, Text, StyleSheet } from "react-native"
import Sound from 'react-native-sound'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types';
import { ImagesPath, SoundsPath, Languages } from '../../../../../constants/index';
import { Button } from '../index'
import styles from './styles';


const startAnimation = {
  0: { opacity: 0, scale: 3, },
  0.2: { opacity: 1, scale: .7, },
  0.4: { opacity: 1, scale: 1.2, },
  0.6: { opacity: 1, scale: .8, },
  0.8: { opacity: 1, scale: 1.1, },
  1: { opacity: 1, scale: 1, },
}

const paperAnimation = {
  0: { opacity: 0, scale: 0, },
  0.4: { opacity: 1, scale: .8, },
  0.6: { opacity: 1, scale: 1.1, },
  0.9: { opacity: 1, scale: .9, },
  1: { opacity: 1, scale: 1, },
}


export default class ResultBoard extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    star: PropTypes.number.isRequired
  };

  static defaultProps = {
    score: 0,
    star: 0
  }

  sound = (source, timeOut) => {
    const s = new Sound(source, (e) => {
      if (e) {      
        console.log('error', e);
      } else {
        setTimeout(() => {
          s.play(() => {
            s.stop().release()
          });
        }, timeOut)
      }
    });
  }

  render() {
    let { visible, close, restart, gamelist, report } = this.props
    let { score, star, language } = this.props
    let LANGUAGE = Languages[language]
    return (
      <View style={styles.container}>
        <Animatable.View 
          animation={paperAnimation} 
          duration={750} 
          style={styles.paper} 
          onAnimationEnd={() => this.sound(SoundsPath.tada, 0)}
        >

          <View style={styles.jBoy} >
            <Image 
              source={ImagesPath.img.play.resultJBoy} 
              style={styles.imageContain} 
            />
          </View>

          <View style={styles.menuBoard}>
            <View style={styles.startWrapper}>
              {
                Array(3).fill().map((e, i) => {
                  return (<View key={'startItem-'+i} style={styles.startItem}>
                    <Image 
                      source={ImagesPath.img.play.resultStartEmpty} 
                      style={styles.imageContain} 
                    />
                    { i < star && <Animatable.View 
                        useNativeDriver={true}
                        delay={((1000 * (i + 1)) + 2000)}
                        duration={((1000))}
                        animation={startAnimation}
                        easing={'ease-out'}
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                        onAnimationBegin={() => this.sound(SoundsPath.star, 300)}
                      >
                        <Image 
                          source={ImagesPath.img.play.resultStart} 
                          style={styles.imageContain} 
                        />
                      </Animatable.View>
                    }
                  </View>)
                })
              }
            </View>

            <View style={styles.navWrapper}>
              <Button
                animation={'bounceIn'}
                duration={2000}
                delay={2000}
                onPress={()=>restart()}
                useNativeDriver={true}
                style={styles.navItem}
              >
                <Image 
                  source={ImagesPath.img.play.navIcon.restart} 
                  style={styles.imageContain} 
                />
              </Button>
              <Button
                animation={'bounceIn'}
                duration={2000}
                delay={2000}
                onPress={()=>gamelist()}
                useNativeDriver={true}
                style={styles.navItem}
              >
                <Image 
                  source={ImagesPath.img.play.navIcon.gamelist} 
                  style={styles.imageContain} 
                />
              </Button>
              <Button
                animation={'bounceIn'}
                duration={2000}
                delay={2000}
                onPress={()=>report()}
                useNativeDriver={true}
                style={styles.navItem}
              >
                <Image 
                  source={ImagesPath.img.play.navIcon.report} 
                  style={styles.imageContain} 
                />
              </Button>
            </View>
            
            <View style={styles.scoreBoard}>
              <Text style={styles.scoreText}> {`${LANGUAGE.play.score} : `}<Text style={styles.scoreValueText}>{score}</Text> </Text>
            </View>
          </View>

          <View style={styles.topBoard} >
            <Image 
              source={ImagesPath.img.play.resultTopBoard} 
              style={styles.imageContain} 
            />
          </View>

        </Animatable.View>
      </View>
    );
  }
}
