import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './../redux/auth';
import styled from 'styled-components';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        return;
      case 'email':
        setEmail(event.currentTarget.value);
        return;
      case 'password':
        setPassword(event.currentTarget.value);
        return;
      default:
        return;
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    dispatch(authOperations.registerUserOperation({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Name:
        <Input
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Email:
        <Input
          name="email"
          type="text"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Password:
        <Input
          name="password"
          type="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </Label>
      <Signup type="submit">Sign up</Signup>
    </Form>
  );
};

export default Register;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin: 0 auto;
  border: 2px solid black;
  padding: 15px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  font-weight: bold;
  color: #94255d;
`;
const Input = styled.input`
  width: 70%;
  margin-left: 20px;
  padding: 5px;
  color: #94255d;
  border: 2px solid #94255d;
  border-radius: 5px;
`;
const Signup = styled.button`
  padding: 5px 15px;
  width: 130px;
  margin-top: 10px;
  background-color: rgb(126, 50, 150);
  color: aliceblue;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms ease, transform 250ms ease;
  &:hover,
  &:focus {
    background-color: rgb(162, 63, 192);
    transform: scale(1.1);
  }
`;
