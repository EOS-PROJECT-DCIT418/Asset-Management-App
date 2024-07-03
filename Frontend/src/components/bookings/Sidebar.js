import React from 'react';
import axios from '../../axiosConfig';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 10px 15px;
  background: #f5f5f5;
  font-weight: bold;
`;

const CardItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const ExportHistoryCardItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #f0f0f0;
  }
`;

const IconImage = styled.img`
  width: 20px;
`;

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background: #f8f9fa;
`;

const BookingsCard = ({ onFilter }) => (
  <Card>
    <CardHeader>Bookings</CardHeader>
    <CardItem onClick={() => onFilter('all')}>All</CardItem>
    <CardItem onClick={() => onFilter('booked')}>Booked</CardItem>
    <CardItem onClick={() => onFilter('checked out')}>Checked out</CardItem>
    <CardItem onClick={() => onFilter('completed')}>Completed</CardItem>
    <CardItem onClick={() => onFilter('overdue')}>Overdue</CardItem>
    <CardItem onClick={() => onFilter('missed')}>Missed</CardItem>
  </Card>
);

const RequestsCard = ({ onFilter }) => (
  <Card>
    <CardHeader>Requests</CardHeader>
    <CardItem onClick={() => onFilter('pending')}>Pending Approval</CardItem>
    <CardItem onClick={() => onFilter('booked')}>Approved Bookings</CardItem>
    <CardItem onClick={() => onFilter('rejected')}>Rejected Bookings</CardItem>
  </Card>
);

const ExportHistoryCard = () => {
  const handleExportClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/bookings/export/', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'bookings.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error exporting history', error);
    }
  };

  return (
    <Card>
      <ExportHistoryCardItem onClick={handleExportClick}>
        Export History <IconImage src='/icons/next.svg' alt="Go Icon" />
      </ExportHistoryCardItem>
    </Card>
  );
};

const Sidebar = ({ onFilter }) => {  // Correctly destructure onFilter here
  return (
    <SidebarContainer>
      <BookingsCard onFilter={onFilter} />
      <RequestsCard onFilter={onFilter} />
      <ExportHistoryCard />
    </SidebarContainer>
  );
};

export default Sidebar;
