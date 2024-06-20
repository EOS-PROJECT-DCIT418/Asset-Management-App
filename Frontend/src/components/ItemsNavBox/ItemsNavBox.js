import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, NavList, NavItem, Button, PopupContainer, PopupForm, CloseButton } from './ItemsNavBox.styled';

const ItemsNavBox = ({ addItem }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [serial_number, setSerialNumber] = useState('');
  const [description, setDescription] = useState('');
  const [collection, setCollection] = useState(2); // Default to Collection 2
  const [location, setLocation] = useState(1); // Default to Location 1
  const [itemCount, setItemCount] = useState(0);
  const [collections, setCollections] = useState([]);
  const [locations, setLocations] = useState([]);

  // Fetch the current item count and other data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the item count from the API
        const itemCountResponse = await axios.get('http://localhost:8000/api/items/count/');
        setItemCount(itemCountResponse.data.count);

        // Fetch collection and location data
        const collectionsResponse = await axios.get('http://localhost:8000/api/collections/');
        setCollections(collectionsResponse.data);

        const locationsResponse = await axios.get('http://localhost:8000/api/locations/');
        setLocations(locationsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const itemData = {
      name: itemName,
      serial_number: serial_number,
      description: description,
      collection: parseInt(collection), // Ensure collection is an integer
      location: parseInt(location)      // Ensure location is an integer
    };

    try {
      const response = await axios.post('http://localhost:8000/api/items/', itemData);
      addItem(response.data); // Add the new item to the items state
      handleClosePopup();
      setItemName('');
      setSerialNumber('');
      setDescription('');
      setCollection(2);
      setLocation(1);      
      setItemCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Container>
      <Heading>Items</Heading>
      <NavList className='NavBoxlist'>
        <NavItem><div>All Items</div><div>{itemCount}</div></NavItem>
        <NavItem><div>Tagged Items</div><div>{/* Update with actual count */}</div></NavItem>
        <NavItem><div>Untagged Items</div><div>{/* Update with actual count */}</div></NavItem>
      </NavList>
      <Button onClick={handleButtonClick}>Add New Item</Button>
      {isPopupVisible && (
        <PopupContainer>
          <PopupForm onSubmit={handleSubmit}>
            <CloseButton onClick={handleClosePopup}>Close X</CloseButton>
            <h2>Add New Item</h2>
            <form>
              <label>
                Name of Item:
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
              </label>
              <label>
                Serial Number:
                <input type="text" value={serial_number} onChange={(e) => setSerialNumber(e.target.value)} />
              </label>
              <label>
                Item Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </label>
              <label>
                Select Collection:
                <select value={collection} onChange={(e) => setCollection(parseInt(e.target.value))}>
                  {collections.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Select Location:
                <select value={location} onChange={(e) => setLocation(parseInt(e.target.value))}>
                  {locations.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </label>
              <button type="submit">Submit</button>
            </form>
          </PopupForm>
        </PopupContainer>
      )}
    </Container>
  );
}

export default ItemsNavBox;
