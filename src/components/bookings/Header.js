import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 2px -2px gray;
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
        <HeaderButton>List</HeaderButton>
        <HeaderButton>Calendar</HeaderButton>
        <HeaderButton>Export</HeaderButton>
        <HeaderButton>Create Booking</HeaderButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
