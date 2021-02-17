import { Dimensions, StyleSheet } from 'react-native';
import { colorsMap } from '../../styles/colorsMap';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorsMap.white,
  },
  heading: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: screenWidth - 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colorsMap.fireEngineRed3opacity,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 15,
  },
  list: {
    width: screenWidth - 40,
  },
  divider: {
    backgroundColor: colorsMap.stormGray,
    height: 1,
    marginVertical: 10,
  },
  chooser: {
    width: '60%',
    marginVertical: 10,
  },
});
