import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';

import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Home from './pages/Home';
import InvoiceDetails from './pages/InvoiceDetails';
import Drawer from './components/Drawer';

import { AppContext } from './context/AppContext';
import CreateInoviceForm from './components/CreateInvoiceForm/CreateInoviceForm';
import EditInvoiceForm from './components/EditInvoiceForm';

function App() {
  const { isEditingInvoice, isDrawerOpen } = useContext(AppContext);
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
        {isEditingInvoice && <EditInvoiceForm />}
        {!isEditingInvoice && <CreateInoviceForm />}
      </Drawer>
    </div>
  );
}

export default App;
