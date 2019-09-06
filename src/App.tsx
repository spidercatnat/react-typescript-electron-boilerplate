import React from 'react';
import { Subscriber, messageService, connect } from './PubSub';
import { AlertTopic, WarningTopic, InfoTopic } from './constants';
import logo from './logo.svg';
import './App.css';

interface Comp {
  data?: {},
  topic?: {}
}

interface ConnectedComp {
  topic: String
}

const Comp = ({ data, topic }: Comp = {}) => <div>{data ? data : `${topic} has no actvity yet`}</div>
const ConnectedComp = ({ topic }: ConnectedComp) => connect(Comp, topic)

const App: React.FC = () => {
  setTimeout(() => messageService.sendMessage(AlertTopic, `${AlertTopic} got a message!`), 2000)
  setTimeout(() => messageService.sendMessage(WarningTopic, `${WarningTopic} got a message!`), 4000)
  setTimeout(() => messageService.sendMessage(InfoTopic, `${InfoTopic} got a message!`), 6000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConnectedComp topic={AlertTopic} />
        <ConnectedComp topic={WarningTopic} />       
        <ConnectedComp topic={InfoTopic} />
      </header>
    </div>
  );
}

export default App;
