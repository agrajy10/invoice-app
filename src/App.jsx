import { useContext } from 'react';

import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Main from './components/Main';
import Drawer from './components/Drawer';

import { AppContext } from './context/AppContext';

function App() {
  const { isDrawerOpen } = useContext(AppContext);
  return (
    <div className="App">
      <GlobalStyle isDrawerOpen={isDrawerOpen} />
      <Header />
      <Main />
      <Drawer isOpen={isDrawerOpen} />
    </div>
  );
}

export default App;
