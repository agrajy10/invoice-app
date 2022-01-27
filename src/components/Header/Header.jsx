import styled from 'styled-components';

import UserAvatar from './UserAvatar';
import ThemeToggleButton from './ThemeToggleButton';

import deviceSize from '../../styles/breakpoints';

import logo from '../../assets/logo.svg';

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.header.bg};
  display: flex;
  z-index: 8000;
  @media screen and (min-width: ${deviceSize.lg}) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 6.4375rem;
    height: 100%;
    border-radius: 0 1.25rem 1.25rem 0;
  }
`;

const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  @media screen and (min-width: ${deviceSize.lg}) {
    width: 100%;
    height: auto;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Invoice app logo" />
      <ThemeToggleButton />
      <UserAvatar />
    </HeaderContainer>
  );
}

export default Header;
