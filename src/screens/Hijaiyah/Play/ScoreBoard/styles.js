import {
  StyleSheet,
  Platform
} from "react-native"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"

const widthPaper = widthPercentageToDP(93) > 385 ? 385 : widthPercentageToDP(93)
// const widthPaper = widthPercentageToDP(93) 
const styles = StyleSheet.create({
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
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  modalPaper: {
    // marginTop: widthPaper * .045,
    width: widthPaper,
    height: widthPaper * 1.8485639686684072,
    borderRadius: widthPaper * .09,
    backgroundColor: '#F2B579',
    borderColor: '#663B10',
    borderWidth: widthPaper * .015,
    padding: widthPaper * .025,
  },
  wrapper: {
    marginTop: (widthPaper * .16),
    paddingTop: widthPaper * .11,
    backgroundColor: '#FCCD8E',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: widthPaper * .09,
  },
  textHelp: {
    color: '#333',
    textAlign: 'center',
    fontFamily: 'crayon_kids',
    fontSize: widthPaper * .058,
    letterSpacing: -1,
    lineHeight: widthPaper * .065
  },
  buttonHelp: {
    width: (widthPaper * .18) * 1.6629213483146068,
    height: (widthPaper * .18),
    alignSelf: 'center'
  },
  topBoard: {
    position: 'absolute',
    top: -(widthPaper * .125),
    left: 0,
    right: 0,
    height: (widthPaper * .2)
  },
  item: {
    width: (widthPaper * .4),
    height: (widthPaper * .4) * 1.1228915662650603,
    marginHorizontal: (widthPaper * .03),
    marginBottom: (widthPaper * .05)
  },
  exitButton: {
    position: 'absolute',
    width: (widthPaper * .13),
    height: (widthPaper * .13),
    top: -(widthPaper * .03), 
    right: -(widthPaper * .04)
  },
  scoreBoard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: widthPaper * .08,
    justifyContent: 'center'
  },
  scoreText: {
    color: '#1A1A1A',
    textAlign: 'center',
    fontFamily: 'crayon_kids',
    fontSize: widthPaper * .035,
    letterSpacing: -.1
  },
  scoreValueText: {
    fontSize: widthPaper * .05,
    color: '#DB400D'
  },
  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
})

export default styles