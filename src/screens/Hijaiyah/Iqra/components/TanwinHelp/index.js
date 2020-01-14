import React, { PureComponent } from "react"
import { View, Modal, Image, Text } from "react-native"
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable'
import { Button } from '../../components/index'
import { ImagesPath, Languages } from '../../../../../constants/index';
import styles from './styles';

const paperAnimation = {
  0: { opacity: 0, scale: 0, },
  0.4: { opacity: 1, scale: .8, },
  0.6: { opacity: 1, scale: 1.1, },
  0.9: { opacity: 1, scale: .9, },
  1: { opacity: 1, scale: 1, },
}

export default class TanwinHelp extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  };

  render() {
    let { visible, close, language } = this.props
    let caption = Languages[language].iqra.help.tanwin

    return (
      <Modal visible={visible} transparent={true} onRequestClose={close} animationType={"fade"}>
        <View style={styles.modalBG}/>

        <View style={styles.modalWrapper}>

          <Animatable.View  
            animation={paperAnimation} 
            duration={750} 
            style={styles.modalPaper}
          >
            <View style={styles.wrapperText}>
              <View style={styles.header} >
                <Image 
                  source={ImagesPath.img.iqra.helpImage.tanwin} 
                  style={styles.imageContain} 
                />
              </View>
              <Text style={styles.textHelp}> 
                  {caption[0]}
              </Text>
              <View style={styles.imageHelp} >
                <Image 
                  source={ImagesPath.img.iqra.helpImage.fathatain} 
                  style={styles.imageContain} 
                />
              </View>
              <Text style={styles.textHelp}> 
                 {caption[1]}
              </Text>
              <View style={styles.imageHelp} >
                <Image 
                  source={ImagesPath.img.iqra.helpImage.kasratain} 
                  style={styles.imageContain} 
                />
              </View>
              <Text style={styles.textHelp}> 
                 {caption[2]}
              </Text>
              <View style={styles.imageHelp} >
                <Image 
                  source={ImagesPath.img.iqra.helpImage.dammatain} 
                  style={styles.imageContain} 
                />
              </View>
              <Text style={styles.textHelp}> 
                 {caption[3]}
              </Text>
            </View>
            <Button 
              onPress={close}
              style={styles.buttonHelp}>
              <Image 
                source={ImagesPath.img.play.helpButton} 
                style={styles.imageContain} 
              />
            </Button>
          </Animatable.View>

        </View>
      </Modal>
    );
  }
}