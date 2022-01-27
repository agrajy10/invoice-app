import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Dialog } from '@headlessui/react';

import Button from './Button';

import { AppContext } from '../context/AppContext';

import { DELETE_INVOICE } from '../actions';

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 7000;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: calc(100% - 48px);
  max-width: 480px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.deleteModal.bg};
  border-radius: 8px;
  padding: 32px;
  z-index: 7002;
`;

const ModalHeading = styled(Dialog.Title)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.deleteModal.heading};
  margin-bottom: 12px;
`;

const ModalMessage = styled(Dialog.Description)`
  font-size: 12px;
  color: ${({ theme }) => theme.deleteModal.body};
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

function DeleteInvoiceModal({ id, isOpen, closeModal }) {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const deleteInvoice = () => {
    dispatch({ type: DELETE_INVOICE, payload: id });
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <Overlay />
      <ModalContainer>
        <ModalHeading>Confirm Deletion</ModalHeading>
        <ModalMessage>
          Are you sure you want to delete invoice #{id}? This action cannot be undone.
        </ModalMessage>
        <ButtonContainer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="warning" onClick={deleteInvoice}>
            Delete
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Dialog>
  );
}

export default DeleteInvoiceModal;
