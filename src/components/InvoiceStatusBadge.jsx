import styled from 'styled-components';

const invoiceStatusColor = {
  pending: '#ff8f00',
  paid: '#33D69F',
  draft: '#373B53'
};

const InvoiceStatus = styled.div`
  text-align: right;
  & > div {
    display: inline-flex;
    position: relative;
    width: 104px;
    height: 40px;
    border-radius: 6px;
    z-index: 1;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      inset: 0;
      border-radius: 6px;
      background-color: ${(props) => invoiceStatusColor[props.status]};
      opacity: 0.05;
    }
  }
`;

const InvoiceStatusText = styled.div`
  margin: auto;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => invoiceStatusColor[props.status]};
  letter-spacing: -0.25px;
  text-transform: capitalize;
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => invoiceStatusColor[props.status]};
    margin-right: 8px;
  }
`;
function InvoiceStatusBadge({ status }) {
  return (
    <InvoiceStatus status={status}>
      <div>
        <InvoiceStatusText status={status}>{status}</InvoiceStatusText>
      </div>
    </InvoiceStatus>
  );
}

export default InvoiceStatusBadge;
