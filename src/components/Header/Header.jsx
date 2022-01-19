import styled from 'styled-components';

import UserAvatar from './UserAvatar';

import breakpoint from '../../styles/breakpoints';

import logo from '../../assets/logo.svg';

const HeaderContainer = styled.header`
  background-color: #373b53;
  display: flex;

  @media only screen and ${breakpoint.device.lg} {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 103px;
    height: 100%;
    border-radius: 0 20px 20px 0;
  }
`;

const Logo = styled.img`
  width: 72px;
  height: 72px;

  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
    height: auto;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Invoice app logo" />
      <UserAvatar />
    </HeaderContainer>
  );
}

export default Header;
