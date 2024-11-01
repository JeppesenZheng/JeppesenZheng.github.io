import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: rgba(248, 249, 250, 0.1);
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #e0e0e0; // 更改为更亮的颜色
  width: 100%;
  box-sizing: border-box;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #ffffff; // 更改为白色
`;

const Subtitle = styled.p`
  margin: 0.2rem 0 0.5rem;
  font-style: italic;
  color: #e0e0e0; // 更改为更亮的颜色
`;

const SocialLinks = styled.div`
  margin-bottom: 0.5rem;
  
  a {
    color: #e0e0e0; // 更改为更亮的颜色
    margin: 0 0.5rem;
    font-size: 1.2rem;
    
    &:hover {
      color: #ffffff; // 悬停时变为白色
    }
  }
`;

const FooterNote = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: #bdbdbd; // 更改为稍微亮一点的颜色
`;

function Footer() {
  return (
    <FooterWrapper>
      <Name>Jeppesen Zheng(Siyuan Zheng)</Name>
      <Subtitle>"Stay Conscious"</Subtitle>
      <SocialLinks>
        <a href="https://github.com/JeppesenZheng" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/siyuan-zheng-388877292/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:zhengsiyuan625@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </SocialLinks>
      <FooterNote>
        29d2a91@17251157793N
      </FooterNote>
      <FooterNote>
        
      </FooterNote>
    </FooterWrapper>
  );
}

export default Footer;