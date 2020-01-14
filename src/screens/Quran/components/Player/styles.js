import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Metrics from '../../../../utils/Metrics';
import Color from '../../../../styles/colors';

let height = Metrics.screenWidth *  .17

const styles = StyleSheet.create({

  playerWrapper: {
    flexDirection: 'row',
    height: height, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: { width: height * .85 },
  prevNextButton: { width: height * .6, marginHorizontal: height * .1 },

  image: { flex: 1, width: null, height: null, resizeMode: 'contain' }


});

export default styles
