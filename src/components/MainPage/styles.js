import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
  list: {
    width: screenWidth - 40,
  },
  divider: {
    backgroundColor: 'gray',
    height: 1,
    marginVertical: 10,
  },
});
