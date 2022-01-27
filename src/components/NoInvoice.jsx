import styled from 'styled-components';
import NoInvoiceGraphic from '../assets/illustration-empty.svg';

import deviceSize from '../styles/breakpoints';

const Wrapper = styled.div`
  display: block;
  padding: 6.375rem 0;
  max-width: 13.125rem;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${deviceSize.md}) {
    max-width: 15.625rem;
  }
`;

const Graphic = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.63px;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  margin: 0 auto;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.color1};
`;

function NoInvoice() {
  return (
    <Wrapper>
      <Graphic src={NoInvoiceGraphic} alt="" />
      <Heading>There is nothing here</Heading>
      <Body>
        Create an invoice by clicking the <strong>New</strong> button and get started
      </Body>
    </Wrapper>
  );
}

export default NoInvoice;
