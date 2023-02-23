import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CardProps} from './types';

const Card = ({title, description, isCompleted}: CardProps): JSX.Element => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={styles.cardStatus}>
        {isCompleted ? 'Completado' : 'To-do'}
      </Text>
    </View>
  );
};

export default Card;
