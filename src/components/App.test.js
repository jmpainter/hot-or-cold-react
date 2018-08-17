import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  it('Should render without crashing', () => {
    shallow(<App />);
  });

  it('Should reset a game', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      guessHistory: [22, 44, 88],
      currentMessage: 4
    });
    wrapper.instance().newGame();
    expect(wrapper.state('guessHistory')).toEqual([]);
    expect(wrapper.state('currentMessage')).toEqual(1);
  });

  it('Should make a guess', () => {
    const wrapper = shallow(<App />);
    const correctAnswer = 5;
    wrapper.setState({
      number: correctAnswer
    })
    wrapper.instance().tryGuess(correctAnswer);
    expect(wrapper.state('guessHistory')).toEqual([{"guess": 5, "guessStatus": "You guessed right!"}]);
    expect(wrapper.state('currentMessage')).toEqual(7);
  });

  
});