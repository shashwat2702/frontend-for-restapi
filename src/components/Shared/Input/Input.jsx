import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1rem;
  margin-left: 8px;
`;
Label.displayName = 'Label';

const StyledInput = styled.input`
  border-radius: 3px;
  border-width: 1px;
  height: 32px;
  margin: 8px;
  padding-left: 8px;
  width: 98%;
`;
StyledInput.displayName = 'StyledInput';


const Input = (props) => {
  const [ value, setvalue ] = useState(props.initialvalue);

  const onBlur = () => {
    props.onBlur(value);
  };

  const onChange = (event) => {
    const currentValue = event.target.value;
    props.onChange(currentValue);
    setvalue(currentValue);
  };

  return (
    <>
      <Label htmlFor={props.uniqueId}>{props.label}</Label>
      <StyledInput id={props.uniqueId} onBlur={onBlur} onChange={onChange} value={value} type={props.type}/>
    </>
  )
};

Input.propTypes = {
  initialvalue: PropTypes.string,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  uniqueId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  initialvalue: '',
  onBlur: () => {},
  onChange: () => {},
  type: 'text',
};

export default Input;
