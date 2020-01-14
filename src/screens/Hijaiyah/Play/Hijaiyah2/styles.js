import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A334'
  },
  header: {
    height: heightPercentageToDP(20.1),
    justifyContent: 'flex-end',
  },
  headerImg: {
    maxWidth: widthPercentageToDP(63),
    height: heightPercentageToDP(18),
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  boardWrapper: {
    marginTop: heightPercentageToDP(2.2),
    height: heightPercentageToDP(8.5),
    // backgroundColor: 'red'
  },

  wrapper: {
    flex: 1,
    // flexDirection: 'row',
    // marginTop: heightPercentageToDP(24),
    // height: heightPercentageToDP(20),
    justifyContent: 'center',
    // backgroundColor: 'red'
  },

  buttonImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
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

  modalBG: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: .4
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalPaper: {
    marginTop: widthPercentageToDP(15),
    width: widthPercentageToDP(80.8),
    height: widthPercentageToDP(80.8),
    borderRadius: widthPercentageToDP(5),
    backgroundColor: '#F7C38F',
    borderColor: '#995728',
    borderWidth: widthPercentageToDP(.8)
  },


})

export default styles