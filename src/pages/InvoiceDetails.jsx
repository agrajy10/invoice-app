import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import MainContainer from '../layout/MainContainer';
import InvoiceStatusBadge from '../components/InvoiceStatusBadge';
import InvoiceInfo from '../components/InvoiceInfo';
import InvoiceItemsTableMobile from '../components/InvoiceItemsTableMobile';
import InvoiceItemsTable from '../components/InvoiceItemsTable';
import Button from '../components/Button';
import DeleteInvoiceModal from '../components/DeleteInvoiceModal';

import { AppContext } from '../context/AppContext';

import { MARK_INVOICE_PAID, EDIT_INVOICE } from '../actions';
import { formatDate } from '../utils/utils';
import useWindowSize from '../hooks/useWindowSize';
import deviceSize from '../styles/breakpoints';

import IconArrowLeft from '../assets/icon-arrow-left.svg';

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  text-decoration: none;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 2rem;
  img {
    margin-right: 1.4375rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  @media screen and (min-width: ${deviceSize.md}) {
    justify-content: flex-start;
    gap: 16px;
  }
`;

const StatusLbl = styled.p`
  font-size: 0.75rem;
  color: #858bb2;
  font-weight: 500;
`;

const InvoiceActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  padding: 1.3125rem 1.5rem;
  @media screen and (min-width: ${deviceSize.md}) {
    position: static;
    margin-left: auto;
    padding: 0;
  }
`;

const DetailsCard = styled.main`
  background-color: ${({ theme }) => theme.invoiceDetails.bg};
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text.color2};
  line-height: 1.6;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  margin-bottom: 2.8125rem;
`;

const DetailsCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'nameid nameid'
    'senderaddress senderaddress'
    'invoicedates clientnameaddress'
    'clientemail clientemail';
  gap: 30px 20px;
  margin-bottom: 2.5rem;
  .invoice-id-name {
    grid-area: nameid;
  }
  .sender-address {
    grid-area: senderaddress;
  }
  .invoice-dates {
    grid-area: invoicedates;
  }
  .client-email {
    grid-area: clientemail;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'nameid nameid senderaddress'
      'invoicedates clientnameaddress clientemail';
  }
`;

const InvoiceIdName = styled.div`
  display: block;
`;

const InvoiceID = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  letter-spacing: -0.23px;
  margin-bottom: 0.25rem;
  margin: 0;
  &:before {
    content: '#';
    color: #7e88c3;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    font-size: 1rem;
  }
`;

const InvoiceName = styled.h1`
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0.25rem 0;
`;

const SenderAddress = styled.address`
  font-size: 0.6875rem;
  font-style: normal;
  letter-spacing: -0.23px;
  @media screen and (min-width: ${deviceSize.md}) {
    text-align: right;
  }
`;

function InvoiceDetails() {
  const [invoice, setInvoice] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { invoiceId } = useParams();
  const { invoices, dispatch } = useContext(AppContext);
  const windowSize = useWindowSize();

  useEffect(() => {
    const [currentInvoice] = invoices.filter((invoice) => invoice.id === invoiceId);
    setInvoice(currentInvoice);
  }, [invoiceId, invoices]);

  return (
    <MainContainer>
      <BackButton to="/">
        <img src={IconArrowLeft} alt="" />
        Go back
      </BackButton>
      {invoice && (
        <>
          <Header>
            <StatusLbl>Status</StatusLbl>
            <InvoiceStatusBadge status={invoice.status} />
            <InvoiceActions>
              {invoice.status !== 'paid' && (
                <Button
                  variant="secondary"
                  aria-label="Edit Invoice"
                  onClick={() => dispatch({ type: EDIT_INVOICE, payload: invoice.id })}>
                  Edit
                </Button>
              )}
              <Button
                variant="warning"
                aria-label="Delete Invoice"
                onClick={() => setIsDeleteModalOpen(true)}>
                Delete
              </Button>
              {invoice.status !== 'paid' && invoice.status !== 'draft' && (
                <Button
                  aria-label="Mark Invoice as Paid"
                  variant="primary"
                  onClick={() => dispatch({ type: MARK_INVOICE_PAID, payload: invoice.id })}>
                  Mark as Paid
                </Button>
              )}
            </InvoiceActions>
          </Header>
          <DetailsCard>
            <DetailsCardGrid>
              <InvoiceIdName className="invoice-id-name">
                <InvoiceID>{invoice.id}</InvoiceID>
                <InvoiceName>{invoice.description}</InvoiceName>
              </InvoiceIdName>
              <SenderAddress className="sender-address">
                {invoice.senderAddress.street}
                <br />
                {invoice.senderAddress.city}
                <br />
                {invoice.senderAddress.postCode}
                <br />
                {invoice.senderAddress.country}
              </SenderAddress>
              <div className="invoice-dates">
                <InvoiceInfo
                  className="created-at"
                  label="Invoice date"
                  value={formatDate(invoice.createdAt)}
                />
                <InvoiceInfo
                  className="payment-due"
                  label="Payment Due"
                  value={formatDate(invoice.paymentDue)}
                />
              </div>
              <div className="client-name-address">
                <InvoiceInfo className="client-name" label="Bill To" value={invoice.clientName} />
                <InvoiceInfo className="client-address">
                  <address>
                    {invoice.clientAddress.street}
                    <br />
                    {invoice.clientAddress.city}
                    <br />
                    {invoice.clientAddress.postCode}
                    <br />
                    {invoice.clientAddress.country}
                  </address>
                </InvoiceInfo>
              </div>
              <InvoiceInfo className="client-email" label="Sent to" value={invoice.clientEmail} />
            </DetailsCardGrid>
            {windowSize.width <= 576 ? (
              <InvoiceItemsTableMobile
                status={invoice.status}
                id={invoice.id}
                items={invoice.items}
                total={invoice.total}
              />
            ) : (
              <InvoiceItemsTable
                status={invoice.status}
                id={invoice.id}
                items={invoice.items}
                total={invoice.total}
              />
            )}
          </DetailsCard>
        </>
      )}
      {invoice && (
        <DeleteInvoiceModal
          id={invoice.id}
          isOpen={isDeleteModalOpen}
          closeModal={() => setIsDeleteModalOpen(false)}
        />
      )}
    </MainContainer>
  );
}

export default InvoiceDetails;
