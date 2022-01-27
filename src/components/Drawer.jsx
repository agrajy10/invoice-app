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
  padding-top: 4.5rem;
  z-index: 7010;
  & > div {
    background-color: ${({ theme }) => theme.drawer.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 2rem 1.5rem;
  }

  @media screen and (min-width: ${deviceSize.md}) {
    & > div {
      padding: 3.5rem 3.5rem 2rem 3.5rem;
      max-width: 38.5rem;
      border-radius: 0 1.25rem 1.25rem 0;
    }
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 0;
    & > div {
      max-width: 44.9375rem;
      padding: 3.5rem 3.5rem 2rem 10rem;
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
