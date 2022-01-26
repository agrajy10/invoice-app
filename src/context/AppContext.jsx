import { createContext, useReducer, useEffect } from 'react';

import useDarkTheme from '../hooks/useDarkTheme';

import reducer from '../reducer';

import { LOAD_INVOICES_DATA } from '../actions';

import data from '../data.json';

const initalState = {
  invoices: [],
  filteredInvoices: [],
  filter: 'all',
  isDrawerOpen: false,
  isEditingInvoice: false,
  editInvoiceID: null
};

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [theme, themeToggler] = useDarkTheme();
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    let invoicesData;
    if (localStorage.getItem('invoices')) {
      invoicesData = JSON.parse(localStorage.getItem('invoices'));
    } else {
      invoicesData = data;
    }
    dispatch({ type: LOAD_INVOICES_DATA, payload: invoicesData });
  }, []);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(state.invoices));
  }, [state.invoices]);

  return (
    <AppContext.Provider value={{ ...state, theme, themeToggler, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
