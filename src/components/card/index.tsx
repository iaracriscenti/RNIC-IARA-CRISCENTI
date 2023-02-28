import React from 'react';
import {
  CardContainer,
  CardDescription,
  CardTitle,
  IconsContainer,
  ImageContainer,
} from './styles';
import {CardProps} from '../../types/card-types';
import {EditIcon, ToggleLeft, ToggleRight, TrashIcon} from '../../assets/icons';
import {useTheme} from 'styled-components/native';

const Card = ({
  title,
  description,
  isCompleted,
  index,
}: CardProps): JSX.Element => {
  const theme = useTheme();
  return (
    <CardContainer isCompleted={isCompleted}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <IconsContainer>
        {isCompleted ? (
          <ToggleRight color={theme.colors.primary} />
        ) : (
          <ToggleLeft color={theme.colors.primary} />
        )}
        <EditIcon color={theme.colors.primary} />
        <TrashIcon color={theme.colors.primary} />
      </IconsContainer>
      {(index % 2 === 0 || index % 3 === 0 || index % 5 === 0) && (
        <ImageContainer
          source={
            index % 5 === 0
              ? require('../../assets/images/grogu-cookie.jpg')
              : index % 3 === 0
              ? require('../../assets/images/grogu-fernet.jpg')
              : index % 2 === 0
              ? require('../../assets/images/grogu-mandalorian.jpg')
              : null
          }
        />
      )}
    </CardContainer>
  );
};

export default Card;
