import styled from 'styled-components';

import { formatPrice } from '../utils/utils';

const ItemsTable = styled.table`
  width: 100%;
  background-color: #f9fafe;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;
`;

const Body = styled.tbody`
  tr td {
    padding: 24px;
  }
  tr:last-child td {
    padding-top: 0;
  }
`;

const Hidden = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  overflow-wrap: normal;
`;

const ItemNameCol = styled.td`
  text-align: left;
`;

const ItemName = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #0c0e16;
  letter-spacing: -0.23px;
  margin-bottom: 5px;
`;

const ItemQtyPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #7e88c3;
`;

const ItemTotalCol = styled.td`
  font-size: 12px;
  font-weight: 700;
  color: #0c0e16;
  text-align: right;
`;

const Footer = styled.tfoot`
  background-color: #373b53;
  tr td {
    padding: 24px;
  }
`;

const TotalLabel = styled.td`
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: #fff;
`;

const InvoiceTotal = styled.td`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.42px;
  color: #fff;
  text-align: right;
`;

function InvoiceItemsTableMobile({ status, id, items, total }) {
  return (
    <ItemsTable>
      <thead>
        <tr>
          <th>
            <Hidden>Item</Hidden>
          </th>
          <th>
            <Hidden>Total</Hidden>
          </th>
        </tr>
      </thead>
      <Body>
        {items.map(({ name, price, quantity, total }, index) => {
          return (
            <tr key={index + id}>
              <ItemNameCol>
                <ItemName>{name}</ItemName>
                <ItemQtyPrice>{`${formatPrice(price)} X ${quantity}`}</ItemQtyPrice>
              </ItemNameCol>
              <ItemTotalCol>{formatPrice(total)}</ItemTotalCol>
            </tr>
          );
        })}
      </Body>
      <Footer>
        <tr>
          <TotalLabel>{status === 'paid' ? 'Grand total' : 'Amount Due'}</TotalLabel>
          <InvoiceTotal>{formatPrice(total)}</InvoiceTotal>
        </tr>
      </Footer>
    </ItemsTable>
  );
}

export default InvoiceItemsTableMobile;
