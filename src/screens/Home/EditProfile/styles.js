import { StyleSheet, Platform } from "react-native"
import Metrics from "../../../utils/Metrics"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../utils/Responsive"
import Colors from "../../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors()
  },
  navContainer: {
    paddingHorizontal: widthPercentageToDP(4.5),
    marginVertical: widthPercentageToDP(2)
  },
  editProfileContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4.5),
    alignItems: "center"
  },
  profileImgBackColor: {
    backgroundColor: Colors("shadow", "cream"),
    borderRadius: widthPercentageToDP(20)
  },
  profileImgContainer: {
    padding: widthPercentageToDP(2),
    backgroundColor: Colors("base", "cream"),
    marginBottom: widthPercentageToDP(1),
    borderRadius: widthPercentageToDP(20)
  },
  profileImg: {
    width: widthPercentageToDP(32),
    height: widthPercentageToDP(32),
    borderRadius: widthPercentageToDP(19),
    overflow: "hidden"
  },
  changeImgBtn: {
    position: "absolute",
    bottom: -widthPercentageToDP(1.5),
    right: -widthPercentageToDP(1.5),
    width: widthPercentageToDP(13),
    height: widthPercentageToDP(13)
  },
  textGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: widthPercentageToDP(5),
    marginBottom: widthPercentageToDP(0)
  },
  leftTextLatin: {
    color: "rgba(255,255,255,0.8)",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(5.5)
  },
  leftTextJawi: {
    color: "rgba(255,255,255,0.8)",
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    fontSize: widthPercentageToDP(5)
  },
  rightText: {
    color: "#fff",
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(5.5)
  },
  img: {
    width: null,
    height: null,
    resizeMode: "contain",
    flex: 1
  }
})
