import { createPortal } from 'react-dom';
import styled from 'styled-components';

import deviceSize from '../styles/breakpoints';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 7000;
`;

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 72px;
  z-index: 7010;
  div {
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 32px 24px;
  }

  @media screen and (min-width: ${deviceSize.md}) {
    div {
      padding: 56px;
      max-width: 616px;
      border-radius: 0 20px 20px 0;
    }
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 0;
    div {
      max-width: 719px;
      padding: 56px 56px 56px 160px;
    }
  }
`;

function Drawer({ children, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <>
      <Overlay />
      <DrawerWrapper>
        <div>{children}</div>
      </DrawerWrapper>
    </>,
    document.getElementById('portal')
  );
}

export default Drawer;
