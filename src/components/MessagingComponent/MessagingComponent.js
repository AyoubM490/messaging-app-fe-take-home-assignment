import React, { useState } from 'react';
import './MessagingComponent.scss';

function MessagingComponent({ messages, setMessages }) {
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSending = () => {
    setMessages((prev) => prev.push(message));
  };
  return (
    <div className="stick-bottom">
      <textarea
        type="text"
        value={message}
        onChange={handleChange}
        rows="5"
        cols="150"
      />
      <form>
        <button type="submit" className="send-button" onClick={handleSending}>
          Send!
        </button>
      </form>
    </div>
  );
}

export default MessagingComponent;
