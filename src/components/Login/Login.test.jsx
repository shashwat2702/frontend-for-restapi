import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders form component successfully with correct FormTitle', () => {
    const component = shallow(<Login/>);
    const formTitle = component.find('FormTitle');

    expect(formTitle.text()).toEqual('Login');
  });

  it('renders two input components with correct props', () => {
    const component = shallow(<Login/>);
    const inputComponent = component.find('Input');

    expect(inputComponent).toHaveLength(2);
  });

  it('renders one input component for email address with correct props', () => {
    const component = shallow(<Login/>);
    const emailComponent = component.find('Input').at(0);
    const props = emailComponent.props();

    expect(props.label).toEqual('Email address');
    expect(props.uniqueId).toEqual('email-address');
  });

  it('renders one input component for password with correct props', () => {
    const component = shallow(<Login/>);
    const passwordComponent = component.find('Input').at(1);
    const props = passwordComponent.props();

    expect(props.label).toEqual('Password');
    expect(props.type).toEqual('password');
    expect(props.uniqueId).toEqual('password');
  });

  it('renders one button component with correct title', () => {
    const component = shallow(<Login/>);
    const buttonComponent = component.find('Button');

    expect(buttonComponent.prop('label')).toEqual('Login');
  });
})
