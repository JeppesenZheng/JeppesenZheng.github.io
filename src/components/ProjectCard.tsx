import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--card-background);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 255, 255, 0.2);
  }
`;

const Title = styled.h2`
  color: var(--highlight-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Summary = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
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

interface ProjectCardProps {
  id: string;
  title: string;
  summary: string;
}

function ProjectCard({ id, title, summary }: ProjectCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <StyledLink to={`/project/${id}`}>查看详情</StyledLink>
    </Card>
  );
}

export default ProjectCard;