import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  backColor: {
    borderRadius: widthPercentageToDP(3.5),
    borderWidth: 0,
    backgroundColor: Colors("shadow", "blue"),
    overflow: "hidden"
  },
  btn: {
    borderRadius: widthPercentageToDP(3.5),
    marginBottom: widthPercentageToDP(0.8),
    width: "100%",
    backgroundColor: Colors("base", "blue"),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 1
  },
  red: {
    backgroundColor: Colors("base", "red")
  },
  blue: {
    backgroundColor: Colors("base", "blue")
  },
  darkOrange: {
    backgroundColor: Colors("base", "darkOrange")
  },
  cream: {
    backgroundColor: Colors("base", "cream")
  },
  white: {
    backgroundColor: "#fff"
  },
  green: {
    backgroundColor: Colors("base", "lightGreen")
  },
  redBack: {
    backgroundColor: Colors("shadow", "red")
  },
  blueBack: {
    backgroundColor: Colors("shadow", "blue")
  },
  darkOrangeBack: {
    backgroundColor: Colors("shadow", "darkOrange")
  },
  creamBack: {
    backgroundColor: Colors("shadow", "cream")
  },
  whiteBack: {
    backgroundColor: "rgba(0,0,0,0.22)"
  },
  greenBack: {
    backgroundColor: Colors("shadow", "lightGreen")
  },
  btnTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(4.5),
    width: "100%",
    padding: widthPercentageToDP(2),
    color: "#fff",
    textAlign: "center"
  },
  btnTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(4),
    width: "100%",
    padding: widthPercentageToDP(2),
    color: "#fff",
    textAlign: "center"
  },
  loading: {
    position: "absolute", 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0, 
    justifyContent: "center", 
    backgroundColor: Colors("base", "blue")
  }
})
