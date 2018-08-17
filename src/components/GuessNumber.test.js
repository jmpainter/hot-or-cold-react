import React from 'react';
import { shallow } from 'enzyme';
import GuessNumber from './GuessNumber';

describe('<GuesNumber />', () => {

  it('Should render without crashing', () => {
    shallow(<GuessNumber number="5"/>);
  });

  it('Should render the number of guesses', () => {
    const value = 5;
    const wrapper = shallow(<GuessNumber number={value} />);
    expect(wrapper.text()).toEqual(`Guesses: ${value}`);
  });  

});