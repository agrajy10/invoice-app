import { useContext } from 'react';

import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Main from './components/Main';
import Drawer from './components/Drawer';

import { AppContext } from './context/AppContext';
import CreateInoviceForm from './components/CreateInvoiceForm/CreateInoviceForm';

function App() {
  const { isDrawerOpen } = useContext(AppContext);
  return (
    <div className="App">
      <GlobalStyle isDrawerOpen={isDrawerOpen} />
      <Header />
      <Main />
      <Drawer isOpen={isDrawerOpen}>
        <CreateInoviceForm />
      </Drawer>
    </div>
  );
}

export default App;
