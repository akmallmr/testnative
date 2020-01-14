import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: heightPercentageToDP(0.5)
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  center: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  logo: {
    width: widthPercentageToDP(20),
    height: widthPercentageToDP(13)
  },
  titleLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(7),
    color: "#000"
  },
  titleJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(6.5),
    color: "#000"
  },
  smallTitleLatin: {
    fontSize: widthPercentageToDP(6.9)
  },
  smallTitleJawi: {
    fontSize: widthPercentageToDP(6.4)
  },
  btn: {
    width: widthPercentageToDP(13),
    height: widthPercentageToDP(13),
    borderRadius: widthPercentageToDP(7),
    overflow: "hidden"
  },
  smallBtn: {
    width: widthPercentageToDP(9.5),
    height: widthPercentageToDP(9.5)
  },
  btnImg: {
    borderWidth: 3,
    backgroundColor: Colors("base", "cream"),
    borderColor: Colors("shadow", "cream")
  },
  img: {
    width: null,
    height: null,
    resizeMode: "contain",
    flex: 1
  }
})
