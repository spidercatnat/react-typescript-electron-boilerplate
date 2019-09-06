import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from './context';
import { Nav } from './components';
import { Home, Alert, Info, Warning } from './views';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (props: any) => {
  return (
    <Provider>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Router>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route exact path='/alert' component={Alert} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/warning' component={Warning} />
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
