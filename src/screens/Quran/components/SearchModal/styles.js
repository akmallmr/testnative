import React, { Component } from "react"
import { StyleSheet, Platform } from "react-native"
import Metrics from "../../../../utils/Metrics"
import { widthPercentageToDP } from "../../../../utils/Responsive"
import Color from "../../../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backColor: {
    flex: 1,
    paddingTop: widthPercentageToDP(2.5),
    backgroundColor: Color.primary.darkPaleGreen,
    borderTopRightRadius: widthPercentageToDP(5),
    borderTopLeftRadius: widthPercentageToDP(5)
  },
  content: {
    flex: 1,
    backgroundColor: Color.primary.blue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: Metrics.screenWidth * 0.04,
    paddingBottom: Metrics.screenWidth * 0.04
  },

  navContainer: {
    marginVertical: widthPercentageToDP(2)
  },

  searchWrapper: {
    flexDirection: "row",
    height: Metrics.screenWidth * 0.115,
    backgroundColor: Color.primary.white,
    borderRadius: Metrics.screenWidth * 0.115,
    marginBottom: Metrics.screenWidth * 0.025
  },
  searchIconWrapper: {
    width: Metrics.screenWidth * 0.115,
    justifyContent: "center",
    alignItems: "center"
  },
  searchIcon: {
    width: Metrics.screenWidth * 0.07,
    height: Metrics.screenWidth * 0.115
  },
  searchText: {
    flex: 1,
    fontSize: Metrics.screenWidth * 0.055,
    fontFamily: Platform.OS === 'android' ? 'PoetsenoneRegular' : 'poetsenone-regular',
    color: Color.primary.black
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: Color.shadow.blue,
    borderRadius: 15
  },
  contentList: { paddingVertical: Metrics.screenWidth * 0.02 },

  imageContain: { flex: 1, width: null, height: null, resizeMode: "contain" }
})

export default styles
