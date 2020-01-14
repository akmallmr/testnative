import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP
} from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1
  },

  backColor: {
    flex: 1,
    paddingTop: widthPercentageToDP(2.5),
    backgroundColor: Colors("shadow", "paleGreen"),
    borderTopRightRadius: widthPercentageToDP(5),
    borderTopLeftRadius: widthPercentageToDP(5)
  },

  learnContainer: {
    backgroundColor: Colors("base", "blue"),
    flex: 1,
    borderTopRightRadius: widthPercentageToDP(6),
    borderTopLeftRadius: widthPercentageToDP(6),
    paddingVertical: widthPercentageToDP(1)
  },

  navContainer: {
    paddingHorizontal: widthPercentageToDP(4.5),
    marginVertical: widthPercentageToDP(2)
  },

  searchBarContainer: {
    borderRadius: widthPercentageToDP(6),
    height: widthPercentageToDP(12),
    backgroundColor: "#fff",
    marginHorizontal: widthPercentageToDP(4.5),
    flexDirection: "row",
    alignItems: "center"
  },
  searchBarImg: {
    width: widthPercentageToDP(12),
    height: widthPercentageToDP(12),
    padding: widthPercentageToDP(1.5)
  },
  searchBarInput: {
    flex: 1,
    fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    fontSize: widthPercentageToDP(5.5),
    marginLeft: widthPercentageToDP(2),
    marginRight: widthPercentageToDP(5)
  },

  contentContainer: {
    flex: 1,
    borderRadius: widthPercentageToDP(4),
    marginTop: widthPercentageToDP(3),
    marginBottom: widthPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(4.5),
    backgroundColor: Colors("shadow", "blue"),
    overflow: "hidden"
  },

  boxShadow: {
    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.4
  },
  img: {
    resizeMode: "contain",
    flex: 1,
    height: null,
    width: null
  }
})
