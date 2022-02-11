import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const wrapperVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween'
    }
  },
  exit: { opacity: 0, y: 100 }
};

function MainContainer({ children }) {
  return (
    <Wrapper
      as={motion.main}
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      {children}
    </Wrapper>
  );
}

export default MainContainer;
