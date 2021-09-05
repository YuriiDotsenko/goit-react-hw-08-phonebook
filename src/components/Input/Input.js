import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import styled from 'styled-components';

const Input = ({
  type,
  name,
  pattern,
  title,
  value,
  handleInputChange,
  label,
}) => (
  <Label className="Label">
    {label}:
    <CustomInput
      // style={{ ...style }}
      className="Input"
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
      value={value}
      onChange={handleInputChange}
      autoComplete="off"
    />
  </Label>
);

Input.defaultProps = {
  type: 'text',
  label: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  font-weight: bold;
  color: #94255d;
`;
const CustomInput = styled.input`
  width: 60%;
  margin-left: 20px;
  padding: 5px;
  color: #94255d;
  border: 2px solid #94255d;
  border-radius: 5px;
`;
