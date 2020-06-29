import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

export function normalize(size) {
  let scale = width / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
