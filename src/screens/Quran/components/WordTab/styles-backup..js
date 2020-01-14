import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native';
import Metrics from '../../../../utils/Metrics';
import Color from '../../../../styles/colors';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    paddingTop: Metrics.screenWidth * .04,
    paddingHorizontal: Metrics.screenWidth * .02,
  },
  ayahContainer: {
    minHeight: Metrics.screenWidth * .365,
    paddingVertical: Metrics.screenWidth * .04,
  },
  ayahWrapper: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    direction: 'rtl',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: Metrics.screenWidth * .0757,
    textAlign: 'right',
    fontFamily: 'me_quran',
    color: '#000'
  },
  itemTextActive: {
    color: Color.primary.orange,
  },
  itemNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.screenWidth * .07,
    width: Metrics.screenWidth * .06,
    height: Metrics.screenWidth * .06,
    resizeMode: 'contain'
  },
  itemNumberText: {
    fontSize: Metrics.screenWidth * .03,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: Color.primary.white
  },
  
  row: { 
    height: Metrics.screenWidth * .148,
    paddingVertical: Metrics.screenWidth * .01,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  word: { 
    width: Metrics.screenWidth * .5,
    // marginHorizontal: Metrics.screenWidth * .02,
    backgroundColor: Color.primary.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.shadow.cream
  },
  wordLatin: { 
    width: Metrics.screenWidth * .6,
    marginHorizontal: Metrics.screenWidth * .02,
    backgroundColor: Color.primary.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.shadow.cream
  },
  wordText: {
    fontSize: Metrics.screenWidth * .055,
    textAlign: 'center',
    fontFamily: 'me_quran',
    color: '#000'
  },
  wordLatinText: {
    fontSize: Metrics.screenWidth * .05,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: '#000'
  },
  sound: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Metrics.screenWidth * .015,
    width: Metrics.screenWidth * .07,
  },

  prevNextButton: {
    width: Metrics.screenWidth * .112,
    marginHorizontal: Metrics.screenWidth * .02,
  },

  image: { flex: 1, width: null, height: null, resizeMode: 'contain' }

});

export default styles