import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors("base", "cream", 0.5)
  },
  tab: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: widthPercentageToDP(2),
    alignItems: "center",
    flex: 1
  },
  tabActive: {
    backgroundColor: Colors("base", "cream")
  },
  tabTextLatin: {
    fontSize: widthPercentageToDP(5.5),
    color: "rgba(255,255,255,0.5)",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular"
  },
  tabTextJawi: {
    fontSize: widthPercentageToDP(5.5),
    color: "rgba(255,255,255,0.5)",
    fontFamily:
      Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    lineHeight : Platform.OS === 'android' ? 20 : 0
  },
  tabTextActive: {
    color: Colors("base", "darkOrange")
  }
})
