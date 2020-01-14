import { StyleSheet, Platform } from "react-native"
import Metrics from "../../utils/Metrics"
import Color from "../../styles/colors"
import { widthPercentageToDP } from "../../utils/Responsive"

let height = Metrics.screenWidth * 0.2

const styles = StyleSheet.create({
  itemWrapper: {
    // height: height,
    flex: 1,
    marginVertical: height * 0.18,
    marginHorizontal: height * 0.12,
    marginBottom: widthPercentageToDP(1),
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
    elevation: 5
  },
  itemContent: {
    flex: 1,
    backgroundColor: Color.primary.cream,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: widthPercentageToDP(2.5),
    paddingBottom: widthPercentageToDP(3.5)
  },
  itemTextLatin: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: Color.primary.orange,
    fontSize: height * 0.25
  },
  itemTextJawi: {
    textAlign: "center",
    marginTop: height * 0.09,
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: Color.primary.orange,
    fontSize: height * 0.25
  },

  starContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: -widthPercentageToDP(3.5),
    zIndex: 1,

    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.15,
    elevation: 1
  },
  star: {
    width: widthPercentageToDP(8),
    height: widthPercentageToDP(8),
    marginHorizontal: widthPercentageToDP(0.5)
  },

  img: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "center"
  }
})

export default styles
