import {
  FILTER_INVOICES,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  ADD_INVOICE,
  DELETE_INVOICE,
  MARK_INVOICE_PAID
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_INVOICES: {
      if (action.payload === 'all') {
        return { ...state, filter: action.payload, filteredInvoices: state.invoices };
      }

      const filteredInvoices = state.invoices.filter(
        (invoice) => invoice.status === action.payload
      );

      return { ...state, filter: action.payload, filteredInvoices };
    }
    case OPEN_DRAWER: {
      return { ...state, isDrawerOpen: true };
    }
    case CLOSE_DRAWER: {
      return { ...state, isDrawerOpen: false };
    }
    case ADD_INVOICE: {
      const invoices = [...state.invoices, action.payload];
      return { ...state, invoices };
    }
    case DELETE_INVOICE: {
      const newInvoices = state.invoices.filter((invoice) => invoice.id !== action.payload);
      return { ...state, invoices: newInvoices, filteredInvoices: newInvoices };
    }
    case MARK_INVOICE_PAID: {
      const invoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload) {
          return { ...invoice, status: 'paid' };
        }
        return invoice;
      });
      return { ...state, invoices, filteredInvoices: invoices };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
