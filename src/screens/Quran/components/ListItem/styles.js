import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native';
import Metrics from '../../../../utils/Metrics';
import Color from '../../../../styles/colors';

let height = Metrics.screenWidth * .2

const styles = StyleSheet.create({

  itemWrapper: {
    borderRadius: 15,
    padding: Metrics.screenWidth * .0225
  },
  itemWrapperActive: {
    backgroundColor: Color.primary.pink
  },
  itemNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.screenWidth * .02,
    width: Metrics.screenWidth * .06,
    height: Metrics.screenWidth * .06,
    resizeMode: 'contain'
  },
  itemNumberText: {
    fontSize: Metrics.screenWidth * .03,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: Color.primary.white
  },
  itemContent: {
    flex: 1,
    flexDirection: Platform.OS === 'android' ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    direction: 'rtl',
    marginBottom: Metrics.screenWidth * .0225
  },
  itemText: {
    fontSize: Metrics.screenWidth * .0757,
    textAlign: 'right',
    fontFamily: 'me_quran',
    color: '#000'
    // lineHeight: Metrics.screenWidth * .13
  },
  itemTextActive: {
    color: Color.primary.orange,
  },
  itemTextTranslation: {
    fontSize: Metrics.screenWidth * .036,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: Color.primary.black
  }

});

export default styles