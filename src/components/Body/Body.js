import React from 'react';
import './Body.scss';

function Messages({ messages }) {
  return messages.map((message, index) => (
    <div className="message" key={index}>
      <div className="message__sender">{message.sender}</div>
      <div className="message__text">{message.text}</div>
    </div>
  ));
}

function Body({ messages }) {
  return <Messages messages={messages} />;
}

export default Body;
