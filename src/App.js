import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Bookings from './pages/Bookings';
import ItemsPage from './pages/ItemsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemsPage />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
