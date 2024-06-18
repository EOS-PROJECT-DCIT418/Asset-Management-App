import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;
const { Text } = Typography;

const NavbarContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const MenuContainer = styled(Menu)`
  flex-grow: 1;
  border-bottom: none;
  margin-left: 20px;
  font-family: 'Montserrat', sans-serif;
  .ant-menu-item-selected {
    color: #000 !important;
  }
  .ant-menu-item-selected::after {
    border-bottom-color: #000 !important
  }
  .ant-menu-item:hover::after {
    border-bottom-color: #000 !important
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px; 
`;

const ProfileText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <MenuContainer mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Items</Menu.Item>
        <Menu.Item key="2">Collections</Menu.Item>
        <Menu.Item key="3">Locations</Menu.Item>
        <Menu.Item key="4">Reminders</Menu.Item>
        <Menu.Item key="5">Bookings</Menu.Item>
        <Menu.Item key="6">Issues</Menu.Item>
        <Menu.Item key="7">Devices</Menu.Item>
        <Menu.Item key="8">Reports</Menu.Item>
        <Menu.Item key="9">Users</Menu.Item>
      </MenuContainer>
      <ProfileContainer>
        <IconImage src='/icons/settings.svg' alt="Settings Icon" />
        <ProfileText>
          <Text strong style={{fontFamily: 'Montserrat'}}>Bernard Attigah</Text>
          <Text type="secondary" style={{fontFamily: 'Montserrat'}}>10894036</Text>
        </ProfileText>
      </ProfileContainer>
    </NavbarContainer>
  );
};

export default Navbar;
