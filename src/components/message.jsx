import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <h4>{props.message.author}</h4>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
