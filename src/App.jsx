import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from './App.module.scss';
import Counter from './components/Counter';

const App = () => {
  const [counterStep, setCounterStep] = useState(1);
  return (
    <>
      <Router>
        <PageHeader />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/counter">
            {/*
            COUNTER
             */}
            <input
              type="number"
              onChange={e => setCounterStep(+e.target.value)}
              value={counterStep}
              style={{ maxWidth: '200px' }}
            />
            <Counter step={counterStep} />
            {/*
              
              COUNTER END
              */}
          </Route>
        </Switch>
        <PageFooter />
      </Router>
    </>
  );
};

const activeLinkStyles = {
  border: '4px solid blue',
};
function PageHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li>
            <NavLink
              style={{ display: 'block' }}
              activeStyle={activeLinkStyles}
              to="/"
              exact
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ display: 'block' }}
              activeStyle={activeLinkStyles}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ display: 'block' }}
              activeStyle={activeLinkStyles}
              to="/contacts"
            >
              CONTACTS
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ display: 'block' }}
              activeStyle={activeLinkStyles}
              to="/counter"
            >
              COUNTER
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function PageFooter() {
  return <footer className={styles.footer}></footer>;
}

/**
 * pages
 */

function HomePage() {
  return <h1>HOME</h1>;
}
function AboutPage() {
  return <h1>About</h1>;
}

function ContactsPage() {
  return (
    <>
      <nav></nav>
      <Switch></Switch>
    </>
  );
}

export default App;
