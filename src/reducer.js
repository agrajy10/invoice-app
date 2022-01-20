import { FILTER_INVOICES } from './actions';

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
    default: {
      return state;
    }
  }
};

export default reducer;
