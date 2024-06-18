import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Bookings from './pages/Bookings';
import ItemsPage from './pages/ItemsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  )}
export default App;
