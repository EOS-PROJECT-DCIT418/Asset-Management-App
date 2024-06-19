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

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupForm = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 600px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #333;
  }

  input, textarea, select {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
  }

  button[type="submit"] {
    background-color: #EFC000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #EFC000;
`;
