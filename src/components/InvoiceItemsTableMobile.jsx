import styled from 'styled-components';

import { formatPrice } from '../utils/utils';

const ItemsTable = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.invoiceTable.bg};
  border-radius: 0.5rem;
  overflow: hidden;
  border-collapse: collapse;
`;

const Body = styled.tbody`
  tr td {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  tr:first-child td {
    padding-top: 1.5rem;
  }
`;

const ItemNameCol = styled.td`
  text-align: left;
`;

const ItemName = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.23px;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 0.3125rem;
`;

const ItemQtyPrice = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.invoiceTable.heading};
`;

const ItemTotalCol = styled.td`
  font-size: 0.75rem;
  font-weight: 700;
  text-align: right;
  color: ${({ theme }) => theme.text.h1};
`;

const Footer = styled.tfoot`
  background-color: ${({ theme }) => theme.invoiceTable.footer.bg};
  color: ${({ theme }) => theme.invoiceTable.footer.color};
  tr td {
    padding: 1.5rem;
  }
`;

const TotalLabel = styled.td`
  font-size: 0.6875rem;
  font-weight: 500;
  text-align: left;
`;

const InvoiceTotal = styled.td`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.42px;
  text-align: right;
`;

function InvoiceItemsTableMobile({ status, id, items, total }) {
  return (
    <ItemsTable>
      <thead>
        <tr>
          <th>
            <div className="sr-only">Item</div>
          </th>
          <th>
            <div className="sr-only">Total</div>
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
