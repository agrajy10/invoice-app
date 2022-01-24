import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Button from './Button';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 7000;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: calc(100% - 48px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  z-index: 7002;
`;

const ModalHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #0c0e16;
  margin-bottom: 12px;
`;

const ModalMessage = styled.p`
  font-size: 12px;
  color: #888eb0;
  letter-spacing: -0.23px;
  margin-bottom: 24px;
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

function DeleteInvoiceModal({ id, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <ModalHeading>Confirm Deletion</ModalHeading>
        <ModalMessage>
          Are you sure you want to delete invoice #XM9141? This action cannot be undone.
        </ModalMessage>
        <ButtonContainer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="warning">Delete</Button>
        </ButtonContainer>
      </ModalContainer>
    </>,
    document.getElementById('portal')
  );
}

export default DeleteInvoiceModal;
