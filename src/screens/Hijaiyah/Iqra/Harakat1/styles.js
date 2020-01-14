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
    height: heightPercentageToDP(20),
    marginBottom: heightPercentageToDP(6.5),
    justifyContent: 'flex-end',
  },
  headerImg: {
    width: null,
    height: heightPercentageToDP(6.4),
    resizeMode: 'contain'
  },
  wrapper: {
    flexDirection: 'row',
    marginBottom: heightPercentageToDP(4.6),
    height: widthPercentageToDP(62),
    justifyContent: 'center',
    alignItems: 'center',
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

  arrowIcon: {
    width: widthPercentageToDP(15),
    height: widthPercentageToDP(15),
    bottom: widthPercentageToDP(3)
  },
  hijaiyahWrapper: {
    width: widthPercentageToDP(62) * 0.8835820895522388,
    height: widthPercentageToDP(62),
    marginHorizontal: widthPercentageToDP(2.7),
  },
  hijaiyahPaper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  hijaiyahArabText: {
    textAlign: 'center',
    fontFamily: Platform.OS ==='android' ? 'Uthman' : 'KFGQPCUthmanTahaNaskh-Bold'
  },
  hijaiyahLatin: {
    position: 'absolute',
    height: heightPercentageToDP(7),
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  hijaiyahLatinText: {
    fontSize: heightPercentageToDP(2.5),
    fontFamily: Platform.OS === 'android' ? "PoetsenoneRegular" : "poetsenone-regular",
    color: '#333',
    textAlign: "center"
  }
})

export default styles