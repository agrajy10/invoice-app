import {
  FILTER_INVOICES,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  ADD_INVOICE,
  DELETE_INVOICE,
  MARK_INVOICE_PAID,
  EDIT_INVOICE,
  UPDATE_INVOICE,
  CANCEL_INVOICE_EDIT,
  LOAD_INVOICES_DATA,
  ENABLE_DARK_MODE,
  DISABLE_DARK_MODE
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
      return { ...state, invoices, filteredInvoices: invoices };
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
    case EDIT_INVOICE: {
      return {
        ...state,
        isDrawerOpen: true,
        isEditingInvoice: true,
        editInvoiceID: action.payload
      };
    }
    case UPDATE_INVOICE: {
      const newInvoices = state.invoices.map((invoice) => {
        if (invoice.id === state.editInvoiceID) {
          return { ...action.payload };
        }
        return invoice;
      });
      return {
        ...state,
        invoices: newInvoices,
        filteredInvoices: newInvoices,
        isEditingInvoice: false,
        editInvoiceID: null,
        isDrawerOpen: false
      };
    }
    case CANCEL_INVOICE_EDIT: {
      return {
        ...state,
        isEditingInvoice: false,
        editInvoiceID: null,
        isDrawerOpen: false
      };
    }
    case LOAD_INVOICES_DATA: {
      return { ...action.payload };
    }
    case ENABLE_DARK_MODE: {
      return { ...state, theme: 'dark' };
    }
    case DISABLE_DARK_MODE: {
      return { ...state, theme: 'light' };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
