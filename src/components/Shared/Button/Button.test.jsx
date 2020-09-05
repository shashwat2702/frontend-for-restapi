import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders label correctly', () => {
    const label = 'Click me';
    const component = shallow(<Button label={label} onClick={() => {}}/>)
    const styledButton = component.find('StyledButton');

    expect(styledButton.text()).toEqual(label);
  });

  it('calls onClick function passed as prop when button is clicked', () => {
    const label = 'Click me';
    const mockedOnClick = jest.fn();
    const component = shallow(<Button label={label} onClick={mockedOnClick}/>)
    const styledButton = component.find('StyledButton');
    styledButton.simulate('click');

    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  })
})
