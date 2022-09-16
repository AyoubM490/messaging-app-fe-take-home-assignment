import React, { useState } from 'react';
import './MessagingComponent.scss';

function MessagingComponent() {
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setMessage(e.target.value);
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
        <button type="submit" className="send-button">
          Send!
        </button>
      </form>
    </div>
  );
}

export default MessagingComponent;
