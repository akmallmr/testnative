import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const screenShape = y / x < 1.5 ? 'square' : 'rectangle'; 
const iosDevice = x > 736 ? 'ipad' : 'iphone';

const ratioX = Platform.OS === 'ios' ? (x <= 375 ? (x <= 320 ? 0.60 : 0.75) : (x > 414 ? 1.2 : 1)) : (x <= 375 ? (x <= 320 ? 0.50 : 0.65) : (x > 414 ? 1.1 : 0.9));
const ratioY = Platform.OS === 'ios' ? (y <= 568 ? (y <= 480 ? 0.60 : 0.75) : (y > 736 ? 1.2 : 1)) : (y <= 568 ? (y <= 480 ? 0.50 : 0.65) : (y > 736 ? 1.1 : 0.9));

const base_unit = 16;

const unit = base_unit * ratioX;

function em(value) {
  return unit * value;
}

const Metrics = {
  platform: Platform.OS,
  statusBar: {
    backgroundColor: '#3AB5Cd',
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  pixelRatio: Platform.OS === 'ios' ? (x > 375 && x < 703 ? 2 : PixelRatio.get() - .4) : x * .004,
  screenShape: screenShape,
  iosDevice: iosDevice,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
//   screenWidth: x < y ? x : y,
//   screenHeight: x < y ? y : x,
  screenWidth: x,
  screenHeight: y,
  ratioX: ratioX,
  ratioY: ratioY,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },

  quranHeader: 0,
  headerSura: 0,
  progressSize: 0,
}

export default Metrics