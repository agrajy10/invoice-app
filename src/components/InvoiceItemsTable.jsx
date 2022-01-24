import styled from 'styled-components';

import { formatPrice } from '../utils/utils';

const Table = styled.table`
  width: 100%;
  background-color: #f9fafe;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  padding: 32px;
  color: #7e88c3;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.23px;
`;

const ItemNameHead = styled(TableHead)`
  text-align: left;
`;

const ItemQtyHead = styled(TableHead)`
  text-align: center;
`;

const ItemPriceHead = styled(TableHead)`
  text-align: right;
`;

const ItemTotalHead = styled(TableHead)`
  text-align: right;
`;

const Body = styled.tbody`
  tr td {
    padding: 0 32px 32px 32px;
    font-weight: 700;
    font-size: 12px;
  }
`;

const ItemNameCol = styled.td`
  color: #0c0e16;
`;

const ItemQtyCol = styled.td`
  text-align: center;
`;

const ItemPriceCol = styled.td`
  text-align: right;
`;

const ItemTotalCol = styled(ItemNameCol)`
  text-align: right;
  color: #0c0e16;
`;

const Footer = styled.tfoot`
  background-color: #373b53;
  color: #fff;
  tr td {
    padding: 24px 32px;
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

function InvoiceItemsTable({ status, id, items, total }) {
  return (
    <Table>
      <thead>
        <tr>
          <ItemNameHead>Item Name</ItemNameHead>
          <ItemQtyHead>QTY.</ItemQtyHead>
          <ItemPriceHead>Price</ItemPriceHead>
          <ItemTotalHead>Total</ItemTotalHead>
        </tr>
      </thead>
      <Body>
        {items.map(({ name, price, quantity, total }, index) => {
          return (
            <tr key={index + id}>
              <ItemNameCol>{name}</ItemNameCol>
              <ItemQtyCol>{quantity}</ItemQtyCol>
              <ItemPriceCol>{formatPrice(price)}</ItemPriceCol>
              <ItemTotalCol>{formatPrice(total)}</ItemTotalCol>
            </tr>
          );
        })}
      </Body>
      <Footer>
        <tr>
          <TotalLabel>{status === 'paid' ? 'Grand total' : 'Amount Due'}</TotalLabel>
          <InvoiceTotal colSpan={3}>{formatPrice(total)}</InvoiceTotal>
        </tr>
      </Footer>
    </Table>
  );
}

export default InvoiceItemsTable;
