import React from 'react';
import './GuessForm.css';

export default function GuessForm(props) {

  let textInput = null;

  function onSubmit(event) {
    event.preventDefault();
    const value = textInput.value.trim();
    if(value && props.onSubmit) {
      props.onSubmit(parseInt(value, 10));
    }
    textInput.value = '';
  }
  
  return (
    <form className="guess-form" onSubmit={event => onSubmit(event)}>
      <div>
        <input placeholder="Enter a number" type="text" ref={input => textInput = input} />
      </div>
      <div>
        <button type="submit">Guess</button>
      </div>
    </form>
  );
}