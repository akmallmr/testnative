import { StyleSheet, Platform } from "react-native"
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
  bottomColor: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(50),
    backgroundColor: Colors("base", "paleGreen"),
    position: "absolute",
    bottom: 0
  },

  navContainer: {
    paddingTop: heightPercentageToDP(0.5) + 4,
    paddingBottom: heightPercentageToDP(0.25),
    paddingHorizontal: widthPercentageToDP(4.5),
    backgroundColor: Colors()
  },

  headerContainer: {
    backgroundColor: Colors("base", "paleGreen")
  },
  headerBackColor: {
    backgroundColor: Colors("shadow", "green"),
    borderBottomRightRadius: widthPercentageToDP(2.5),
    borderBottomLeftRadius: widthPercentageToDP(2.5)
  },
  header: {
    backgroundColor: Colors(),
    borderBottomRightRadius: widthPercentageToDP(2.5),
    borderBottomLeftRadius: widthPercentageToDP(2.5),
    paddingHorizontal: widthPercentageToDP(4.5),
    paddingTop: heightPercentageToDP(0.25),
    paddingBottom: widthPercentageToDP(2.5),
    marginBottom: widthPercentageToDP(0.8)
  },

  headerTitleLatin: {
    marginBottom: heightPercentageToDP(0.8),
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: "#fff",
    fontSize: widthPercentageToDP(6.2)
  },
  headerTitleJawi: {
    marginBottom: heightPercentageToDP(0.8),
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: "#fff",
    fontSize: widthPercentageToDP(6.2)
  },

  videoContainer: {
    height: widthPercentageToDP(49),
    borderRadius: widthPercentageToDP(7.5),
    backgroundColor: Colors(),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: widthPercentageToDP(6),
    elevation: Platform.OS === "android" ? 8 : 0
  },
  videoBtnBackColor: {
    backgroundColor: Colors("shadow", "cream"),
    borderRadius: widthPercentageToDP(4)
  },
  videoBtn: {
    flexDirection: "row",
    backgroundColor: Colors("base", "cream"),
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(2),
    paddingVertical: widthPercentageToDP(1),
    borderRadius: widthPercentageToDP(4),
    marginBottom: widthPercentageToDP(0.7)
  },
  videoBtnImg: {
    width: widthPercentageToDP(5),
    height: widthPercentageToDP(5)
  },
  videoBtnTextLatin: {
    marginHorizontal: widthPercentageToDP(1),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(4),
    color: Colors("base", "darkOrange")
  },
  videoBtnTextJawi: {
    marginHorizontal: widthPercentageToDP(1),
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
    lineHeight: 20,
    color: Colors("base", "darkOrange")
  },

  btnGroup: {
    marginTop: widthPercentageToDP(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnBackColor: {
    backgroundColor: Colors("shadow", "cream"),
    borderRadius: widthPercentageToDP(4)
  },
  btn: {
    padding: widthPercentageToDP(1),
    width: widthPercentageToDP(24),
    height: widthPercentageToDP(16),
    backgroundColor: Colors("base", "cream"),
    borderRadius: widthPercentageToDP(4),
    marginBottom: widthPercentageToDP(1)
  },
  btnTextLatin: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: Colors("base", "darkOrange"),
    fontSize: widthPercentageToDP(3.5)
  },
  btnTextJawi: {
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: Colors("base", "darkOrange"),
    fontSize: widthPercentageToDP(3.2)
  },

  contentContainer: {
    paddingHorizontal: widthPercentageToDP(4.5),
    backgroundColor: Colors("base", "paleGreen")
  },
  contentTitleLatin: {
    textAlign: "center",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: Colors("base", "darkOrange"),
    marginVertical: heightPercentageToDP(1.85),
    fontSize: widthPercentageToDP(6.5)
  },
  contentTitleJawi: {
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: Colors("base", "darkOrange"),
    marginVertical: heightPercentageToDP(1.85),
    fontSize: widthPercentageToDP(6)
  },
  contentListContainer: {
    backgroundColor: Colors("shadow", "paleGreen"),
    height: widthPercentageToDP(80),
    marginBottom: widthPercentageToDP(3),
    borderRadius: widthPercentageToDP(4)
  },

  boxShadow: {
    borderRadius: widthPercentageToDP(7.5),
    backgroundColor: Colors(),
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
  }
})
