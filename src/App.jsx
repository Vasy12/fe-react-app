import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNav from './components/AppNav';
import PageHeader from './components/PageHeader';
import Chat from './components/Chat';
import styles from './App.module.scss';
import UsersPage from './pages/UsersPage';
import Home from './pages/Home';
export const AppContext = createContext(null);

function App() {
  const menuState = useState(false);

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
      }}
    >
      <Router>
        <div className={styles.container}>
          <AppNav />
          <div className={styles.pageWrapper}>
            <PageHeader />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/users">
                <UsersPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
