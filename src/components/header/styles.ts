import styled from 'styled-components/native';

export const HeaderContainer = styled.SafeAreaView`
  align-self: center;
`;

export const HeaderText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-weight: 800;
  font-size: 30px;
  margin: 10px;
  font-family: 'Lato-Bold';
`;
