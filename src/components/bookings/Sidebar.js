import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100%;
  background-color: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardItem = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 10px 5px;

  &:hover {
    background-color: #F3F4F6;
    color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExportHistoryCardItem = styled(CardItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconImage = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px; 
`;

const BookingsCard = () => (
  <Card>
    <CardHeader>Bookings</CardHeader>
    <CardItem>All</CardItem>
    <CardItem>Booked</CardItem>
    <CardItem>Checked out</CardItem>
    <CardItem>Completed</CardItem>
    <CardItem>Overdue</CardItem>
    <CardItem>Missed</CardItem>
  </Card>
);

const RequestsCard = () => (
  <Card>
    <CardHeader>Requests</CardHeader>
    <CardItem>Pending Approval</CardItem>
    <CardItem>Approved Bookings</CardItem>
    <CardItem>Rejected Bookings</CardItem>
  </Card>
);

const ExportHistoryCard = () => (
  <Card>
    <ExportHistoryCardItem>
      Export History <IconImage src='/icons/next.svg' alt="Go Icon" />
    </ExportHistoryCardItem>
  </Card>
);

const Sidebar = () => {
  return (
    <SidebarContainer>
      <BookingsCard />
      <RequestsCard />
      <ExportHistoryCard />
    </SidebarContainer>
  );
};

export default Sidebar;
