import { StyleSheet } from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import Colors from "../../../../constants/color"

export default StyleSheet.create({
  container: {
    width: widthPercentageToDP(80),
    marginHorizontal: widthPercentageToDP(5.5),
  },

  questionIndicatorContainer: {
    alignItems: "center",
    // justifyContent: "space-around",
    // width: "100%",
    marginBottom: widthPercentageToDP(2.5)
  },
  questionIndicator: {
    height: heightPercentageToDP(2.1),
    width: heightPercentageToDP(2.1),
    borderRadius: widthPercentageToDP(2.25),
    backgroundColor: Colors("base", "grey")
  },
  questionIndicatorActive: {
    backgroundColor: Colors("base", "blue")
  },

  img: {
    resizeMode: "contain",
    flex: 1,
    height: null,
    width: null
  }
})
