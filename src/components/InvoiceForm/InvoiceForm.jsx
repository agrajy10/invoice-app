import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import TextField from '../TextField';
import Button from '../Button';
import InvoiceItemsList from './InvoiceItemsList';
import DatePickerField from '../DatePickerField';

import deviceSize from '../../styles/breakpoints';

const FieldSet = styled.fieldset`
  border: none;
  margin-bottom: 16px;
`;

const Legend = styled.legend`
  display: block;
  margin-bottom: 24px;
  font-family: Spartan, sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.form.legend.color};
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
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
  .draft {
    margin-left: auto;
  }
`;

const EditFormBottom = styled(FormBottom)`
  justify-content: flex-end;
`;

function InvoiceForm({
  initialValues,
  validationSchema,
  onSubmit,
  saveInvoice,
  isEditingInvoice,
  discard
}) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                <DatePickerField
                  label="Invoice Date"
                  name="createdAt"
                  id="createdAt"
                  value={values.createdAt}
                  selected={values.createdAt}
                  minDate={new Date()}
                  onChange={setFieldValue}
                  error={errors.createdAt}
                />
              </div>
              <div>
                <DatePickerField
                  label="Payment Terms"
                  name="paymentDue"
                  id="paymentDue"
                  selected={values.paymentDue}
                  value={values.paymentDue}
                  minDate={new Date()}
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
            {!isEditingInvoice && (
              <FormBottom>
                <Button
                  type="button"
                  variant="secondary"
                  className="discard"
                  onClick={() => {
                    resetForm();
                    discard();
                  }}>
                  Discard
                </Button>
                <Button type="button" variant="tertiary" className="draft" onClick={saveInvoice}>
                  Save as Draft
                </Button>
                <Button type="submit" className="save-send">
                  Save & Send
                </Button>
              </FormBottom>
            )}
            {isEditingInvoice && (
              <EditFormBottom>
                <Button
                  type="button"
                  variant="secondary"
                  className="discard"
                  onClick={() => {
                    resetForm();
                    discard();
                  }}>
                  Cancel
                </Button>
                <Button type="submit" className="save-send">
                  Save Changes
                </Button>
              </EditFormBottom>
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default InvoiceForm;
