import { StyleSheet, Platform } from "react-native"
import Metrics from "../../../../utils/Metrics"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import Colors from "../../../../constants/color"

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
    backgroundColor: Colors("base", "paleGreen"),
    flex: 1,
    borderTopRightRadius: widthPercentageToDP(6),
    borderTopLeftRadius: widthPercentageToDP(6),
    paddingVertical: widthPercentageToDP(1)
  },

  navContainer: {
    paddingHorizontal: widthPercentageToDP(4.5),
    marginVertical: widthPercentageToDP(2)
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Colors("shadow", "paleGreen"),
    width: widthPercentageToDP(91),
    // marginTop: widthPercentageToDP(3) + Metrics.screenWidth * 0.02,
    marginBottom: widthPercentageToDP(2) + Metrics.screenWidth * 0.02,
    marginHorizontal: widthPercentageToDP(4.5),
    overflow: "hidden",
    borderRadius: widthPercentageToDP(4)
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
