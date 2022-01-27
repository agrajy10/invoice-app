import styled from 'styled-components';

import { FieldArray, useFormikContext } from 'formik';

import InvoiceListItemTotal from './InvoiceListItemTotal';
import Button from '../Button';
import TextField from '../TextField';

import deviceSize from '../../styles/breakpoints';

import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';

const Wrapper = styled.div`
margin-top: 0.5rem;
& > span {
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  color: #777f98;
  margin-bottom: 2.1875rem;
}
.error {
  font-size: 0.625rem;
  font-weight: 600;
  color: ${({ theme }) => theme.invoiceItemsList.label.error.color};
  display: block;
  margin-top: 2rem;
}
.item-grid {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 20px;
  gap: 24px 16px;
  align-items: center;
  margin-bottom: 3rem;
  div:first-child {
    grid-column: 1/5;
  }
  div:nth-child(2) input {
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
    text-align: center;
  }
  label span {
    display: none;
  }
  input {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    grid-template-columns: 1fr 50px 100px 70px 20px;
    margin-bottom: 1.125rem;
    div:first-child {
      grid-column: auto;
    }
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  margin-top: 0.9375rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.invoiceItemsList.deleteButton.color};
  &:hover {
    color: ${({ theme }) => theme.invoiceItemsList.deleteButton.hover.color};
  }
`;

const AddNewItemButton = styled(Button)`
  display: block;
  width: 100%;
`;

function InvoiceItemsList() {
  const { values, errors } = useFormikContext();

  return (
    <Wrapper>
      <span>Items List</span>
      <FieldArray
        name="items"
        render={(arrayHelpers) => (
          <div>
            {values.items.map((item, index) => {
              return (
                <div key={index} className="item-grid">
                  <div className="item-name">
                    <TextField
                      label="Item Name"
                      id={`item-name-${index}`}
                      name={`items[${index}].name`}
                      type="text"
                    />
                  </div>
                  <div className="quantity">
                    <TextField
                      label="Qty"
                      id={`qty-${index}`}
                      name={`items[${index}].quantity`}
                      type="text"
                    />
                  </div>
                  <div className="price">
                    <TextField
                      label="Price"
                      id={`price-${index}`}
                      name={`items[${index}].price`}
                      type="text"
                    />
                  </div>
                  <InvoiceListItemTotal index={index} />
                  <div>
                    <DeleteButton
                      aria-label="Delete invoice item"
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}>
                      <DeleteIcon />
                    </DeleteButton>
                  </div>
                </div>
              );
            })}
            <AddNewItemButton
              type="button"
              variant="secondary"
              onClick={() =>
                arrayHelpers.push({
                  name: 'Item name',
                  quantity: 0,
                  price: 0,
                  total: 0
                })
              }>
              + Add New Item
            </AddNewItemButton>
            {typeof errors.items === 'string' && <span className="error">{errors.items}</span>}
          </div>
        )}
      />
    </Wrapper>
  );
}

export default InvoiceItemsList;
