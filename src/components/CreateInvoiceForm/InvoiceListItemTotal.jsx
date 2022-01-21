import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: auto;
  .total-label {
    display: block;
    font-family: Spartan, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #7e88c3;
    margin-bottom: 10px;
  }
  .amount {
    display: inline-block;
    height: 48px;
    font-size: 12px;
    font-weight: 700;
    color: #888eb0;
    letter-spacing: -0.25px;
    line-height: 48px;
  }
`;

function InvoiceListItemTotal({ index }) {
  const {
    values: { items },
    setFieldValue
  } = useFormikContext();

  useEffect(() => {
    const quantity = items[index].quantity;
    const price = items[index].price;
    if (!isNaN(quantity) && !isNaN(price)) {
      setFieldValue(`items[${index}].total`, quantity * price);
    }
  }, [items]);

  return (
    <Wrapper className="total">
      <span className="total-label">Total</span>
      <span className="amount">{items[index].total}</span>
    </Wrapper>
  );
}

export default InvoiceListItemTotal;
