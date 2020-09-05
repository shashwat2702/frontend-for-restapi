import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('renders label correctly', () => {
    const label = 'Username';
    const component = shallow(<Input label={label} uniqueId='username' />);
    const labelComponent = component.find('Label');

    expect(labelComponent.text()).toEqual(label);
  });

  it('renders label and input correctly with uniqueId passed as prop', () => {
    const uniqueId = 'username';
    const component = shallow(<Input label='Username' uniqueId={uniqueId} />);
    const inputComponent = component.find('StyledInput');
    const labelComponent = component.find('Label');

    expect(inputComponent.prop('id')).toEqual(uniqueId);
    expect(labelComponent.prop('htmlFor')).toEqual(uniqueId);
  });

  it('renders input component with initialValue passed as prop', () => {
    const initialValue = 'shashwatsinha@test.com';
    const label = 'Email';
    const component = shallow(<Input initialvalue={initialValue} label={label} uniqueId='email'/>);
    const inputComponent = component.find('StyledInput');

    expect(inputComponent.prop('value')).toEqual(initialValue)
  });

  it('renders input component with correct type passed as prop', () => {
    const type = 'email';
    const label = 'Email';
    const component = shallow(<Input label={label} type={type} uniqueId='email'/>);
    const inputComponent = component.find('StyledInput');

    expect(inputComponent.prop('type')).toEqual(type)
  });

  it('calls onBlur passed as prop when "blur" event is triggered', () => {
    const event = { target: { value: 'shashwatsinha@test.com' } }
    const onBlur = jest.fn();
    const component = shallow(<Input label='Email' onBlur={onBlur} uniqueId='email'/>);
    const inputComponent = component.find('StyledInput');
    inputComponent.simulate('change', event);
    inputComponent.simulate('blur');

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onChange passed as prop when values are typed', () => {
    const event = { target: { value: 'shashwatsinha@test.com' } }
    const onChange = jest.fn();
    const component = shallow(<Input label='Email' onChange={onChange} uniqueId='email'/>);
    const inputComponent = component.find('StyledInput');
    inputComponent.simulate('change', event);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event.target.value);
  });
})
