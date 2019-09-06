import React, { Component, ReactNode, Fragment } from 'react';
import { Subscriber, messageService } from './PubSub';
import { AlertTopic, WarningTopic, InfoTopic } from './constants';
import logo from './logo.svg';
import './App.css';

interface Comp {
  data?: {},
  topic?: {}
}

const Comp = ({ data, topic }: Comp = {}) => <div>{data ? data : `${topic} has no actvity yet`}</div>

const App: React.FC = () => {
  setTimeout(() => messageService.sendMessage(AlertTopic, `${AlertTopic} got a message!`), 2000)
  setTimeout(() => messageService.sendMessage(WarningTopic, `${WarningTopic} got a message!`), 4000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Subscriber topic={AlertTopic}>
          <Comp />
        </Subscriber>
        <Subscriber topic={WarningTopic}>
          <Comp />
        </Subscriber>
      </header>
    </div>
  );
}

export default App;
