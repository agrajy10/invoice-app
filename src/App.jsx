import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Home from './pages/Home';
import InvoiceDetails from './pages/InvoiceDetails';
import Drawer from './components/Drawer';
import InvoiceFormContainer from './components/InvoiceForm/InvoiceFormContainer';

import { lightTheme, darkTheme } from './styles/theme';

import { AppContext } from './context/AppContext';

function App() {
  const { theme, isDrawerOpen } = useContext(AppContext);
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle isDrawerOpen={isDrawerOpen} />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:invoiceId" element={<InvoiceDetails />} />
          </Routes>
        </BrowserRouter>
        <Drawer isOpen={isDrawerOpen}>
          <InvoiceFormContainer />
        </Drawer>
      </ThemeProvider>
    </div>
  );
}

export default App;
