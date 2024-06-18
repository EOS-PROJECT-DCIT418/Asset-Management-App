import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/bookings/Sidebar';
import Header from '../components/bookings/Header';
import MainContent from '../components/bookings/MainContent';
import Navbar from '../components/Navbar';

const Layout = styled.div`
    display: flex;
    padding: 30px;
    align-items: stretch;
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: #ECECEC;
`;

const SidebarContainer = styled.div`
  width: 20%;
  background-color: transparent;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  width: 80%;
`;

const Bookings = () => {
  return (
    <Container>
      <Navbar />
      <Layout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <Header />
          <MainContent />
        </ContentContainer>
      </Layout>
    </Container>
  );
};

export default Bookings;
