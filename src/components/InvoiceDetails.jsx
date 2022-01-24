import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import MainContainer from './MainContainer';
import InvoiceStatusBadge from './InvoiceItem/InvoiceStatusBadge';
import InvoiceInfo from './InvoiceInfo';
import InvoiceItemsTableMobile from './InvoiceItemsTableMobile';
import Button from './Button';

import { AppContext } from '../context/AppContext';

import { formatDate } from '../utils/utils';
import deviceSize from '../styles/breakpoints';

import IconArrowLeft from '../assets/icon-arrow-left.svg';

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  text-decoration: none;
  color: #0c0e16;
  margin-bottom: 32px;
  img {
    margin-right: 23px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px 32px;
  margin-bottom: 16px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  @media screen and (min-width: ${deviceSize.md}) {
    justify-content: flex-start;
    gap: 16px;
  }
`;

const StatusLbl = styled.p`
  font-size: 12px;
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
  background-color: #fff;
  padding: 21px 24px;
  @media screen and (min-width: ${deviceSize.md}) {
    position: static;
    margin-left: auto;
    padding: 0;
  }
`;

const DetailsCard = styled.main`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #7e88c3;
  line-height: 1.6;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  margin-bottom: 45px;
`;

const DetailsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px;
  margin-bottom: 40px;
  .invoice-id-name,
  .sender-address,
  .client-email {
    grid-column: 1/3;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    grid-template-columns: repeat(3, 1fr);
    .sender-address,
    .client-email {
      grid-column: auto;
    }
  }
`;

const InvoiceIdName = styled.div`
  display: block;
`;

const InvoiceID = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #0c0e16;
  letter-spacing: -0.23px;
  margin-bottom: 4px;
  &:before {
    content: '#';
    color: #7e88c3;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    font-size: 16px;
  }
`;

const InvoiceName = styled.h1`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const SenderAddress = styled.address`
  font-size: 11px;
  font-style: normal;
  letter-spacing: -0.23px;
  @media screen and (min-width: ${deviceSize.md}) {
    text-align: right;
  }
`;

function InvoiceDetails() {
  const [invoice, setInvoice] = useState(null);
  const { invoiceId } = useParams();
  const { invoices } = useContext(AppContext);

  useEffect(() => {
    const [currentInvoice] = invoices.filter((invoice) => invoice.id === invoiceId);
    setInvoice(currentInvoice);
  }, [invoiceId]);

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
              {invoice.status !== 'paid' && <Button variant="secondary">Edit</Button>}
              <Button variant="warning">Delete</Button>
              {invoice.status !== 'paid' && invoice.status !== 'draft' && (
                <Button variant="primary">Mark as Paid</Button>
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
              <div>
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
            {invoice.items.length > 0 && (
              <InvoiceItemsTableMobile
                id={invoice.id}
                items={invoice.items}
                total={invoice.total}
              />
            )}
          </DetailsCard>
        </>
      )}
    </MainContainer>
  );
}

export default InvoiceDetails;
