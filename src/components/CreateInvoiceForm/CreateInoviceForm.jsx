import { useContext } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

import TextField from '../TextField';
import Button from '../Button';
import InvoiceItemsList from './InvoiceItemsList';

import { AppContext } from '../../context/AppContext';
import { CLOSE_DRAWER, ADD_INVOICE } from '../../actions';

import deviceSize from '../../styles/breakpoints';

const FormHeading = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 48px;
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
  @media screen and (min-width: ${deviceSize.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 24px;
    div:last-child {
      grid-column: 1/3;
    }
  }
`;

const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
  .draft {
    margin-left: auto;
  }
`;

const initialValues = {
  clientName: '',
  clientEmail: '',
  createdAt: '',
  paymentDue: '',
  description: '',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: ''
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: ''
  },
  items: []
};

const validationSchema = Yup.object({
  clientName: Yup.string().required('required'),
  clientEmail: Yup.string().email('invalid email').required('required'),
  createdAt: Yup.date(),
  paymentDue: Yup.date(),
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

function CreateInoviceForm() {
  const { dispatch } = useContext(AppContext);

  const calcTotal = (items) => items.reduce((prev, current) => prev.total + current.total);

  const onSubmit = (values) => {
    const total = calcTotal(values.items);
    const id = nanoid(6);
    dispatch({ type: ADD_INVOICE, payload: { ...values, status: 'pending', id, total } });
    dispatch({ type: CLOSE_DRAWER });
  };

  const saveInvoice = (values) => {
    const total = calcTotal(values.items);
    const id = nanoid(6);
    dispatch({ type: ADD_INVOICE, payload: { ...values, status: 'draft', id, total } });
    dispatch({ type: CLOSE_DRAWER });
  };

  return (
    <>
      <FormHeading>New Invoice</FormHeading>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors, resetForm }) => {
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
                  <FormTextField label="Invoice Date" id="createdAt" name="createdAt" type="date" />
                </div>
                <div>
                  <FormTextField
                    label="Payment Terms"
                    id="paymentDue"
                    name="paymentDue"
                    type="date"
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
                  Discard
                </Button>
                <Button
                  type="button"
                  variant="tertiary"
                  className="draft"
                  onClick={() => saveInvoice(values)}>
                  Save as Draft
                </Button>
                <Button type="submit" className="save-send">
                  Save & Send
                </Button>
              </FormBottom>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default CreateInoviceForm;
