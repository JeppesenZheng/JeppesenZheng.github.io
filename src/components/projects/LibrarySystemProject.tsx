import React from 'react';
import { FaReact, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';
import * as S from '../../styles/ProjectStyles';

function LibrarySystemProject() {
  return (
    <S.Container>
      <S.Title>Library System Project</S.Title>
      
      <S.Section>
        <S.SectionTitle>🎯 Project Overview</S.SectionTitle>
        <S.Content>
          A comprehensive library management system designed to streamline book management,
          user interactions, and administrative tasks. This full-stack application provides
          an intuitive interface for both library staff and patrons.
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>🛠️ Technology Stack</S.SectionTitle>
        <S.TechStack>
          <S.TechItem>
            <FaReact />
            <span>React</span>
          </S.TechItem>
          <S.TechItem>
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </S.TechItem>
          <S.TechItem>
            <SiSpringboot />
            <span>Spring Boot</span>
          </S.TechItem>
          <S.TechItem>
            <FaDatabase />
            <span>MySQL</span>
          </S.TechItem>
        </S.TechStack>
      </S.Section>

      <S.Section>
        <S.SectionTitle>✨ Key Features</S.SectionTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <h3>User Management</h3>
            <p>Complete user authentication and authorization system with different roles for administrators and patrons.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Book Catalog</h3>
            <p>Comprehensive book management with advanced search and filtering capabilities.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Borrowing System</h3>
            <p>Automated borrowing process with due date tracking and notification system.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Analytics Dashboard</h3>
            <p>Real-time statistics and reports for library administrators.</p>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.Section>

      <S.Section>
        <S.SectionTitle>🎯 Challenges & Solutions</S.SectionTitle>
        <S.Content>
          <ul>
            <li>Challenge 1: Real-time availability updates</li>
            <li>Solution: Implemented WebSocket for live updates</li>
            <li>Challenge 2: Complex search requirements</li>
            <li>Solution: Elasticsearch integration for efficient searching</li>
          </ul>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>📈 Results & Impact</S.SectionTitle>
        <S.Content>
          <ul>
            <li>Add results and impact here</li>
          </ul>
        </S.Content>
      </S.Section>

      <S.GitHubSection>
        <S.SectionTitle>
          <FaGithub style={{ marginRight: '0.5rem' }} />
          Source Code
        </S.SectionTitle>
        <S.Content>
          <S.GitHubButton 
            href="https://github.com/JeppesenZheng/LibrarySystem-backend" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View project backend on GitHub
          </S.GitHubButton>
        </S.Content>
        <S.GitHubButton 
            href="https://github.com/OnionsKings/front-end" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View project frontend on GitHub
          </S.GitHubButton>
      </S.GitHubSection>
    </S.Container>
  );
}

export default LibrarySystemProject;