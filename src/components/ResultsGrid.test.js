import React from 'react';
import { shallow } from 'enzyme';
import ResultsGrid from './ResultsGrid';

describe('<ResultsGrid />', () => {

  const history = [
    { 
      guess: 44,
      guessStatus: 'Cold'
    },
    { 
      guess: 22,
      guessStatus: 'Kind of hot'
    }
  ];

  it('Should render without crashing', () => {
    shallow(<ResultsGrid guessHistory={history} />);
  });

  it('Should render the guess history', () => {
    const wrapper = shallow(<ResultsGrid guessHistory={history} />);
    expect(wrapper.html()).toContain('<div class="result cold">44</div><div class="result kind-of-hot">22</div>');
  });  

});