import { StyleSheet, Platform } from "react-native"
import Metrics from "../../utils/Metrics"
import Color from "../../styles/colors"
import { widthPercentageToDP } from "../../utils/Responsive"

let height = Metrics.screenWidth * 0.2

const styles = StyleSheet.create({
  itemWrapper: {
    // height: height,
    marginVertical: height * 0.1,
    marginHorizontal: height * 0.12,
    backgroundColor: Color.shadow.cream,
    paddingBottom: 4,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    elevation: 3
  },
  itemContent: {
    flex: 1,
    backgroundColor: Color.primary.cream,
    borderRadius: 10,
    justifyContent: "center",
    padding: widthPercentageToDP(2.5),
    paddingBottom: widthPercentageToDP(3.5),
  },
  itemTextLatin: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: Color.primary.orange,
    fontSize: height * 0.3
  },
  itemTextJawi: {
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: Color.primary.orange,
    fontSize: height * 0.3
  }
})

export default styles
