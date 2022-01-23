import styled from 'styled-components';

import deviceSize from '../styles/breakpoints';

const Wrapper = styled.main`
  width: 100%;
  padding: 32px 24px 105px 24px;
  margin: 0 auto;

  @media screen and (min-width: ${deviceSize.md}) {
    max-width: 778px;
    padding-top: 56px;
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 72px;
  }
`;

function MainContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainContainer;
