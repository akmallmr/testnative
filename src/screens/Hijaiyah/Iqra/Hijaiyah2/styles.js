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
    justifyContent: 'flex-end',
    marginBottom: heightPercentageToDP(11)
  },
  headerImg: {
    width: null,
    height: heightPercentageToDP(6.3),
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
  harakat: {
    height: heightPercentageToDP(12.6),
    marginBottom: heightPercentageToDP(3),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  harakatItem: {
    width: heightPercentageToDP(9.6) * 1.358695652173913,
    height: heightPercentageToDP(9.6),
    marginHorizontal: widthPercentageToDP(1)
  },
  wrapper: {
    justifyContent: 'center',
    flexDirection: Platform.OS === 'android' ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    direction: 'rtl',
    width: widthPercentageToDP(90),
    alignSelf: 'center'
  },
  button: {
    width: heightPercentageToDP(8.5),
    height: heightPercentageToDP(8.5),
    overflow: 'hidden'
  },
  buttonImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  modalBG: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: Platform.OS === 'android' ? -30 : 0,
    backgroundColor: '#000',
    opacity: .4
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalPaper: {
    width: widthPercentageToDP(67.1) * 0.883495145631068,
    height: widthPercentageToDP(67.1)
  },
  modalHijaiyahText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: Platform.OS === 'android' ? 'Uthman' : 'KFGQPCUthmanTahaNaskh-Bold',
    textAlign: 'center'
  },
  modalTransliteration: {
    position: 'absolute',
    height: heightPercentageToDP(7),
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalTransliterationText: {
    fontFamily: Platform.OS === 'android' ? "PoetsenoneRegular" : "poetsenone-regular",
    textAlign: "center",
    color: '#000'
  }
})

export default styles