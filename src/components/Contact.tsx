import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Footer from './Footer';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
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

const ContactForm = styled.form`
  position: relative;
  padding: 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  max-width: 800px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  font-size: 1.1rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  font-size: 1.1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: var(--primary-color);
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.6;
  
  p {
    margin: 0.5rem 0;
  }
`;

const BackButton = styled(Link)`
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

const SuccessMessage = styled.div`
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-left: 10px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const Contact: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 300, 0.2);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      setStatus('loading');
      
      const result = await emailjs.sendForm(
        'service_yps3w0q',
        'template_p52da68',
        form.current,
        'QnCoQKPvJVQWY3TcN'
      );

      if (result.text === 'OK') {
        setStatus('success');
        setMessage('Message sent successfully!');
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <ContactContainer>
      <BackButton to="/" style={{ opacity }}>
        <FaArrowLeft />
        Back
      </BackButton>
      <div>
        <Title>Contact Me</Title>
        <ContactForm onSubmit={handleSubmit} ref={form}>
          <FormGroup>
            <Input 
              type="text" 
              name="user_name"
              placeholder="Your Name" 
              required 
            />
            <Input 
              type="email" 
              name="user_email"
              placeholder="Your Email" 
              required 
            />
            <Input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              required 
            />
            <TextArea 
              name="message"
              placeholder="Your Message" 
              required 
            />
          </FormGroup>
          <SubmitButton 
            type="submit" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                Sending...
                <LoadingSpinner />
              </>
            ) : (
              'Send Message'
            )}
          </SubmitButton>
          {status === 'success' && <SuccessMessage>{message}</SuccessMessage>}
          {status === 'error' && <ErrorMessage>{message}</ErrorMessage>}
        </ContactForm>
        <ContactInfo>
          <p>Email: zhengsiyuan625@gmail.com</p>
          <p>Location: Sydney, Australia</p>
        </ContactInfo>
      </div>
      <Footer />
    </ContactContainer>
  );
};

export default Contact;
