import { StyleSheet } from "react-native"
import { widthPercentageToDP } from "../../utils/Responsive"
import Colors from "../../constants/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors()
  },
  header: {
    height: widthPercentageToDP(42),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: widthPercentageToDP(42),
    paddingTop: widthPercentageToDP(10),
    paddingBottom: widthPercentageToDP(5)
  },
  img: {
    height: null,
    flex: 1,
    resizeMode: "contain"
  },

  changeLanguage: {
    paddingHorizontal: widthPercentageToDP(4.5),
    paddingBottom: widthPercentageToDP(5.5)
  },

  contentContainer: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    flex: 1,
    borderRadius: widthPercentageToDP(5),
    width: widthPercentageToDP(91),
    overflow: "hidden",
    zIndex: 1
  },

  authContentBackColor: {
    backgroundColor: Colors("shadow", "cream")
  },
  authContent: {
    backgroundColor: Colors("base", "cream"),
    padding: widthPercentageToDP(5.5),
    paddingBottom: widthPercentageToDP(8),
    marginBottom: widthPercentageToDP(1.5),
    borderBottomLeftRadius: widthPercentageToDP(5),
    borderBottomRightRadius: widthPercentageToDP(5)
  },

  forgetContainer: {
    borderRadius: widthPercentageToDP(5),
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: Colors("shadow", "blue"),
    alignItems: "center"
  },

  submitBtn: {
    zIndex: 1,
    marginTop: -(widthPercentageToDP(5) + 6),
    marginBottom: widthPercentageToDP(5)
  },
  submit: {
    backgroundColor: Colors("base", "red"),
    borderBottomColor: Colors("shadow", "red")
  },
  submitText: {
    minWidth: widthPercentageToDP(40),
    fontSize: widthPercentageToDP(5.5)
  }
})
