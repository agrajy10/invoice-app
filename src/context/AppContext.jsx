import { createContext, useReducer } from 'react';

import reducer from '../reducer';

import data from '../data.json';

const initalState = {
  invoices: data,
  filteredInvoices: data,
  filter: 'all',
  isDrawerOpen: false,
  isEditingInvoice: false,
  editInvoiceID: null
};

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
