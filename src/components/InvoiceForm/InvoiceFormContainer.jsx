import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import InvoiceForm from './InvoiceForm';

import { AppContext } from '../../context/AppContext';

import { CLOSE_DRAWER, ADD_INVOICE, UPDATE_INVOICE, CANCEL_INVOICE_EDIT } from '../../actions';

import { convertDateToString, convertStringToDate } from '../../utils/utils';

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

const initialValues = {
  clientName: '',
  clientEmail: '',
  createdAt: new Date(),
  paymentDue: new Date(),
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
  items: [],
  total: 0
};

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

function FormContainer() {
  const [invoice, setInvoice] = useState(null);
  const { dispatch, isEditingInvoice, editInvoiceID, invoices } = useContext(AppContext);

  useEffect(() => {
    if (isEditingInvoice) {
      let [data] = invoices.filter((item) => item.id === editInvoiceID);
      data = {
        ...data,
        createdAt: convertStringToDate(data.createdAt),
        paymentDue: convertStringToDate(data.paymentDue)
      };
      setInvoice(data);
    }
  }, [isEditingInvoice]);

  const calcTotal = (items) => {
    if (items.length === 1) {
      return items[0].total;
    }
    const totals = items.map((item) => item.total);
    return totals.reduce((prev, current) => prev + current);
  };

  const addInvoice = (values) => {
    const total = calcTotal(values.items);
    const id = nanoid(6);
    const createdAt = convertDateToString(values.createdAt);
    const paymentDue = convertDateToString(values.paymentDue);
    dispatch({
      type: ADD_INVOICE,
      payload: { ...values, status: 'pending', id, total, createdAt, paymentDue }
    });
    dispatch({ type: CLOSE_DRAWER });
  };

  const saveInvoice = (values) => {
    const total = calcTotal(values.items);
    const id = nanoid(6);
    const createdAt = convertStringToDate(values.createdAt);
    const paymentDue = convertStringToDate(values.paymentDue);
    dispatch({
      type: ADD_INVOICE,
      payload: { ...values, status: 'draft', id, total, createdAt, paymentDue }
    });
    dispatch({ type: CLOSE_DRAWER });
  };

  const updateInvoice = (values) => {
    const createdAt = convertDateToString(values.createdAt);
    const paymentDue = convertDateToString(values.paymentDue);
    const total = calcTotal(values.items);
    dispatch({ type: UPDATE_INVOICE, payload: { ...values, createdAt, paymentDue, total } });
    dispatch({ type: CLOSE_DRAWER });
  };

  const discard = () => {
    dispatch({ type: CLOSE_DRAWER });
    if (isEditingInvoice) {
      dispatch({ type: CANCEL_INVOICE_EDIT });
    }
  };

  return (
    <>
      {invoice && (
        <FormHeading>
          Edit <span>{invoice.id}</span>
        </FormHeading>
      )}
      {!invoice && <FormHeading>New Invoice</FormHeading>}
      {invoice && (
        <InvoiceForm
          initialValues={invoice}
          validationSchema={validationSchema}
          onSubmit={updateInvoice}
          isEditingInvoice={isEditingInvoice}
          discard={discard}
        />
      )}
      {!invoice && (
        <InvoiceForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={addInvoice}
          saveInvoice={saveInvoice}
          isEditingInvoice={isEditingInvoice}
          discard={discard}
        />
      )}
    </>
  );
}

export default FormContainer;
