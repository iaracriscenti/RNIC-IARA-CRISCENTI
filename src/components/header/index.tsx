import React from 'react';
import {HeaderContainer, HeaderText} from './styles';

const Header = (title: string) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
