import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../../utils/Responsive"

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(2.2),
    height: heightPercentageToDP(8.5)
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPercentageToDP(8.5),
    marginHorizontal: heightPercentageToDP(1)
  },
  imgIcon: {
    width: heightPercentageToDP(8.5),
    height: heightPercentageToDP(8.5),
    marginHorizontal: heightPercentageToDP(1.5)
  },
  text: {
    fontSize: widthPercentageToDP(10),
    fontFamily: Platform.OS === 'android' ? 'TitanOne-Regular' : 'TitanOne',
    color: '#000000'
  }
})

export default styles