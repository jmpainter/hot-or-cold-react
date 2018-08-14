import React from 'react';
import './GuessForm.css';

export default function GuessForm(props) {
  return (
    <div className="Guess">
      <form className="guess-form" onSubmit={() => props.onSubmit(this.textInput.value)}>
        <div>
          <input placeholder="Enter a number" type="text" ref={input => this.textInput = input}/>
        </div>
        <div>
          <button type="submit">Guess</button>
        </div>
      </form>
    </div>
  )
}