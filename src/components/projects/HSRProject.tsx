import React from 'react';
import { FaRobot, FaPython, FaGithub, FaEye } from 'react-icons/fa';
import { SiRos, SiOpencv, SiTensorflow } from 'react-icons/si';
import * as S from '../../styles/ProjectStyles';

function HSRProject() {
  return (
    <S.Container>
      <S.Title>Human Support Robot (HSR) Project</S.Title>
      
      <S.ImageSection>
        <S.ProjectImage 
          src="/images/HSR.png"
          alt="Human Support Robot Project"
        />
      </S.ImageSection>

      <S.Section>
        <S.SectionTitle>
          <FaRobot />
          Project Overview
        </S.SectionTitle>
        <S.Content>
          The Human Support Robot (HSR) project aims to develop an advanced robotic system
          capable of assisting humans in various daily tasks. The robot combines computer
          vision, machine learning, and precise control systems to interact with its
          environment and provide meaningful support to users.
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>🛠️ Technology Stack</S.SectionTitle>
        <S.TechStack>
          <S.TechItem>
            <SiRos />
            <span>ROS</span>
          </S.TechItem>
          <S.TechItem>
            <FaPython />
            <span>Python</span>
          </S.TechItem>
          <S.TechItem>
            <SiOpencv />
            <span>OpenCV</span>
          </S.TechItem>
          <S.TechItem>
            <SiTensorflow />
            <span>TensorFlow</span>
          </S.TechItem>
          <S.TechItem>
            <FaEye />
            <span>YOLO</span>
          </S.TechItem>
        </S.TechStack>
      </S.Section>

      <S.Section>
        <S.SectionTitle>✨ Key Features</S.SectionTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <h3>Object detection</h3>
            <p>Advanced computer vision system for identifying and tracking objects in real-time.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Navigation</h3>
            <p>Autonomous navigation and obstacle avoidance in dynamic environments.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Task Planning</h3>
            <p>Intelligent task planning and execution system for complex operations.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <h3>Human Interaction</h3>
            <p>Natural interaction interfaces including voice commands and gesture recognition.</p>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.Section>

      <S.Section>
        <S.SectionTitle>🎯 My Contribution</S.SectionTitle>
        <S.ContributionGrid>
          <S.ContributionCard>
            <h3>
              <FaEye />
              Object Detection
            </h3>
            <ul>
              <li>Implemented YOLOv8 for real-time object detection</li>
              <li>Achieved 95% accuracy in object recognition</li>
              <li>Optimized model performance for real-time processing</li>
            </ul>
          </S.ContributionCard>

          <S.ContributionCard>
            <h3>
              <SiRos />
              ROS Integration
            </h3>
            <ul>
              <li>Developed custom ROS nodes for publishing and subscribing the topics from YOLO model to connect with other parts of the system like tasks planning</li>
              <li>Combine different yolo models to detect different objects from abstract classes to specific classes</li>
            </ul>
          </S.ContributionCard>
        </S.ContributionGrid>
      </S.Section>

      {/* <S.GitHubSection>
        <S.SectionTitle>
          <FaGithub />
          Source Code
            </S.SectionTitle>
            <S.Content style={{ textAlign: 'center' }}>
            <S.GitHubButton 
                href="https://github.com/your-username/hsr-project" 
                target="_blank" 
                rel="noopener noreferrer"
            >
            <FaGithub />
            View Project on GitHub
          </S.GitHubButton>
        </S.Content>
      </S.GitHubSection> */}
    </S.Container>
  );
}

export default HSRProject; 