import React, { Component, ReactNode, Fragment } from 'react';
import { Subscriber, messageService } from './PubSub';
import { AlertTopic } from './constants';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  setTimeout(() => messageService.sendMessage(AlertTopic, 'Hello RxJS <3'), 2000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Subscriber topic={AlertTopic}>
          {(data: any) => <div>{data}</div>}
        </Subscriber>
      </header>
    </div>
  );
}

export default App;
