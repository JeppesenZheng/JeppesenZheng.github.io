import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
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

export const ImageSection = styled.div`
  margin: 3rem 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const Section = styled.section`
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const TechStack = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
`;

export const TechItem = styled.div`
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

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const FeatureCard = styled.div`
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

export const GitHubButton = styled.a`
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

export const ContributionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const ContributionCard = styled.div`
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

export const GitHubSection = styled(Section)`
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent-color);
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
    opacity: 1 !important;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const DownloadButton = styled(GitHubButton)`
  background-color: #4CAF50;
  &:hover {
    background-color: #45a049;
  }
`; 