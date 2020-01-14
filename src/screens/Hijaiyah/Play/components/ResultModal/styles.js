import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP } from "../../../../../utils/Responsive"

const widthPaper = widthPercentageToDP(92) > 385 ? 385 : widthPercentageToDP(92)
const styles = StyleSheet.create({
  backgroundShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: .4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    marginTop: widthPaper * .2,
    width: widthPaper,
    paddingVertical: widthPaper * .073,
    borderRadius: widthPaper * .07,
    backgroundColor: '#F2B579',
    borderColor: '#663B10',
    borderWidth: widthPaper * .015,
  },
  topBoard: {
    position: 'absolute', 
    left: 0,
    right: 0,
    top: -(widthPaper * .235),
    height: (widthPaper * .38)
  },
  jBoy: {
    height: widthPaper * .83,
  },

  scoreBoard: {
    position: 'absolute',
    left: widthPaper * .122,
    right: widthPaper * .122,
    top: -(widthPaper * .11),
    height: widthPaper * .162,
    backgroundColor: '#FFFBDE',
    borderColor: '#6FA194',
    borderRadius: widthPaper * .03,
    borderWidth: widthPaper * .011,
    justifyContent: 'center'
  },
  scoreText: {
    color: '#1A1A1A',
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'crayon kids' : 'crayon_kids',
    fontSize: widthPaper * .08,
    letterSpacing: -.1
  },
  scoreValueText: {
    fontSize: widthPaper * .1,
    color: '#DB400D'
  },

  menuBoard: {
    marginHorizontal: widthPaper * .073,
    height: widthPaper * .6,
    borderRadius: widthPaper * .03,
    backgroundColor: '#FCCB8E',
  },
  startWrapper: {
    flex: 1,
    marginTop: widthPaper * .05,
    marginHorizontal: widthPaper * .1,
    backgroundColor: '#FCCB8E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  startItem: {
    width: widthPaper * .18,
    height: widthPaper * .18
  },
  navWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: widthPaper * .08,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navItem: {
    width: widthPaper * .17,
    height: widthPaper * .17
  },


  imageContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
})

export default styles