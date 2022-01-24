import { useContext } from 'react';
import { parseISO } from 'date-fns';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

import TextField from './TextField';
import Button from './Button';
import InvoiceItemsList from './CreateInvoiceForm/InvoiceItemsList';
import DatePickerField from './DatePickerField';

import { AppContext } from '../context/AppContext';
import { UPDATE_INVOICE, CLOSE_DRAWER } from '../actions';

import deviceSize from '../styles/breakpoints';

const FormHeading = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 48px;
  span {
    &:before {
      content: '#';
      color: #888eb0;
    }
  }
`;

const FieldSet = styled.fieldset`
  border: none;
  margin-bottom: 16px;
`;

const Legend = styled.legend`
  display: block;
  margin-bottom: 24px;
  font-family: Spartan, sans-serif;
  font-weight: 700;
  color: #7c5dfa;
  letter-spacing: -0.25px;
`;

const FormTextField = styled(TextField)`
  margin-bottom: 24px;
`;

const AddressFieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 24px;
  div:last-child {
    grid-column: 1/3;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    grid-template-columns: repeat(3, 1fr);
    div:last-child {
      grid-column: auto;
    }
  }
`;

const InvoiceDatesGrid = styled.div`
  margin-top: 24px;
  input {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${deviceSize.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 24px;
    align-items: flex-end;
    div:last-child {
      grid-column: 1/3;
    }
  }
`;

const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
  .draft {
    margin-left: auto;
  }
`;

const validationSchema = Yup.object({
  clientName: Yup.string().required('required'),
  clientEmail: Yup.string().email('invalid email').required('required'),
  createdAt: Yup.date(),
  paymentDue: Yup.date().min(Yup.ref('createdAt'), "can't be before invoice date"),
  description: Yup.string().required('required'),
  senderAddress: Yup.object().shape({
    street: Yup.string().required('required'),
    city: Yup.string().required('required'),
    postCode: Yup.string().required('required'),
    country: Yup.string().required('required')
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string().required('required'),
    city: Yup.string().required('required'),
    postCode: Yup.string().required('required'),
    country: Yup.string().required('required')
  }),
  items: Yup.array()
    .min(1, 'An item must be added')
    .of(
      Yup.object().shape({
        name: Yup.string().required(),
        quantity: Yup.number().required(),
        price: Yup.number().required()
      })
    )
});

function EditInvoiceForm() {
  const { dispatch, invoices, editInvoiceID } = useContext(AppContext);
  let [invoice] = invoices.filter((item) => item.id === editInvoiceID);
  invoice = {
    ...invoice,
    createdAt: new Date(invoice.createdAt),
    paymentDue: new Date(invoice.paymentDue)
  };
  const onSubmit = (values) => {
    const createdAt = values.createdAt.toLocaleDateString();
    const paymentDue = values.paymentDue.toLocaleDateString();
    dispatch({ type: UPDATE_INVOICE, payload: { ...values, createdAt, paymentDue } });
    dispatch({ type: CLOSE_DRAWER });
  };

  return (
    <>
      <FormHeading>
        Edit <span>{invoice.id}</span>{' '}
      </FormHeading>
      <Formik initialValues={invoice} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors, setFieldValue, resetForm }) => {
          return (
            <Form>
              <FieldSet>
                <Legend>Bill From</Legend>
                <FormTextField
                  label="Street Address"
                  id="sender-street-address"
                  name="senderAddress.street"
                  type="text"
                />
                <AddressFieldsGrid>
                  <div>
                    <FormTextField
                      label="City"
                      id="sender-city"
                      name="senderAddress.city"
                      type="text"
                    />
                  </div>
                  <div>
                    <FormTextField
                      label="Postal Code"
                      id="sender-postal-code"
                      name="senderAddress.postCode"
                      type="text"
                    />
                  </div>
                  <div>
                    <FormTextField
                      label="Country"
                      id="sender-country"
                      name="senderAddress.country"
                      type="text"
                    />
                  </div>
                </AddressFieldsGrid>
              </FieldSet>
              <FieldSet>
                <Legend>Bill To</Legend>
                <FormTextField
                  label="Client's Name"
                  id="sender-client-name"
                  name="clientName"
                  type="text"
                />
                <FormTextField
                  label="Client’s Email"
                  id="client-email"
                  name="clientEmail"
                  type="email"
                  placeholder="e.g. email@example.com"
                />
                <FormTextField
                  label="Street Address"
                  id="client-street-address"
                  name="clientAddress.street"
                  type="text"
                />
                <AddressFieldsGrid>
                  <div>
                    <FormTextField
                      label="City"
                      id="client-city"
                      name="clientAddress.city"
                      type="text"
                    />
                  </div>
                  <div>
                    <FormTextField
                      label="Postal Colde"
                      id="client-postal-code"
                      name="clientAddress.postCode"
                      type="text"
                    />
                  </div>
                  <div>
                    <FormTextField
                      label="Country"
                      id="client-country"
                      name="clientAddress.country"
                      type="text"
                    />
                  </div>
                </AddressFieldsGrid>
              </FieldSet>
              <InvoiceDatesGrid>
                <div>
                  {
                    <DatePickerField
                      label="Invoice Date"
                      name="createdAt"
                      id="createdAt"
                      value={values.createdAt}
                      onChange={setFieldValue}
                      error={errors.createdAt}
                      disabled
                    />
                  }
                </div>
                <div>
                  <DatePickerField
                    label="Payment Terms"
                    name="paymentDue"
                    id="paymentDue"
                    selected={values.paymentDue}
                    value={values.paymentDue}
                    onChange={setFieldValue}
                    error={errors.paymentDue}
                  />
                </div>
                <div>
                  <FormTextField
                    label="Project Description"
                    id="description"
                    name="description"
                    type="text"
                    placeholder="e.g. Graphic Design Service"
                  />
                </div>
              </InvoiceDatesGrid>
              <InvoiceItemsList />
              <FormBottom>
                <Button
                  type="button"
                  variant="secondary"
                  className="discard"
                  onClick={() => {
                    resetForm();
                    dispatch({ type: CLOSE_DRAWER });
                  }}>
                  Cancel
                </Button>
                <Button type="submit" className="save-send">
                  Save Changes
                </Button>
              </FormBottom>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default EditInvoiceForm;
