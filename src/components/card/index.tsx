import React from 'react';
import {
  CardContainer,
  CardDescription,
  CardTitle,
  IconsContainer,
} from './styles';
import {CardProps} from '../../types/card-types';
import {EditIcon, ToggleLeft, ToggleRight, TrashIcon} from '../../assets/icons';
import {useTheme} from 'styled-components/native';

const Card = ({title, description, isCompleted}: CardProps): JSX.Element => {
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
    </CardContainer>
  );
};

export default Card;
