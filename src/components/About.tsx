import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackButton } from '../styles/SharedStyles';
import { FaArrowLeft } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 3rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--highlight-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.1rem;
`;

function About() {
  return (
    <AboutContainer>
      <TopBar>
        <BackButton to="/">
          <FaArrowLeft />
          Back
        </BackButton>
      </TopBar>
      <Content>
        <Title>About Me</Title>
        <p>Here is my detailed introduction...</p>
      </Content>
    </AboutContainer>
  );
}

export default About;