import { StyleSheet, Platform } from "react-native"
import Metrics from "../../../utils/Metrics"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../utils/Responsive"
import Colors from "../../../constants/color"

export default StyleSheet.create({
  container: {
    backgroundColor: Colors(),
    flex: 1
  },
  learnContainer: {
    flex: 1
  },

  navContainer: {
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(4.5)
  },

  lifeContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: -heightPercentageToDP(2.5),
    zIndex: 1
  },
  life: {
    width: heightPercentageToDP(5.5),
    height: heightPercentageToDP(5.5),
    marginHorizontal: widthPercentageToDP(1)
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Colors("shadow", "cream"),
    marginHorizontal: widthPercentageToDP(4.5),
    paddingBottom: widthPercentageToDP(1.2),
    borderRadius: widthPercentageToDP(6),
    overflow: "hidden"
  },
  content: {
    flex: 1,
    backgroundColor: Colors("base", "cream"),
    borderRadius: widthPercentageToDP(6),
    paddingVertical: widthPercentageToDP(8.5)
  },

  mainContent: {
    flex: 1,
    marginTop: heightPercentageToDP(1)
  },

  frame: {
    marginBottom: -heightPercentageToDP(28),
    backgroundColor: Colors("base", "blue"),
    height: heightPercentageToDP(28),
    marginHorizontal: widthPercentageToDP(5),
    borderRadius: widthPercentageToDP(3),
    transform: [{ rotate: "-1deg" }],
    alignItems: "flex-end",
    paddingHorizontal: widthPercentageToDP(3.25),
    paddingVertical: heightPercentageToDP(0.25)
  },
  frameText: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    transform: [{ rotate: "1deg" }],
    color: "#fff",
    letterSpacing: 2,
    fontSize: heightPercentageToDP(1.9)
  },

  questionContainer: {
    marginVertical: heightPercentageToDP(0.25),
    paddingVertical: heightPercentageToDP(2.5)
  },
  questionBackColor: {
    borderRadius: widthPercentageToDP(3),
    alignItems: "center",
    marginHorizontal: widthPercentageToDP(9),
    backgroundColor: Colors("base", "grey"),
    width: widthPercentageToDP(73),
    height: heightPercentageToDP(23),
    overflow: "hidden"
  },
  question: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: widthPercentageToDP(3),
    marginRight: heightPercentageToDP(0.75),
    marginBottom: heightPercentageToDP(0.375),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  questionTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(4),
    textAlign: "center",
    marginHorizontal: widthPercentageToDP(3.8),
    color: "#000"
  },
  questionTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(4),
    textAlign: "center",
    marginHorizontal: widthPercentageToDP(3.8),
    color: "#000"
  },
  questionLogo: {
    width: heightPercentageToDP(13),
    height: heightPercentageToDP(18),
    position: "absolute",
    right: -widthPercentageToDP(3),
    top: -widthPercentageToDP(3)
  },

  btnGroupContainer: {
    flex: 1,
    marginTop: heightPercentageToDP(1),
    marginBottom: heightPercentageToDP(1.5),
    marginHorizontal: widthPercentageToDP(5)
  },
  btnGroup: {
    flex: 1,
    marginTop: heightPercentageToDP(1.2)
  },
  btnGroupBackBtn: {
    flex: 1,
    borderRadius: heightPercentageToDP(1.75)
  },
  btnGroupBtn: {
    flex: 1,
    borderRadius: heightPercentageToDP(1.75)
  },
  btnGroupTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: heightPercentageToDP(2.1),
    textAlign: "left"
  },
  btnGroupTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: heightPercentageToDP(2.1),
    textAlign: "right"
  },
  btnGroupStatus: {
    position: "absolute",
    borderRadius: widthPercentageToDP(5.75),
    width: heightPercentageToDP(6),
    height: heightPercentageToDP(6),
    marginHorizontal: widthPercentageToDP(0.5),
    padding: widthPercentageToDP(2),
    zIndex: 1
  },

  imgBtnGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 0,
    overflow: "hidden"
  },
  imgBtnGroup: {
    width: "50%",
    height: heightPercentageToDP(15.5),
    paddingTop: widthPercentageToDP(1.5),
    overflow: "hidden"
  },
  imgBtnGroup0: {
    paddingRight: widthPercentageToDP(1),
    alignItems: "flex-end"
  },
  imgBtnGroup1: {
    paddingLeft: widthPercentageToDP(1),
    alignItems: "flex-start"
  },

  imgBtnBack: {
    flex: 1,
    backgroundColor: Colors("base", "grey"),
    borderRadius: widthPercentageToDP(3),
    overflow: "hidden"
  },
  imgBtnBackActive: {
    backgroundColor: Colors("shadow", "blue")
  },
  imgBtnBackTrue: {
    backgroundColor: Colors("shadow", "lightGreen")
  },
  imgBtnBackFalse: {
    backgroundColor: Colors("shadow", "red")
  },
  imgBtn: {
    flex: 1,
    padding: heightPercentageToDP(0.9),
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: widthPercentageToDP(3),
    marginBottom: widthPercentageToDP(0.8),
    alignItems: "center"
  },
  imgBtnActive: {
    backgroundColor: Colors("base", "blue")
  },
  imgBtnTrue: {
    backgroundColor: Colors("base", "lightGreen")
  },
  imgBtnFalse: {
    backgroundColor: Colors("base", "red")
  },
  imgBtnAnswerLeft: {
    width: heightPercentageToDP(12.2),
    // backgroundColor: "#959595",
    marginLeft: widthPercentageToDP(0.5),
    borderRadius: widthPercentageToDP(2.5)
  },
  imgBtnAnswerRight: {
    width: heightPercentageToDP(12.2),
    // backgroundColor: "#959595",
    marginRight: widthPercentageToDP(0.5),
    borderRadius: widthPercentageToDP(2.5)
  },
  imgBtnStatus: {
    width: heightPercentageToDP(3.5),
    height: heightPercentageToDP(3.5)
  },

  enoughAnswerContainer: {
    position: "absolute",
    bottom: heightPercentageToDP(2.8),
    right: 0,
    left: 0,
    marginHorizontal: widthPercentageToDP(8.9),
    borderBottomRightRadius: widthPercentageToDP(3),
    borderBottomLeftRadius: widthPercentageToDP(3),
    overflow: "hidden"
  },
  enoughAnswerBackColor: {
    borderBottomRightRadius: widthPercentageToDP(3),
    borderBottomLeftRadius: widthPercentageToDP(3),
    backgroundColor: Colors("shadow", "red")
  },
  enoughAnswer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: widthPercentageToDP(3),
    borderBottomLeftRadius: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1.4),
    marginBottom: heightPercentageToDP(0.3),
    marginRight: heightPercentageToDP(0.3),
    backgroundColor: Colors("base", "red")
  },
  enoughAnswerTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#fff",
    fontSize: heightPercentageToDP(1.8)
  },
  enoughAnswerTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: "#fff",
    fontSize: heightPercentageToDP(1.8)
  },

  btnContainer: {
    marginHorizontal: widthPercentageToDP(30),
    marginBottom: widthPercentageToDP(2.5),
    marginTop: -heightPercentageToDP(3)
  },
  btn: {
    fontSize: heightPercentageToDP(2.1)
  },

  boxShadow: {
    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.4
  },
  img: {
    resizeMode: "contain",
    flex: 1,
    height: null,
    width: null
  },

  optionContainer: {
    width: "100%"
  },
  optionRight: {
    flex: 1,
    marginLeft: widthPercentageToDP(2.5)
  },
  optionLeft: {
    flex: 1,
    marginRight: widthPercentageToDP(2.5)
  },
  optionIndex: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    width: heightPercentageToDP(6),
    marginHorizontal: widthPercentageToDP(0.5)
  }
})
