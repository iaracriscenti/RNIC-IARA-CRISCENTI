import {Platform, StyleSheet} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: isAndroid ? '#ffffff' : '#230443',
    borderRadius: 20,
    borderColor: '#503459',
    borderWidth: 0.5,
  },
  cardTitle: {
    color: isAndroid ? '#503459' : '#ffffff',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  cardDescription: {
    color: isAndroid ? '#503459' : '#ffffff',
  },
  cardStatus: {
    color: isAndroid ? '#503459' : '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});
