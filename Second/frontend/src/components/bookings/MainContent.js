import React from 'react';
import styled from 'styled-components';

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

const MainContent = () => {
  return (
    <MainContentContainer>
      <MessageContainer>
        <MessageImage src="/images/bookings.svg" alt="No bookings" />
        <MessageText>Uh Oh! You have no bookings to display here</MessageText>
      </MessageContainer>
    </MainContentContainer>
  );
};

export default MainContent;
