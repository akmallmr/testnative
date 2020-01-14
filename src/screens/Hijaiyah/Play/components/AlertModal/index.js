import React, { PureComponent } from "react"
import { View, Modal, Image, Text } from "react-native"
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable'
import { Button } from '../index'
import { ImagesPath } from '../../../../../constants/index';
import styles from './styles';

const paperAnimation = {
  0: { opacity: 0, scale: 0, },
  0.4: { opacity: 1, scale: .8, },
  0.6: { opacity: 1, scale: 1.1, },
  0.9: { opacity: 1, scale: .9, },
  1: { opacity: 1, scale: 1, },
}

export default class AlertModal extends PureComponent {
  static propTypes = {
    // source: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  };

  render() {
    let { text, visible, close } = this.props
    return (
      <Modal visible={visible} transparent={true} onRequestClose={close} animationType={"fade"}>
        <View style={styles.modalBG}/>

        <View style={styles.modalWrapper}>

          <Animatable.View  
            animation={paperAnimation} 
            duration={750} 
            style={styles.modalPaper}
          >
            {/* <Image 
              source={ImagesPath.img.play.jBoyMatch.answer} 
              style={styles.imageJboy} 
            /> */}
            <View style={styles.wrapperText}>
              <Text style={styles.textHelp}> 
                {text}                 
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button 
                onPress={close}
                style={styles.buttonHelp}>
                <Image 
                  source={ImagesPath.img.play.helpButton} 
                  style={styles.imageContain} 
                />
              </Button>
              <Button 
                onPress={close}
                style={styles.buttonHelp}>
                <Image 
                  source={ImagesPath.img.play.helpButton} 
                  style={styles.imageContain} 
                />
              </Button>
            </View>
          </Animatable.View>

        </View>
      </Modal>
    );
  }
}