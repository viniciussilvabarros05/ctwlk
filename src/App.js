import styles from './App.module.scss'
import { Header } from './components/Header/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { SuperMarketList } from './components/superMarketList/superMarketList';
import { NewMarket } from './pages/NewMarket';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation/Navigation';
import { UseContenxtProvider } from './contexts/useContext';

function App() {
  return (
    <div className={styles.App}>
      <UseContenxtProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/newMarket'>
              <NewMarket />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <SuperMarketList />
            </Route>
          </Switch>
        </BrowserRouter>
      </UseContenxtProvider>
    </div>
  );
}

export default App;
