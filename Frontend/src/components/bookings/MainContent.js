// maincontent.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

const MessageContainer = styled.div`
  text-align: center;
`;

const MessageImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const MessageText = styled.div`
  font-size: 18px;
  color: #666;
`;

const BookingList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BookingItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const MainContent = ({ status }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/bookings/status/${status}/`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [status]);

  return (
    <MainContentContainer>
      {bookings.length === 0 ? (
        <MessageContainer>
          <MessageImage src="/icons/bookings.svg" alt="No bookings" />
          <MessageText>Uh Oh! You have no bookings to display here</MessageText>
        </MessageContainer>
      ) : (
        <BookingList>
          {bookings.map(booking => (
            <BookingItem key={booking.id}>
              <div>{booking.item.name}</div>
              <div>{booking.booking_date}</div>
              <div>{booking.status}</div>
            </BookingItem>
          ))}
        </BookingList>
      )}
    </MainContentContainer>
  );
};

export default MainContent;
