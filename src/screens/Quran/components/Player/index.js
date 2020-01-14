import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles';

const Player = (props) => {
  let { play, playing, navAya, togglePlaying, isPlaying } = props
  // console.log({props})
  let playIcon = isPlaying 
      ? require('../../../../assets/images/icons/icon-pause.png')
      : require('../../../../assets/images/icons/icon-play.png') 

  return (
    <View style={styles.playerWrapper}>
      <TouchableOpacity onPress={() => navAya('PREV')} style={styles.prevNextButton}>
        <Image style={styles.image} source={require('../../../../assets/images/icons/icon-backward.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => togglePlaying()} style={styles.playButton}>
        <Image style={styles.image} source={playIcon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navAya('NEXT')} style={styles.prevNextButton}>
        <Image style={styles.image} source={require('../../../../assets/images/icons/icon-forward.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Player