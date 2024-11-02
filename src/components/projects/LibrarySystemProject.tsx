import React from 'react';
import styled from 'styled-components';
import { FaReact, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--highlight-color);
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: var(--accent-color);
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--accent-color);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
  
  h3 {
    color: var(--highlight-color);
    margin-bottom: 1rem;
  }
`;

const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 100%);
  border: 2px solid var(--accent-color);
  border-radius: 50px;
  color: var(--accent-color);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
    border-color: var(--highlight-color);
    color: var(--highlight-color);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const GitHubSection = styled(Section)`
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

function LibrarySystemProject() {
  return (
    <Container>
      <Title>Library System Project</Title>
      
      <Section>
        <SectionTitle>🎯 Project Overview</SectionTitle>
        <Content>
          A comprehensive library management system designed to streamline book management,
          user interactions, and administrative tasks. This full-stack application provides
          an intuitive interface for both library staff and patrons.
        </Content>
      </Section>

      <Section>
        <SectionTitle>🛠️ Technology Stack</SectionTitle>
        <TechStack>
          <TechItem>
            <FaReact />
            <span>React</span>
          </TechItem>
          <TechItem>
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </TechItem>
          <TechItem>
            <SiSpringboot />
            <span>Spring Boot</span>
          </TechItem>
          <TechItem>
            <FaDatabase />
            <span>MySQL</span>
          </TechItem>
        </TechStack>
      </Section>

      <Section>
        <SectionTitle>✨ Key Features</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <h3>User Management</h3>
            <p>Complete user authentication and authorization system with different roles for administrators and patrons.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Book Catalog</h3>
            <p>Comprehensive book management with advanced search and filtering capabilities.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Borrowing System</h3>
            <p>Automated borrowing process with due date tracking and notification system.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Analytics Dashboard</h3>
            <p>Real-time statistics and reports for library administrators.</p>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section>
        <SectionTitle>🎯 Challenges & Solutions</SectionTitle>
        <Content>
          <ul>
            <li>Challenge 1: Real-time availability updates</li>
            <li>Solution: Implemented WebSocket for live updates</li>
            <li>Challenge 2: Complex search requirements</li>
            <li>Solution: Elasticsearch integration for efficient searching</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>📈 Results & Impact</SectionTitle>
        <Content>
          <ul>
            <li>Add results and impact here</li>
          </ul>
        </Content>
      </Section>

      <GitHubSection>
        <SectionTitle>
          <FaGithub style={{ marginRight: '0.5rem' }} />
          Source Code
        </SectionTitle>
        <Content>
          <GitHubButton 
            href="https://github.com/JeppesenZheng/LibrarySystem-backend" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View project backend on GitHub
          </GitHubButton>
        </Content>
        <GitHubButton 
            href="https://github.com/OnionsKings/front-end" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View project frontend on GitHub
          </GitHubButton>
      </GitHubSection>
    </Container>
  );
}

export default LibrarySystemProject;