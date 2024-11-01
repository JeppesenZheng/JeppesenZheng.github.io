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
  '1': { title: '项目一', content: '这是项目一的详细内容。在这个项目中，我...' },
  '2': { title: '项目二', content: '这是项目二的详细内容。通过这个项目，我学习了...' },
  '3': { title: '项目三', content: '这是项目三的详细内容。这个项目的主要目标是...' },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <ProjectContainer>项目不存在</ProjectContainer>;
  }

  return (
    <ProjectContainer>
      <Title>{project.title}</Title>
      <Content>{project.content}</Content>
      <BackLink to="/portfolio">返回项目列表</BackLink>
    </ProjectContainer>
  );
}

export default ProjectDetail;