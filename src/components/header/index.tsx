import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Header = (title: string) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default Header;
