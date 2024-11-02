import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import HSRProject from './projects/HSRProject';

const ProjectContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 3rem;
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

const projectComponents = {
  '1': HSRProject,
  // 添加更多项目组件
};

function ProjectDetail() {
  const { id } = useParams();
  const ProjectComponent = projectComponents[id as keyof typeof projectComponents];

  if (!ProjectComponent) {
    return <ProjectContainer>Project does not exist</ProjectContainer>;
  }

  return (
    <ProjectContainer>
      <ProjectComponent />
      <BackLink to="/portfolio">Back to Project List</BackLink>
    </ProjectContainer>
  );
}

export default ProjectDetail;