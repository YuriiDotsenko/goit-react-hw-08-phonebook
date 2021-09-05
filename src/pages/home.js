import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import authSelectors from '../redux/auth/auth-selectors';

const HomePage = () => {
  const isLogedIn = useSelector(authSelectors.getAuthStatus);
  return (
    <>
      <Title>Best phonebook ever!</Title>
      <Greeting>
        {isLogedIn ? 'Welcome to your phonebook!' : 'Authorize now to start!'}
      </Greeting>
      <Description>
        Here you can keep your contacts and work with them
      </Description>
    </>
  );
};

export default HomePage;

const Title = styled.h1`
  margin-top: 200px;
  margin-bottom: 0;
  color: #94255d;
`;
const Greeting = styled.h2`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  color: #94255d;
`;
const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  color: #94255d;
`;
