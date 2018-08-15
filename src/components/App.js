import React from 'react';
import Message from './Message';
import GuessNumber from './GuessNumber';
import ResultsGrid from './ResultsGrid';
import GuessForm from './GuessForm';

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
      currentGuess: 0
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

  tryGuess(value) {
    this.setState({
      currentMessage: 0
    });    
    const currentGuess = parseInt(value, 10);
    console.log(`number: ${this.state.number} currentGuess: ${currentGuess}`);
    if(!Number.isInteger(currentGuess)) {
      this.setState({
        currentMessage: 2
      });
      console.log(this.state);
    } else if(currentGuess === this.state.number) {
      this.setStateFromGuess(currentGuess, 7);
    } else if(Math.abs(currentGuess - this.state.number) <= 10) {
      // Hot
      this.setStateFromGuess(currentGuess, 6);
    } else if(Math.abs(currentGuess - this.state.number) <= 20) {
      // Kind of hot
      this.setStateFromGuess(currentGuess, 5); 
    } else if(Math.abs(currentGuess - this.state.number) <= 30) {
      // Kind of cold
      this.setStateFromGuess(currentGuess, 4);       
    } else { 
      // Cold
      this.setStateFromGuess(currentGuess, 3);       
    }
  }

  newGame() {
    this.setState({
      number: Math.ceil(Math.random() * 100),
      guessHistory: [],
      currentMessage: 1,
      currentGuess: 0
    })  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="new-game-link" href="" onClick={() => this.newGame()}>New Game</a>
          <h1 className="App-title">Hot or Cold</h1>
        </header>
        <Message currentMessage={this.state.messages[this.state.currentMessage]} />
        <GuessForm onSubmit={value => this.tryGuess(value)} />
        <GuessNumber number={this.state.guessHistory.length}/>
        <ResultsGrid guessHistory={this.state.guessHistory}/>
      </div>
    );
  }
}

export default App;
