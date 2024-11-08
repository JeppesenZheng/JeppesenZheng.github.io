import styled from 'styled-components';

export const PageWrapper = styled.div<{ opacity?: number }>`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  opacity: ${props => props.opacity ?? 1};
  transition: opacity 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(245, 247, 250, 0.8) 0%, rgba(195, 207, 226, 0.8) 100%);
    z-index: -1;
  }
`; 