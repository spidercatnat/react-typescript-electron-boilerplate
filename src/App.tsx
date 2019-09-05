import React from 'react';
import { Subscriber, publish } from './components';
import { AlertTopic } from './constants';
import logo from './logo.svg';
import './App.css';
const Test = (props: any) => <div>{props.data}</div>
const App: React.FC = () => {
  setTimeout(() => publish(AlertTopic, 'Hello, world!'), 2000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Subscriber topic={AlertTopic}>
          <Test />
        </Subscriber>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
