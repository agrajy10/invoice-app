import { FILTER_INVOICES, OPEN_DRAWER, CLOSE_DRAWER } from './actions';

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
    default: {
      return state;
    }
  }
};

export default reducer;
