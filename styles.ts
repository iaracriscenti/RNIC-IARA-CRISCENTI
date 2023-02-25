import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.light};
`;

export const ListContainer = styled.View`
  flex: 3;
`;

export const FormContainer = styled.View`
  align-items: center;
  padding: 15px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const MainInputs = styled.TextInput`
  width: 75%;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const MainButton = styled.TouchableOpacity`
  border-radius: 15px;
  padding: 8px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.light};
`;
