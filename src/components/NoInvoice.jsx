import styled from 'styled-components';
import NoInvoiceGraphic from '../assets/illustration-empty.svg';

import deviceSize from '../styles/breakpoints';

const Wrapper = styled.div`
  display: block;
  padding: 102px 0;
  max-width: 210px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${deviceSize.md}) {
    max-width: 250px;
  }
`;

const Graphic = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.63px;
  color: ${({ theme }) => theme.text.h1};
  margin-bottom: 24px;
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
