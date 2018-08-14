import React from 'react';
import './Message.css';

export default function Message(props) {
  console.log('render Message called');
  return (
    <p className="Message">{props.currentMessage}</p>
  );
} 
