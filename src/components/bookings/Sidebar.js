import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Bookings</h3>
      <SidebarItem>All</SidebarItem>
      <SidebarItem>Booked</SidebarItem>
      <SidebarItem>Checked out</SidebarItem>
      <SidebarItem>Completed</SidebarItem>
      <SidebarItem>Overdue</SidebarItem>
      <SidebarItem>Missed</SidebarItem>
      <h3>Requests</h3>
      <SidebarItem>Pending Approval</SidebarItem>
      <SidebarItem>Approved Bookings</SidebarItem>
      <SidebarItem>Rejected Bookings</SidebarItem>
      <SidebarItem>Export History</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
