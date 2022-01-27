import styled from 'styled-components';

const Label = styled.h2`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Value = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  margin: 0 0 0.375rem 0;
`;

const ChildrenContainer = styled.div`
  font-size: 0.6875rem;
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
