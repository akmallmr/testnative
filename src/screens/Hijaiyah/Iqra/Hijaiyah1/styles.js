import { StyleSheet, Platform } from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"

const height = heightPercentageToDP(35)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A334'
  },
  header: {
    height: heightPercentageToDP(20.1),
    justifyContent: 'flex-end'
  },
  headerImg: {
    width: null,
    height: heightPercentageToDP(6.3),
    resizeMode: 'contain'
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP(11.7),
    // height: height,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // opacity: .3
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
    maxWidth: heightPercentageToDP(8.5),
    maxHeight: heightPercentageToDP(8.5),
    bottom: widthPercentageToDP(5)
  },
  hijaiyahWrapper: {
    width: widthPercentageToDP(62) * 0.8835820895522388,
    height: widthPercentageToDP(62),
    maxWidth: heightPercentageToDP(35) * 0.8835820895522388,
    maxHeight: heightPercentageToDP(35),
    marginHorizontal: widthPercentageToDP(2.7),
    overflow: 'hidden'
  },
  hijaiyahPaper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  hijaiyahArabText: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'Uthman' : 'KFGQPCUthmanTahaNaskh-Bold'
  },
  hijaiyahLatin: {
    position: 'absolute',
    height: height * .18,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  hijaiyahLatinText: {
    fontSize: height * .08,
    fontFamily: Platform.OS === 'android' ? "PoetsenoneRegular" : "poetsenone-regular",
    color: '#333',
    textAlign: "center"
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