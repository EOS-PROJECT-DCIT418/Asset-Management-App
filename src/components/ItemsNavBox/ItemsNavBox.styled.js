import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 3.25rem;
  top: 7.5rem;
  width: 17.5rem;
  height: 13.75rem;
  background-color: #FFFFFF;
  border-radius: 11px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.3rem; 
  color: #333;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1rem; 
  color: #555;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  div {
    &:first-child {
      font-weight: bold;
    }

    &:last-child {
      font-size: 0.9rem;
      color: #999;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 0.55rem;
  margin-top: 0.75rem;
  background-color: #EFC000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;