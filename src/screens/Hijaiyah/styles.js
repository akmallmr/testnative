import { StyleSheet, Platform } from "react-native"
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/Responsive"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A334'
  },
  header: { height: heightPercentageToDP(18.5), justifyContent: 'flex-end' },
  logo: { 
    width: null,
    height: heightPercentageToDP(15),  
    resizeMode: 'contain'
  },
  hijaiyahHeader: { 
    height: heightPercentageToDP(18), 
    justifyContent: 'flex-end' 
  },
  hijaiyahHeaderImage: { 
    height: heightPercentageToDP(15.3), 
    maxWidth: widthPercentageToDP(84),
    maxHeight: widthPercentageToDP(84) * .3252212389380531, 
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  menuContainer: { paddingTop: heightPercentageToDP(.5), height: heightPercentageToDP(19.5), justifyContent: 'center', flexDirection: 'row'},
  menuButton: { 
    width: heightPercentageToDP(19), 
    height: heightPercentageToDP(19),
    maxWidth: widthPercentageToDP(35), 
    maxHeight: widthPercentageToDP(35)
  },
  characterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  characterJBoy: {
    width: widthPercentageToDP(56),
    height: widthPercentageToDP(56) * 1.3762376237623761,
    maxWidth: heightPercentageToDP(43.5) * .7266187050359713,
    maxHeight: heightPercentageToDP(43.5),
    resizeMode: 'contain'
  },
  characterJGirl: {
    width: widthPercentageToDP(42),
    height: widthPercentageToDP(42) * 1.6824034334763949,
    maxWidth: heightPercentageToDP(39.8) * .5943877551020408,
    maxHeight: heightPercentageToDP(39.8),
    resizeMode: 'contain'
  },
  homeIcon: {
    position: 'absolute',
    top: widthPercentageToDP(5),
    left: widthPercentageToDP(5),
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