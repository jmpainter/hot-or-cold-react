import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('<Message />', () => {

  it('Should render without crashing', () => {
    shallow(<Message currentMessage="test" />);
  });

  it('Should render a message', () => {
    const message = 'test';
    const wrapper = shallow(<Message currentMessage={message} />);
    expect(wrapper.text()).toEqual(message);
  });

});
