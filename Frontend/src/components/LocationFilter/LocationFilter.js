import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, Button, Text } from './LocationFilter.styled';

const LocationFilter = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);


  // Fetch locations and items when the component mounts
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/locations/');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/');
        setItems(response.data);
        // setFilteredItems(response.data); // Initially display all items
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchLocations();
    fetchItems();
  }, []);

  // Filter items based on the selected location
  useEffect(() => {
    if (selectedLocation) {
      setFilteredItems(items.filter(item => item.location === selectedLocation));
    } else {
      setFilteredItems(items);
    }
  }, [selectedLocation, items]);

  return (
    <Container>
      <Heading>
        Filter by Location
        <Button onClick={() => setSelectedLocation(null)}>+</Button>
      </Heading>
      <Text>Select a location to filter the items</Text>
      {/* <div>
        {locations.map(location => (
          <Button key={location.id} onClick={() => setSelectedLocation(location.id)}>
            {location.name}
          </Button>
        ))}
      </div> */}
      {/* <div>
        {filteredItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>       */}
    </Container>
  );
};

export default LocationFilter;
