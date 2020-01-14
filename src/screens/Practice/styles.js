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
    backgroundColor: Colors()
  },
  learnContainer: {
    backgroundColor: Colors("base", "paleGreen"),
    flex: 1,
    borderTopRightRadius: widthPercentageToDP(5),
    borderTopLeftRadius: widthPercentageToDP(5),
    paddingVertical: widthPercentageToDP(1)
  },

  navContainer: {
    paddingHorizontal: widthPercentageToDP(4.5),
    marginVertical: widthPercentageToDP(2)
  },

  contentContainer: {
    flex: 1,
    borderRadius: widthPercentageToDP(4),
    marginBottom: widthPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(4.5),
    backgroundColor: Colors("shadow", "paleGreen")
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
  },
  loading: {
    marginVertical: widthPercentageToDP(5)
  }
})
