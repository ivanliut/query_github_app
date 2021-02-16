import { Dimensions, StyleSheet } from 'react-native';
import { colorsMap } from '../../styles/colorsMap';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colorsMap.blackOneOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginVertical: 50,
  },
  row: {
    flexDirection: 'row',
  },
  takeAvailableSpace: {
    flex: 1,
  },
  button: {
      fontSize: 24,
      marginHorizontal: 10,
      marginVertical: 5,
  },
  webviewContainer: {
      width: screenWidth - 70,
      height: screenHeight - 120,
  },
});
