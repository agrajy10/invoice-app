import { useContext } from 'react';
import styled from 'styled-components';
import { Dialog } from '@headlessui/react';

import { AppContext } from '../context/AppContext';

import { CLOSE_DRAWER } from '../actions';

import deviceSize from '../styles/breakpoints';

const Overlay = styled(Dialog.Overlay)`
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
  & > div {
    background-color: ${({ theme }) => theme.drawer.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 32px 24px;
  }

  @media screen and (min-width: ${deviceSize.md}) {
    & > div {
      padding: 56px 56px 32px 56px;
      max-width: 616px;
      border-radius: 0 20px 20px 0;
    }
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 0;
    & > div {
      max-width: 719px;
      padding: 56px 56px 32px 160px;
    }
  }
`;

function Drawer({ children, isOpen }) {
  const { isEditingInvoice, editInvoiceID, dispatch } = useContext(AppContext);
  return (
    <Dialog open={isOpen} onClose={() => dispatch({ type: CLOSE_DRAWER })}>
      <Overlay />
      <DrawerWrapper>
        <div>
          {isEditingInvoice && (
            <Dialog.Title className="sr-only">Edit Invoice {editInvoiceID}</Dialog.Title>
          )}
          {!isEditingInvoice && <Dialog.Title className="sr-only">New Invoice</Dialog.Title>}
          {children}
        </div>
      </DrawerWrapper>
    </Dialog>
  );
}

export default Drawer;
