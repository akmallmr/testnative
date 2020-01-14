import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native';
import Metrics from '../../../utils/Metrics';
import Color from '../../../styles/colors';


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.primary.green,
  },
  container: {
    flex: 1,
    paddingHorizontal: Metrics.screenWidth *  .0325
  },

  headerWrapper: {
    flexDirection: 'row',
    height: Metrics.screenWidth *  .143, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { flex: 1, justifyContent: 'flex-end' },
  headerTitleText: {
    textAlign: 'center',
    fontSize: Metrics.screenWidth * .07,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: '#FFF'
  },
  headerButton: { width: Metrics.screenWidth * .07 },

  contentWrapper: {
    flex: 1,
    backgroundColor: Color.shadow.cream,
    borderRadius: 15,
    paddingBottom: 4,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    backgroundColor: Color.primary.cream,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // paddingHorizontal: Metrics.screenWidth * .04,
    // paddingBottom: Metrics.screenWidth * .04,
  },

  tabWrapper: {
    flexDirection: 'row',
    height: Metrics.screenWidth * .09,
    backgroundColor: Color.primary.darkPaleGreen
  },
  tabItem: {
    flex: 1,
    backgroundColor: Color.primary.darkPaleGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemActive: {
    backgroundColor: Color.primary.cream,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabItemTextLatin: {
    textAlign: 'center',
    fontSize: Metrics.screenWidth * .05,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: '#FFF'
  },
  tabItemTextJawi: {
    textAlign: 'center',
    fontSize: Metrics.screenWidth * .05,
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: '#FFF'
  },
  tabContent: {
    flex: 1,
    paddingTop: Metrics.screenWidth * .04,
    paddingHorizontal: Metrics.screenWidth * .02,
  }

});

export default styles