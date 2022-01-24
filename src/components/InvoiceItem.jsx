import styled from 'styled-components';
import { Link } from 'react-router-dom';

import InvoiceStatusBadge from './InvoiceStatusBadge';

import deviceSize from '../styles/breakpoints';
import { formatDate, formatPrice } from '../utils/utils';

import { ReactComponent as IconArrowRight } from '../assets/icon-arrow-right.svg';

const Wrapper = styled(Link)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  background-color: #fff;
  border-radius: 8px;
  padding: 64px 24px 24px 24px;
  border: 1px solid #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  text-decoration: none;
  margin-bottom: 16px;
  &:hover {
    border-color: #7c5dfa;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    grid-template-columns: 103px 151px 110px 142px 144px 26px;
    padding: 24px;
    align-items: center;
  }
`;

const InvoiceID = styled.span`
  display: block;
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 12px;
  font-weight: 700;
  color: #0c0e16;
  text-transform: uppercase;
  margin-bottom: 24px;
  &:before {
    content: '#';
    color: #7e88c3;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    margin-bottom: 0;
    position: static;
  }
`;

const ClientName = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 12px;
  font-weight: 500;
  color: #858bb2;
  text-align: right;
  margin-bottom: 24px;
  @media screen and (min-width: ${deviceSize.md}) {
    margin-bottom: 0;
    text-align: left;
    position: static;
  }
`;

const DueDate = styled(ClientName)`
  position: static;
  display: block;
  text-align: left;
  margin-bottom: 8px;
  grid-column: 1/3;
  @media screen and (min-width: ${deviceSize.md}) {
    margin-bottom: 0;
    grid-column: auto;
  }
`;

const Amount = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.8px;
  color: #0c0e16;
  @media screen and (min-width: ${deviceSize.md}) {
    text-align: right;
  }
`;

const ArrowIcon = styled.div`
  display: none;
  text-align: right;
  @media screen and (min-width: ${deviceSize.md}) {
    display: block;
  }
`;

function InvoiceItem({ clientName, id, paymentDue, status, total }) {
  const formattedDueDate = `Due ${formatDate(paymentDue)}`;
  const formattedTotal = formatPrice(total);
  return (
    <Wrapper to={id}>
      <InvoiceID>{id}</InvoiceID>
      <DueDate>{formattedDueDate}</DueDate>
      <ClientName>{clientName}</ClientName>
      <Amount>{formattedTotal}</Amount>
      <InvoiceStatusBadge status={status} />
      <ArrowIcon>
        <IconArrowRight />
      </ArrowIcon>
    </Wrapper>
  );
}

export default InvoiceItem;
