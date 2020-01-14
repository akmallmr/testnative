import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP } from "../../../../utils/Responsive"
import Colors from "../../../../constants/color"

export default StyleSheet.create({
  inputGroup: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: widthPercentageToDP(2)
  },
  inputBar: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: Colors("shadow", "cream"),
    borderRadius: widthPercentageToDP(4.5),
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: Platform.OS === "android" ? 0 : widthPercentageToDP(2),
    marginVertical: widthPercentageToDP(0.5)
  },
  inputBarWithPass: {
    paddingRight: widthPercentageToDP(11)
  },
  input: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(5),
    height: Platform.OS === "android" ? widthPercentageToDP(10) : null,
    width: "100%"
  },
  inputTextLatin: {
    fontSize: widthPercentageToDP(5.5),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#000"
  },
  inputTextJawi: {
    fontSize: widthPercentageToDP(5),
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: "#000",
    lineHeight: Platform.OS === "android" ? 20 : 0
  },
  inputStatus: {
    right: -widthPercentageToDP(10),
    top: widthPercentageToDP(0.5),
    position: "absolute",
    height: widthPercentageToDP(5),
    width: widthPercentageToDP(5)
  },
  inputErrorLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(4),
    textAlign: "center",
    color: Colors("base", "red")
  },
  inputErrorJawi: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(3.5),
    textAlign: "center",
    color: Colors("base", "red"),
    lineHeight: Platform.OS === "android" ? 20 : 0
  },

  inputVisibleToggle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    padding: widthPercentageToDP(1.5),
    width: widthPercentageToDP(12),
    justifyContent: "center"
  },
  inputVisibleToggleImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },

  forgotBtnBack: {
    backgroundColor: Colors("shadow", "blue"),
    borderColor: Colors("shadow", "blue"),
    width: "100%",
    borderRadius: widthPercentageToDP(4.5),
    paddingBottom: 3,
    marginVertical: widthPercentageToDP(0.5)
  },
  forgotBtn: {
    alignItems: "center",
    borderRadius: widthPercentageToDP(4.5),
    paddingVertical: Platform.OS === "android" ? 0 : widthPercentageToDP(2),
    backgroundColor: Colors("base", "blue"),
    width: "100%",
    height: Platform.OS === "android" ? widthPercentageToDP(10) : null,
    justifyContent: "center"
  },
  forgotBtnTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#fff",
    fontSize: widthPercentageToDP(5)
  },
  forgotBtnTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: "#fff",
    fontSize: widthPercentageToDP(4.5),
    lineHeight: Platform.OS === "android" ? 20 : 0
  }
})
