import React, { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import MessagingComponent from './components/MessagingComponent/MessagingComponent';

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div data-test="appComponent">
      <Header />
      <Body messages={messages} />
      <MessagingComponent />
    </div>
  );
}

export default App;
