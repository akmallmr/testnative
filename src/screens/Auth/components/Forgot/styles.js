import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP } from "../../../../utils/Responsive"
import Colors from "../../../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors("base", "blue"),
    borderRadius: widthPercentageToDP(5),
    paddingBottom: widthPercentageToDP(8),
    marginBottom: widthPercentageToDP(1.5),
    borderRadius: widthPercentageToDP(5)
  },
  header: {
    paddingVertical: widthPercentageToDP(2.5),
    alignItems: "center"
  },
  headerTextLatin: {
    fontSize: widthPercentageToDP(6),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "white",
    textAlign: "center"
  },
  headerTextJawi: {
    fontSize: widthPercentageToDP(5.5),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "GeezaPro-Bold",
    color: "white",
    textAlign: "center"
  },
  closeBtn: {
    top: 0,
    right: 0,
    position: "absolute",
    padding: widthPercentageToDP(3),
    width: widthPercentageToDP(13),
    height: widthPercentageToDP(13)
  },

  content: {
    flex: 1,
    justifyContent: "center"
  },
  listItem: {
    flex: 1,
    width: widthPercentageToDP(91),
    padding: widthPercentageToDP(5.5),
    justifyContent: "center"
  },
  inputTextLatin: {
    textAlign: "center",
    fontSize: widthPercentageToDP(5.5),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#fff"
  },
  inputTextJawi: {
    textAlign: "center",
    fontSize: widthPercentageToDP(5),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "GeezaPro-Bold",
    color: "#fff"
  },
  inputStatus: {
    marginLeft: widthPercentageToDP(5),
    marginRight: -widthPercentageToDP(10),
    marginTop: widthPercentageToDP(0.5),
    height: widthPercentageToDP(5),
    width: widthPercentageToDP(5)
  },
  inputBar: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: Colors("shadow", "blue"),
    borderRadius: widthPercentageToDP(4.5),
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: Platform.OS === "android" ? 0 : widthPercentageToDP(2),
    marginVertical: widthPercentageToDP(1)
  },
  input: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(5),
    height: Platform.OS === "android" ? widthPercentageToDP(10) : null,
    width: "100%"
  },

  inputOTPContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  inputOTP: {
    width: widthPercentageToDP(19),
    height: widthPercentageToDP(19),
    borderRadius: widthPercentageToDP(4.5),
    borderWidth: 1.5,
    borderColor: Colors("shadow", "blue")
  },
  inputOTPText: {
    fontSize: widthPercentageToDP(7.5),
    paddingVertical: 0,
    paddingHorizontal: 0,
    textAlign: "center"
  },

  inputErrorLatin: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(4),
    color: Colors("base", "red")
  },
  inputErrorJawi: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(3.5),
    color: Colors("base", "red"),
    lineHeight: Platform.OS === "android" ? 20 : 0
  },

  img: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "contain"
  }
})
