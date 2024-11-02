import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--highlight-color);
  text-align: center;
  margin-bottom: 3rem;
  
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

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const ProjectCard = styled.div<{ bgImage?: string }>`
  position: relative;
  padding: 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 300px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: 0.3; // 增加透明度，从 0.15 改为 0.3
    z-index: 1;
    transition: opacity 0.3s ease;
    filter: brightness(1.2); // 添加亮度滤镜
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 0%, // 降低渐变的不透明度，从 0.8 改为 0.6
      rgba(0, 0, 0, 0.2) 100% // 降低渐变的不透明度，从 0.3 改为 0.2
    );
    z-index: 2;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 0.4; // 悬停时增加透明度，从 0.25 改为 0.4
      filter: brightness(1.3); // 悬停时增加亮度
    }
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  z-index: 3;
  width: 60%;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--highlight-color);
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--accent-color);
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
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
  }

  svg {
    font-size: 1.2rem;
  }
`;