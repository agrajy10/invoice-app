import styled from 'styled-components';

import deviceSize from '../styles/breakpoints';

const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 1.5rem 6.5625rem 1.5rem;
  margin: 0 auto;

  @media screen and (min-width: ${deviceSize.md}) {
    max-width: 48.625rem;
    padding-top: 3.5rem;
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 4.5rem;
  }
`;

function MainContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainContainer;
