import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaPython, FaGithub, FaEye } from 'react-icons/fa';
import { SiRos, SiOpencv, SiTensorflow } from 'react-icons/si';

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

const ImageSection = styled.div`
  margin: 3rem 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
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

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 120px;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    font-size: 2.5rem;
    color: var(--accent-color);
  }

  span {
    text-align: center;
    font-weight: 500;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--accent-color);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }

  h3 {
    color: var(--highlight-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    line-height: 1.6;
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  }
`;

const ContributionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ContributionCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--accent-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: var(--highlight-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.6;
    color: var(--text-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  }
`;

function HSRProject() {
  return (
    <Container>
      <Title>Human Support Robot (HSR) Project</Title>
      
      <ImageSection>
        <ProjectImage 
          src="/images/HSR.png"
          alt="Human Support Robot Project"
        />
      </ImageSection>

      <Section>
        <SectionTitle>
          <FaRobot />
          Project Overview
        </SectionTitle>
        <Content>
          The Human Support Robot (HSR) project aims to develop an advanced robotic system
          capable of assisting humans in various daily tasks. The robot combines computer
          vision, machine learning, and precise control systems to interact with its
          environment and provide meaningful support to users.
        </Content>
      </Section>

      <Section>
        <SectionTitle>🛠️ Technology Stack</SectionTitle>
        <TechStack>
          <TechItem>
            <SiRos />
            <span>ROS</span>
          </TechItem>
          <TechItem>
            <FaPython />
            <span>Python</span>
          </TechItem>
          <TechItem>
            <SiOpencv />
            <span>OpenCV</span>
          </TechItem>
          <TechItem>
            <SiTensorflow />
            <span>TensorFlow</span>
          </TechItem>
          <TechItem>
            <FaEye />
            <span>YOLO</span>
          </TechItem>
        </TechStack>
      </Section>

      <Section>
        <SectionTitle>✨ Key Features</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <h3>Object detection</h3>
            <p>Advanced computer vision system for identifying and tracking objects in real-time.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Navigation</h3>
            <p>Autonomous navigation and obstacle avoidance in dynamic environments.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Task Planning</h3>
            <p>Intelligent task planning and execution system for complex operations.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Human Interaction</h3>
            <p>Natural interaction interfaces including voice commands and gesture recognition.</p>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section>
        <SectionTitle>🎯 My Contribution</SectionTitle>
        <ContributionGrid>
          <ContributionCard>
            <h3>
              <FaEye />
              Object Detection
            </h3>
            <ul>
              <li>Implemented YOLOv8 for real-time object detection</li>
              <li>Achieved 95% accuracy in object recognition</li>
              <li>Optimized model performance for real-time processing</li>
            </ul>
          </ContributionCard>

          <ContributionCard>
            <h3>
              <SiRos />
              ROS Integration
            </h3>
            <ul>
              <li>Developed custom ROS nodes for publishing and subscribing the topics from YOLO model to connect with other parts of the system like tasks planning</li>
              <li>Combine different yolo models to detect different objects from abstract classes to specific classes</li>
            </ul>
          </ContributionCard>
        </ContributionGrid>
      </Section>

      {/* <Section>
        <SectionTitle>
          <FaGithub />
          Source Code
        </SectionTitle>
        <Content style={{ textAlign: 'center' }}>
          <GitHubButton 
            href="https://github.com/your-username/hsr-project" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View Project on GitHub
          </GitHubButton>
        </Content>
      </Section> */}
    </Container>
  );
}

export default HSRProject; 