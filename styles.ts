import {Platform, StyleSheet} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  mainSection: {
    backgroundColor: '#b695c0',
    flex: 1,
  },
  list: {
    flex: 3,
  },
  empty: {
    marginTop: 30,
    color: '#ffffff',
    fontSize: 20,
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#503459',
  },
  input: {
    width: '75%',
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: isAndroid ? '#ffffff' : '#230443',
  },
  button: {
    height: 30,
    borderRadius: 15,
    width: '20%',
    alignItems: 'center',
    backgroundColor: '#dac9df',
  },
  buttonText: {
    color: '#230443',
    fontSize: 20,
  },
});
