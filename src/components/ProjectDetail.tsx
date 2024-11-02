import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--highlight-color);
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent-color);
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
  }
`;

const projects = {
  '1': { title: 'Project One', content: 'This is the detailed content of project one. In this project, I...' },
  '2': { title: 'Project Two', content: 'This is the detailed content of project two. Through this project, I learned...' },
  '3': { title: 'Project Three', content: 'This is the detailed content of project three. The main goal of this project was...' },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <ProjectContainer>Project does not exist</ProjectContainer>;
  }

  return (
    <ProjectContainer>
      <Title>{project.title}</Title>
      <Content>{project.content}</Content>
      <BackLink to="/portfolio">Back to Project List</BackLink>
    </ProjectContainer>
  );
}

export default ProjectDetail;