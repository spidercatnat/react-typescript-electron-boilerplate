import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from './context';
import { Home } from './views';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (props: any) => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <Route exact path="/" component={Home} />            
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
