import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1rem;
  margin-left: 8px;
`;

const StyledInput = styled.input`
  border-radius: 3px;
  border-width: 1px;
  height: 32px;
  margin: 8px;
  width: 98%;
`;


const Input = (props) => {
  return (
    <>
    <Label htmlFor={props.uniqueId}>{props.label}</Label>
    <StyledInput id={props.uniqueId} type={props.type}/>
    </>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  uniqueId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
}

export default Input;
