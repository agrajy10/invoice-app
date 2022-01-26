import { createContext, useReducer } from 'react';

import useDarkTheme from '../hooks/useDarkTheme';

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
  const [theme, themeToggler] = useDarkTheme();
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppContext.Provider value={{ ...state, theme, themeToggler, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
