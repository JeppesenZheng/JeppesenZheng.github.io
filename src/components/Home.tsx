import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const PageWrapper = styled.div<{ opacity: number }>`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, ${props => props.opacity}) 0%,
    rgba(26, 26, 26, 1) 100%
  );
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const ContentSection = styled.div`
  max-width: 600px;
`;

const Name = styled.h1<{ opacity: number }>`
  font-size: 3rem;
  color: rgba(0, 255, 255, ${props => 1 - props.opacity * 0.3});
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const Info = styled.p<{ opacity: number }>`
  font-size: 1rem;
  color: rgba(255, 255, 255, ${props => 1 - props.opacity * 0.3});
  margin: 0.5rem 0;
  transition: color 0.3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button<{ opacity: number }>`
  background-color: rgba(255, 0, 255, ${props => 1 - props.opacity * 0.3});
  color: #0a0a0a;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(200, 0, 200, ${props => 1 - props.opacity * 0.3});
  }
`;

const DownloadButton = styled(Button)`
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.2), transparent);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: translateY(0);
  }
`;

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
      setScrollOpacity(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = '/path/to/your/resume.pdf';
    window.open(resumeUrl, '_blank');

    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf';
    link.download = 'Siyuan_Zheng_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageWrapper opacity={scrollOpacity}>
      <HomeContainer>
        <ContentWrapper>
          <ContentSection>
            <Name opacity={scrollOpacity}>Hi, I'm Siyuan Zheng.</Name>
            <Info opacity={scrollOpacity}>UNSW computer science</Info>
            <ButtonContainer>
              <Button opacity={scrollOpacity} onClick={() => navigate('/About')}>About me</Button>
              <Button opacity={scrollOpacity} onClick={() => navigate('/Portfolio')}>My portfolio</Button>
              <DownloadButton 
                opacity={scrollOpacity} 
                onClick={handleDownloadResume}
              >
                Download resume
              </DownloadButton>
              <Button opacity={scrollOpacity} onClick={() => navigate('/Contact')}>Contact me</Button>
            </ButtonContainer>
          </ContentSection>
        </ContentWrapper>
        <Footer />
      </HomeContainer>
    </PageWrapper>
  );
}

export default Home;