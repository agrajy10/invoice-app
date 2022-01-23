import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Home from './components/Home';
import InvoiceDetails from './components/InvoiceDetails';
import Drawer from './components/Drawer';

import { AppContext } from './context/AppContext';
import CreateInoviceForm from './components/CreateInvoiceForm/CreateInoviceForm';

function App() {
  const { isDrawerOpen } = useContext(AppContext);
  return (
    <div className="App">
      <GlobalStyle isDrawerOpen={isDrawerOpen} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:invoiceId" element={<InvoiceDetails />} />
        </Routes>
      </BrowserRouter>
      <Drawer isOpen={isDrawerOpen}>
        <CreateInoviceForm />
      </Drawer>
    </div>
  );
}

export default App;
