import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const PortfolioContainer = styled.div`
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

const BackButton = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent-color);
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  flex-grow: 1;
  color: var(--highlight-color);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const projects = [
  { id: '1', title: 'Human Supported Robort (HSR) project', summary: 'HSR is a project that aims to create a human-supported robot that can assist with daily tasks and in different scenarios like kitchen, living room, etc.' },
];

function Portfolio() {
  return (
    <PortfolioContainer>
      <TopBar>
        <BackButton to="/">Back</BackButton>
        <Title>My Projects</Title>
        <div style={{ width: '80px' }}></div>
      </TopBar>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
}

export default Portfolio;