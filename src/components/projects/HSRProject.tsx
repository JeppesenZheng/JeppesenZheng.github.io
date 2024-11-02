import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--highlight-color);
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

function HSRProject() {
  return (
    <div>
      <Title>Human Supported Robot (HSR) Project</Title>
      <Content>
        <p>Detailed description of the HSR project...</p>
        
        <h2>Project Overview</h2>
        <p>...</p>

        <h2>Technologies Used</h2>
        <ul>
          <li>Technology 1</li>
          <li>Technology 2</li>
          <li>Technology 3</li>
        </ul>

        <h2>Key Features</h2>
        <p>...</p>

        <h2>Challenges and Solutions</h2>
        <p>...</p>

        <h2>Results and Impact</h2>
        <p>...</p>
      </Content>
    </div>
  );
}

export default HSRProject; 