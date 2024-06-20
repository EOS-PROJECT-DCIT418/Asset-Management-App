import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Bookings from './pages/Bookings';
import ItemsPage from './pages/ItemsPage';
// import CollectionsPage from './pages/CollectionsPage';

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
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/bookings" element={<Bookings />} />
            {/* <Route path="/collections" element={<CollectionsPage />} />  */}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
