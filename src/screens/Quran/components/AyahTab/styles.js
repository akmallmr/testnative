import React, {
  Component
} from 'react';
import {
  StyleSheet
} from 'react-native';
import Metrics from '../../../../utils/Metrics';
import Color from '../../../../styles/colors';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    paddingTop: Metrics.screenWidth * .04,
    paddingHorizontal: Metrics.screenWidth * .02,
  },
  list: { 
    paddingVertical: Metrics.screenWidth * .01  
  }
});

export default styles