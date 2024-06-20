import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemsNavBox from '../components/ItemsNavBox/ItemsNavBox';
import CollectionFilter from '../components/CollectionFilter/CollectionFilter';
import LocationFilter from '../components/LocationFilter/LocationFilter';
import ItemList from '../components/ItemsList/ItemList';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/');
        setItems(response.data);
        setFilteredItems(response.data); // Initialize filtered items
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedCollection, selectedLocation]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    filterItems([...items, newItem]);
  };

  const filterItems = (updatedItems = items) => {
    let filtered = updatedItems;

    if (selectedCollection !== null) {
      filtered = filtered.filter(item => item.collection.id === selectedCollection);
    }

    if (selectedLocation !== null) {
      filtered = filtered.filter(item => item.location.id === selectedLocation);
    }

    setFilteredItems(filtered);
  };

  const filterItemsByCollection = (collectionId) => {
    setSelectedCollection(collectionId);
  };

  const filterItemsByLocation = (locationId) => {
    setSelectedLocation(locationId);
  };

  return (
    <div>
      <ItemsNavBox addItem={addItem} />
      <CollectionFilter filterItemsByCollection={filterItemsByCollection} />
      <LocationFilter filterItemsByLocation={filterItemsByLocation} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemsPage;
