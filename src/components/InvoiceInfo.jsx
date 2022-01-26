import styled from 'styled-components';

const Label = styled.h2`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Value = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
`;

const ChildrenContainer = styled.div`
  font-size: 11px;
  letter-spacing: -0.23px;
`;

function InvoiceInfo({ className, label, value, children }) {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      {value && <Value>{value}</Value>}
      <ChildrenContainer>{children}</ChildrenContainer>
    </div>
  );
}

export default InvoiceInfo;
