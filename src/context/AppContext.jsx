import { createContext, useReducer, useEffect } from 'react';

import reducer from '../reducer';

import { LOAD_INVOICES_DATA } from '../actions';

import data from '../data.json';

const initalState = {
  invoices: data,
  filteredInvoices: data,
  filter: 'all',
  isDrawerOpen: false,
  isEditingInvoice: false,
  editInvoiceID: null,
  theme: 'light'
};

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    if (localStorage.getItem('invoices-app-data')) {
      const appData = JSON.parse(localStorage.getItem('invoices-app-data'));
      dispatch({ type: LOAD_INVOICES_DATA, payload: appData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('invoices-app-data', JSON.stringify(state));
  }, [state]);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
