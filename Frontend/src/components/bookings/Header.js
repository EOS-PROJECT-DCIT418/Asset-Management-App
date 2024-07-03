import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import styled from 'styled-components';
import { DatePicker } from 'antd';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupForm = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #5F6377;
  }

  input, textarea, select {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button[type="submit"] {
    background-color: #EFC000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h3 {
    color: #8D909E;
    font-weight: 500;
    font-size: 22px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #EFC000;
  margin-left: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: transparent;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 50%;
`;

const IconImage = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const HeaderButton = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
`;

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [items, setItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/bookings/', {
        item: selectedItem,
        booking_date: selectedDate,
      });
      if (response.status === 201) {
        alert('Booking created successfully!');
        setPopupVisible(false);
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Item may already be booked.');
    }
  };

  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/');
        console.log("Items fetched:", response.data);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  return (
    <HeaderContainer>
      <SearchContainer>
        <IconImage src='/icons/search.svg' alt="Search Icon" />
        <SearchInput type="text" placeholder="Search..." />
      </SearchContainer>
      <div>
        <HeaderButton onClick={handleButtonClick}>Create Booking</HeaderButton>
      </div>
      {isPopupVisible && (
        <PopupContainer>
          <PopupForm>
            <div>
              <h3>Create Booking</h3>
              <CloseButton onClick={handleClosePopup}>Close X</CloseButton>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Select Date and Time
                <DatePicker style={{ width: "100%" }} onChange={onChange} />
              </label>
              <label>
                Item
                <select style={{ width: "100%", color:"#BDC0CC", fontSize:"14px" }} value={selectedItem} onChange={handleItemChange}>
                  <option value="">Choose which items to add to your booking.</option>
                  {items.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <button style={{ width: "100px" }} type="submit">Book</button>
            </form>
          </PopupForm>
        </PopupContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
