import React from 'react';
import Message from './Message';
import GuessNumber from './GuessNumber';
import ResultsGrid from './ResultsGrid';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: Math.ceil(Math.random() * 100),
      guessHistory: [],
      messages: [
        '',
        'Make a Guess!',
        'Please enter a number',
        'Cold', 
        'Kind of cold', 
        'Kind of hot',
        'Hot', 
        'You guessed right!'
      ],
      currentMessage: 1,
      currentGuess: 0,
      numGuesses: 0
    }
  }

  setStateFromGuess(currentGuess, messageNumber) {
    this.setState({
      currentMessage: messageNumber,
      guessHistory: [...this.state.guessHistory, { 
        guess: currentGuess,
        guessStatus: this.state.messages[messageNumber]
      }]
    });
  }

  tryGuess(event) {
    event.preventDefault();
    this.setState({
      currentMessage: 0
    });    
    const currentGuess = parseInt(this.textInput.value, 10);
    console.log(`number: ${this.state.number} currentGuess: ${currentGuess}`);
    if(!Number.isInteger(currentGuess)) {
      this.setState({
        currentMessage: 2
      });
      console.log(this.state);
    } else if(currentGuess === this.state.number) {
      this.setState({
        currentMessage: 7
      })
    } else if(Math.abs(currentGuess - this.state.number) <= 10) {
      this.setStateFromGuess(currentGuess, 6);
    } else if(Math.abs(currentGuess - this.state.number) <= 20) {
      this.setStateFromGuess(currentGuess, 5); 
    } else if(Math.abs(currentGuess - this.state.number) <= 30) {
      this.setStateFromGuess(currentGuess, 4);       
    } else if(Math.abs(currentGuess - this.state.number) <= 20) {  
      this.setStateFromGuess(currentGuess, 3);       
    }
    
    console.log(this.state.guessHistory);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold</h1>
        </header>
        <Message currentMessage={this.state.messages[this.state.currentMessage]} />
        <form className="guess-form" onSubmit={event => this.tryGuess(event)}>
          <div>
            <input placeholder="Enter a number" type="text" ref={input => this.textInput = input}/>
          </div>
          <div>
            <button type="submit">Guess</button>
          </div>
        </form>
        <GuessNumber />
        <ResultsGrid />
      </div>
    );
  }
}

export default App;
