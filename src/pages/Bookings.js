import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { Layout } from 'antd';

const { Content } = Layout;

const Container = styled(Layout)`
  min-height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f9fa;
`;

const ContentContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
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
