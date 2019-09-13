import React, { Component } from 'react';
import { messageService } from '../pubsub';
import { topics } from '../constants';
import { Context } from '.';

const { AlertTopic, WarningTopic, InfoTopic, NavigationTopic } = topics;

class Provider extends Component {
  state = {};
  async componentDidMount() {
    _sendExampleMessages();
  }
  render() {
    return (
      <Context.Provider value={{ ...this.state, topics }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

/* Make a GET request to /qr to receive QR with server-encoded information, like your NGROK URL */
const _ngrokQR = async () => {
  const res = await fetch(`/qr`, { method: 'GET' });
  const { QR } = await res.json();
  return QR;
}

/* Make a POST request to /qr to specify a custom encoding */
const _myQR = async () => {
  const res = await fetch(`/qr`, { method: 'POST', body: JSON.stringify({ qr: { url: 'https://instagram.com/bloom.510' } }) });
  const { QR } = await res.json();
  return QR;
}

/* A bunch of dummy messages to show how components receive data */
const _sendExampleMessages = async () => {
  setTimeout(() => messageService.sendMessage(AlertTopic, `${AlertTopic} got a message!`), 2000)
  setTimeout(() => messageService.sendMessage(WarningTopic, `${WarningTopic} got a message!`), 4000)
  setTimeout(() => messageService.sendMessage(InfoTopic, `${InfoTopic} got a message!`), 6000)
  setTimeout(() => messageService.sendMessage(InfoTopic, `${InfoTopic} got a 2nd message!`), 8000)
  messageService.sendMessage(NavigationTopic, await _myQR());
}

export { Provider };
