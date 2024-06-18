import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: transparent;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const HeaderButton = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchInput type="text" placeholder="Search..." />
      <div>
        <HeaderButton>Create Booking</HeaderButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
