import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as S from '../styles/PortfolioStyles';

function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Human Support Robot (HSR)',
      description: 'Advanced robotic system for human assistance...',
      image: '/images/HSR.png',
      technologies: ['ROS', 'Python', 'OpenCV', 'TensorFlow', 'YOLO'],
      path: '/project/HSRProject'
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'Full-stack library management application...',
      image: '/images/library_system.png',
      technologies: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      path: '/project/LibrarySystemProject'
    },
  ];

  return (
    <S.PortfolioContainer>
      <S.BackButton to="/">
        <FaArrowLeft />
        Back
      </S.BackButton>
      
      <S.Title>My Projects</S.Title>
      <S.ProjectGrid>
        {projects.map((project) => (
          <S.ProjectCard 
            key={project.id}
            bgImage={project.image}
            onClick={() => navigate(project.path)}
          >
            <S.ProjectContent>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectDescription>
                {project.description}
              </S.ProjectDescription>
              <S.TechList>
                {project.technologies.map((tech, index) => (
                  <S.TechTag key={index}>{tech}</S.TechTag>
                ))}
              </S.TechList>
            </S.ProjectContent>
          </S.ProjectCard>
        ))}
      </S.ProjectGrid>
    </S.PortfolioContainer>
  );
}

export default Portfolio;