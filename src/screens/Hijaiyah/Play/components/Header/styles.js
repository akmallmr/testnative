import { StyleSheet } from "react-native"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../../utils/Responsive"

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(20.1),
    justifyContent: 'flex-end',
  },
  headerImg: {
    maxWidth: widthPercentageToDP(63),
    height: heightPercentageToDP(18),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  
  navLeft: {
    position: 'absolute',
    top: widthPercentageToDP(5),
    left: widthPercentageToDP(5),
    width: heightPercentageToDP(6.5),
    height: heightPercentageToDP(6.5),
  },
  navRight: {
    position: 'absolute',
    top: widthPercentageToDP(5),
    right: widthPercentageToDP(5),
    width: heightPercentageToDP(6.5),
    height: heightPercentageToDP(6.5),
  },

  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }

})

export default styles