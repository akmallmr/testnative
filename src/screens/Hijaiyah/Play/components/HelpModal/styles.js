import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP } from "../../../../../utils/Responsive"

const widthPaper = widthPercentageToDP(92) > 385 ? 385 : widthPercentageToDP(92)
const styles = StyleSheet.create({
  modalBG: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: Platform.OS === "android" ? -widthPercentageToDP(7) : 0,
    backgroundColor: "#000",
    opacity: 0.4
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalPaper: {
    marginTop: widthPaper * 0.045,
    width: widthPaper,
    height: widthPaper * 1.6646464646464647,
    borderRadius: widthPaper * 0.09,
    backgroundColor: "#F2B579",
    borderColor: "#663B10",
    borderWidth: widthPaper * 0.02,
    padding: widthPaper * 0.05
  },
  imageJboy: {
    width: widthPaper * 0.86,
    height: widthPaper * 0.86 * 1.2319004524886878
  },
  wrapperText: {
    flex: 1,
    justifyContent: "center"
  },
  textHelp: {
    color: "#333",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "crayon kids" : "crayon_kids",
    fontSize: widthPaper * 0.058,
    letterSpacing: -1,
    lineHeight: widthPaper * 0.065
  },
  buttonHelp: {
    width: widthPaper * 0.18 * 1.6629213483146068,
    height: widthPaper * 0.18,
    alignSelf: "center"
  },
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  }
})

export default styles
