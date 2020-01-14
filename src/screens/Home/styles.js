import { StyleSheet, Platform } from "react-native"
import Metrics from "../../utils/Metrics"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4.5),
    backgroundColor: Colors()
  },
  navContainer: {
    marginVertical: widthPercentageToDP(2)
  },
  header: {
    marginTop: widthPercentageToDP(2)
  },
  boxShadow: {
    borderRadius: widthPercentageToDP(7.5),
    backgroundColor: Colors(),
    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.4
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
    lineHeight: 20,
    color: Colors("base", "darkOrange")
  },

  content: {
    marginVertical: heightPercentageToDP(2)
  },
  itemCol: {
    flexDirection: "row",
    justifyContent: "center"
  },
  itemRow: {
    marginBottom: heightPercentageToDP(1.5),
    backgroundColor: Colors("shadow", "cream"),
    borderTopRightRadius: heightPercentageToDP(10),
    borderTopLeftRadius: heightPercentageToDP(10),
    borderBottomRightRadius: heightPercentageToDP(6),
    borderBottomLeftRadius: heightPercentageToDP(6)
  },
  itemRowRight: {
    marginLeft: heightPercentageToDP(1.25)
  },
  itemRowLeft: {
    marginRight: heightPercentageToDP(1.25)
  },
  item: {
    alignItems: "center",
    paddingTop: heightPercentageToDP(1.5),
    paddingBottom: heightPercentageToDP(1.5),
    paddingHorizontal: heightPercentageToDP(2.5 - 0.125), // Kurang margin pada (itemRowLeft || itemRowRight) / 2
    marginBottom: heightPercentageToDP(1),
    backgroundColor: Colors("base", "cream"),
    borderTopRightRadius: heightPercentageToDP(10),
    borderTopLeftRadius: heightPercentageToDP(10),
    borderBottomRightRadius: heightPercentageToDP(6),
    borderBottomLeftRadius: heightPercentageToDP(6)
  },
  itemImg: {
    paddingRight: heightPercentageToDP(0.3),
    width: heightPercentageToDP(15),
    height: heightPercentageToDP(15),
    marginBottom: heightPercentageToDP(0.25),
    borderRadius: heightPercentageToDP(8),
    backgroundColor: Colors("shadow", "cream"),
    transform: [{ rotate: "-25deg" }]
  },
  itemTextLatin: {
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    color: Colors("base", "darkOrange"),
    fontSize: heightPercentageToDP(2)
  },
  itemTextJawi: {
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    color: Colors("base", "darkOrange"),
    lineHeight: 20,
    fontSize: heightPercentageToDP(2.25),
  },

  img: {
    width: null,
    height: null,
    resizeMode: "contain",
    flex: 1
  }
})
