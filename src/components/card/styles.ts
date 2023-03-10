import styled from 'styled-components/native';

export const CardContainer = styled.View<{
  isCompleted: boolean;
  isAndroid: boolean;
}>`
  margin: 10px;
  padding: 15px;
  background-color: ${({theme, isAndroid}) =>
    isAndroid ? theme.colors.white : theme.colors.primary};
  border-radius: 20px;
  border-color: ${({isCompleted, theme}) =>
    isCompleted ? theme.colors.white : theme.colors.secondary};
  border-width: 3px;
  opacity: ${({isCompleted}) => (isCompleted ? 0.5 : 1)};
`;

export const CardTitle = styled.Text<{isAndroid: boolean}>`
  color: ${({isAndroid, theme}) =>
    isAndroid ? theme.colors.secondary : theme.colors.white};
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Lato-Bold';
`;

export const CardDescription = styled.Text<{isAndroid: boolean}>`
  color: ${({isAndroid, theme}) =>
    isAndroid ? theme.colors.secondary : theme.colors.white};
  font-family: 'Lato-LightItalic';
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;
