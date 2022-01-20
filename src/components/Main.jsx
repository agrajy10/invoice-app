import { useContext } from 'react';
import styled from 'styled-components';

import InvoiceItem from './InvoiceItem/InvoiceItem';
import FilterDropdown from './FilterDropdown';

import { AppContext } from '../context/AppContext';

import deviceSize from '../styles/breakpoints';

const MainContainer = styled.main`
  width: 100%;
  padding: 32px 24px 105px 24px;
  margin: 0 auto;

  @media screen and (min-width: ${deviceSize.md}) {
    max-width: 778px;
    padding-top: 56px;
  }

  @media screen and (min-width: ${deviceSize.lg}) {
    padding-top: 72px;
  }
`;

const MainContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  @media screen and (min-width: ${deviceSize.md}) {
    margin-bottom: 56px;
  }
  @media screen and (min-width: ${deviceSize.lg}) {
    margin-bottom: 65px;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 7px;
  @media screen and (min-width: ${deviceSize.md}) {
    font-size: 32px;
  }
`;

const InvoicesCount = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #888eb0;
  text-spacing: -0.25px;
`;

const InvoicesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function Main() {
  const { filteredInvoices } = useContext(AppContext);
  return (
    <MainContainer>
      <MainContainerTop>
        <div>
          <Heading>Invoices</Heading>
          <InvoicesCount>{filteredInvoices.length} invoices</InvoicesCount>
        </div>
        <FilterDropdown />
      </MainContainerTop>
      {filteredInvoices.length > 0 && (
        <InvoicesList>
          {filteredInvoices.map((invoice) => (
            <li key={invoice.id}>
              <InvoiceItem {...invoice} />
            </li>
          ))}
        </InvoicesList>
      )}
    </MainContainer>
  );
}

export default Main;
