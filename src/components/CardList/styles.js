import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP } from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backColor: {
    backgroundColor: Colors("shadow", "cream"),
    borderRadius: widthPercentageToDP(6),
    margin: widthPercentageToDP(1),
    shadowColor: "rgba(0,0,0,26)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 3
  },
  cardContainer: {
    backgroundColor: Colors("base", "cream"),
    flex: 1,
    padding: widthPercentageToDP(2),
    borderRadius: widthPercentageToDP(6),
    marginBottom: widthPercentageToDP(1)
  },
  cardImageBackColor: {
    backgroundColor: Colors("shadow", "cream"),
    height: widthPercentageToDP(35.5),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: widthPercentageToDP(2),
    borderRadius: widthPercentageToDP(6.5),
    overflow: "hidden"
  },
  cardImage: {
    marginTop: widthPercentageToDP(0.5),
    marginRight: widthPercentageToDP(1),
    paddingLeft: widthPercentageToDP(1),
    width: "100%",
    backgroundColor: "#fff",
    height: widthPercentageToDP(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: widthPercentageToDP(6.5),
    overflow: "hidden"
  },
  cardTitleLatin: {
    color: Colors("base", "darkOrange"),
    fontFamily:
      Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular",
    textAlign: "center",
    fontSize: widthPercentageToDP(4.5)
  },
  cardTitleJawi: {
    color: Colors("base", "darkOrange"),
    fontFamily: Platform.OS === "android" ? "GeezaProBold" : "GeezaPro-Bold",
    textAlign: "center",
    fontSize: widthPercentageToDP(4.5)
  },

  listContainer: {
    paddingVertical: widthPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(2)
  },

  img: {
    resizeMode: "contain",
    flex: 1,
    width: "100%",
    height: null
  }
})
