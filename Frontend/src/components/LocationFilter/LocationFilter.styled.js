import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 3.25rem;
  top: 31.5rem;
  width: 17.5rem;
  height: auto;
  background-color: #FFFFFF;
  border-radius: 11px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.3rem; 
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: rgba(247, 86, 102, 0.1); /* Yellow color */
  color: #EFC000; /* Black text color */
  border: none;
  border-radius: 8px;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:hover {
    background-color: #0056b3;
    color: #ffff;
  }
`;

export const Text = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #555;
`;
