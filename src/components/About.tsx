import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackButton } from '../styles/SharedStyles';
import { FaArrowLeft } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: linear-gradient(120deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const Section = styled.div`
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--highlight-color);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--highlight-color), transparent);
    border-radius: 2px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 1.5rem 0;
  padding-left: 1.8rem;
  position: relative;
  
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--highlight-color);
    font-size: 1.2rem;
    line-height: 1.2;
  }

  strong {
    color: var(--highlight-color);
    font-size: 1.2rem;
    font-weight: 600;
  }

  small {
    color: #888;
    font-size: 0.9rem;
  }

  p {
    margin: 0.5rem 0;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ProjectLink = styled(Link)`
  color: var(--highlight-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--highlight-color);
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
  }

  &:after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(5px);
  }
`;

const CompanyName = styled.span`
  color: #888;
  font-style: italic;
`;

const SkillCategory = styled.span`
  color: var(--highlight-color);
  font-weight: 600;
`;

const Timeline = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--highlight-color),
      transparent
    );
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 3rem;
  
  &:last-child {
    padding-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--highlight-color);
    box-shadow: 0 0 10px var(--highlight-color);
  }
`;

const TimelinePeriod = styled.div`
  position: absolute;
  left: 3rem;
  top: -0.5rem;
  background: rgba(0, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: var(--highlight-color);
  font-weight: 500;
`;

const TimelineContent = styled.div`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.04);
  }
`;

const ProjectItem = styled(ListItem)`
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:before {
    top: 1.5rem;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(0, 255, 255, 0.1);
  color: var(--highlight-color);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const ViewProjectButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--highlight-color);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }

  &:after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(5px);
  }
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
        
        <Section>
          <SectionTitle>Introduction</SectionTitle>
          {/* <p>I am a Computer Science student at UNSW, passionate about web development and software engineering. I enjoy creating elegant solutions and learning new technologies to build innovative applications that solve real-world problems.</p> */}
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelinePeriod>2024 - Present</TimelinePeriod>
              <TimelineContent>
                <strong>Education Professional Computing</strong> <CompanyName>| UNSW College </CompanyName>
                <p>• Tutoring DPST1091 (COMP1511 Programming Fundamentals)</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePeriod>2023/12 - 2024/02</TimelinePeriod>
              <TimelineContent>
                <strong>Backedn Developer Intern</strong> <CompanyName>| Brokstacky</CompanyName>
                <p>• Developed a MES system for the industry, using python Flask to build the backend, and HTML, CSS, JavaScript for the frontend</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <List>
            <ProjectItem>
              <ProjectTitle>
                <strong>Human Supported Robot (HSR) Project</strong>
                <ViewProjectButton to="/project/HSRProject">View Project</ViewProjectButton>
              </ProjectTitle>
              <p>A robot control system that enables human-robot collaboration for complex tasks.</p>
              <ProjectTags>
                <Tag>Python</Tag>
                <Tag>ROS</Tag>
                <Tag>Computer Vision</Tag>
                <Tag>Robotics</Tag>
              </ProjectTags>
            </ProjectItem>

            <ProjectItem>
              <ProjectTitle>
                <strong>Library System Project</strong>
                <ViewProjectButton to="/project/LibrarySystemProject">View Project</ViewProjectButton>
              </ProjectTitle>
              <p>A comprehensive library management system with user authentication and book tracking.</p>
              <ProjectTags>
                <Tag>React</Tag>
                <Tag>Node.js</Tag>
                <Tag>MySQL</Tag>
                <Tag>Express</Tag>
              </ProjectTags>
            </ProjectItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <List>
            <ListItem>
              <SkillCategory>Frontend:</SkillCategory> React, TypeScript/JavaScript, HTML/CSS, Styled-Components
            </ListItem>
            <ListItem>
              <SkillCategory>Backend:</SkillCategory> Node.js, Python, Express, MySQL, Firebase, Flask
            </ListItem>
            <ListItem>
              <SkillCategory>Tools:</SkillCategory> Git, AWS, Docker, Jenkins, Webpack
            </ListItem>
            <ListItem>
              <SkillCategory>Programming Languages:</SkillCategory> Python, JavaScript, TypeScript, SQL, HTML/CSS, C/C++, Java, Shell Scripting
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelinePeriod>2023 - 2026</TimelinePeriod>
              <TimelineContent>
                <strong>Bachelor of Advanced Computer Science</strong>
                <p>University of New South Wales (UNSW)</p>
                <p>Major in Artificial Intelligence</p>
                <p>WAM: 82 (Top 10%)</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Section>
      </Content>
    </AboutContainer>
  );
}

export default About;