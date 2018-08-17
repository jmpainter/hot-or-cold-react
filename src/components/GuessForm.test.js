import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './GuessForm';

describe('<GuessForm />', () => {

  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onSubmit callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onSubmit={callback} />);
    const value = 5;
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });  

});
