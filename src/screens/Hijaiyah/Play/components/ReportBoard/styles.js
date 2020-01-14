import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../../utils/Responsive"

const widthPaper = widthPercentageToDP(93) > 385 ? 385 : widthPercentageToDP(93)
// const widthPaper = widthPercentageToDP(93)
const styles = StyleSheet.create({
  modalBG: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#000",
    opacity: 0.4
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  modalPaper: {
    // marginTop: widthPaper * .045,
    width: widthPaper,
    height: widthPaper * 1.8485639686684072,
    borderRadius: widthPaper * 0.09,
    backgroundColor: "#F2B579",
    borderColor: "#663B10",
    borderWidth: widthPaper * 0.015,
    padding: widthPaper * 0.025
  },
  wrapper: {
    marginTop: widthPaper * 0.16,
    paddingTop: widthPaper * 0.11,
    backgroundColor: "#FCCD8E",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: widthPaper * 0.09
  },
  textHelp: {
    color: "#333",
    textAlign: "center",
    fontFamily: "crayon_kids",
    fontSize: widthPaper * 0.058,
    letterSpacing: -1,
    lineHeight: widthPaper * 0.065
  },
  buttonHelp: {
    width: widthPaper * 0.18 * 1.6629213483146068,
    height: widthPaper * 0.18,
    alignSelf: "center"
  },
  topBoard: {
    position: "absolute",
    top: -(widthPaper * 0.125),
    left: 0,
    right: 0,
    height: widthPaper * 0.2
  },
  item: {
    width: widthPaper * 0.4,
    height: widthPaper * 0.4 * 1.1228915662650603,
    marginHorizontal: widthPaper * 0.03,
    marginBottom: widthPaper * 0.05
  },
  exitButton: {
    position: "absolute",
    width: widthPaper * 0.13,
    height: widthPaper * 0.13,
    top: -(widthPaper * 0.03),
    right: -(widthPaper * 0.04)
  },
  scoreBoard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: widthPaper * 0.08,
    justifyContent: "center"
  },
  scoreText: {
    color: "#1A1A1A",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "crayon kids" : "crayon_kids",
    fontSize: widthPaper * 0.035,
    letterSpacing: -0.1
  },
  scoreValueText: {
    fontSize: widthPaper * 0.05,
    color: "#DB400D"
  },
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  }
})

export default styles
