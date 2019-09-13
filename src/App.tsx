import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from './context';
import { Nav, QR } from './components';
import { Home, Alert, Info, Warning } from './views';
import { topics } from './constants';
import logo from './logo.svg';
import './App.css';
const { NavigationTopic } = topics;

const App: React.FC = (props: any) => {
  return (
    <Provider>
      <div className='App'>
        <header className='App-header'>
          <div>
            <QR topic={NavigationTopic} />
          </div>
          <div>
            <small style={{ marginBottom: '2%' }}>
              Each component is subscribed to its own topic, receiving relevant bits of data persisting to its own local state 
              without needing to first receive it from the Provider store. Yes, even the QR above ;-) This makes way for a semantic separation of concerns 
              between what I call macros and micros: the Provider store can handle app-level changes (macros), while the components can define their own fine-grained flow of reactions (micros) to those changes.
              Aside from producing human-friendly code, the amount of energy spent on programming what can often be haphazard lifecycle hooks
              to prevent unnecessary rerendering is significantly reduced. <br />
            </small>
          </div>
          <div className='Routes'>
            <Router>
              <Nav />
              <Route exact path='/' component={Home} />
              <Route exact path='/alert' component={Alert} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/warning' component={Warning} />
            </Router>
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
