import { useContext } from 'react';
import styled from 'styled-components';

import MainContainer from '../layout/MainContainer';
import InvoiceItem from '../components/InvoiceItem';
import FilterDropdown from '../components/FilterDropdown';
import Button from '../components/Button';
import NoInvoice from '../components/NoInvoice';

import { AppContext } from '../context/AppContext';

import { OPEN_DRAWER } from '../actions';

import { invoicesCountText } from '../utils/utils';

import deviceSize from '../styles/breakpoints';

const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  & > div:first-child {
    margin-right: auto;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    margin-bottom: 3.5rem;
  }
  @media screen and (min-width: ${deviceSize.lg}) {
    margin-bottom: 4.0625rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.4375rem;
  @media screen and (min-width: ${deviceSize.md}) {
    font-size: 2rem;
  }
`;

const InvoicesCount = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.color1};
  text-spacing: -0.25px;
`;

const InvoicesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NewInvoiceButton = styled(Button)`
  span {
    display: none;
  }

  @media screen and (min-width: ${deviceSize.md}) {
    span {
      display: revert;
    }
  }
`;

function Home() {
  const { filteredInvoices, dispatch } = useContext(AppContext);
  return (
    <MainContainer>
      <HomeHeader>
        <div>
          <Heading>Invoices</Heading>
          <InvoicesCount>{invoicesCountText(filteredInvoices.length)}</InvoicesCount>
        </div>
        <FilterDropdown />
        <NewInvoiceButton icon={true} onClick={() => dispatch({ type: OPEN_DRAWER })}>
          New <span>Invoice</span>
        </NewInvoiceButton>
      </HomeHeader>
      {filteredInvoices.length > 0 ? (
        <InvoicesList>
          {filteredInvoices.map((invoice) => (
            <li key={invoice.id}>
              <InvoiceItem {...invoice} />
            </li>
          ))}
        </InvoicesList>
      ) : (
        <NoInvoice />
      )}
    </MainContainer>
  );
}

export default Home;
