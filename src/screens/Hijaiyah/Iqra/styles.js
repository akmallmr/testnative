import { StyleSheet } from "react-native"
import { widthPercentageToDP, heightPercentageToDP } from "../../../utils/Responsive"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A334'
  },
  header: { 
    height: heightPercentageToDP(20.2), 
    justifyContent: 'flex-end',
    paddingBottom: heightPercentageToDP(3.4)
  },
  headerImg: { 
    width: null,
    height: heightPercentageToDP(10.1), 
    resizeMode: 'contain'
  },
  homeIcon: { 
    position: 'absolute', 
    top: widthPercentageToDP(5), 
    left: widthPercentageToDP(5),
    width: heightPercentageToDP(6.5), 
    height: heightPercentageToDP(6.5),
  },
  row: {
    marginVertical: widthPercentageToDP(1),
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: widthPercentageToDP(35),
    height: widthPercentageToDP(35) * 1.2203389830508475,
    maxWidth: heightPercentageToDP(24) * .8194444444444444,
    maxHeight: heightPercentageToDP(24),
    left: widthPercentageToDP(1)
  },
  buttonImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
})

export default styles