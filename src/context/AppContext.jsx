import { createContext, useState } from 'react';

import data from '../data.json';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(data);

  return <AppContext.Provider value={{ invoices }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
