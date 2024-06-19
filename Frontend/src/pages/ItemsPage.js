import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import CollectionFilter from '../components/CollectionFilter/CollectionFilter';
import ItemsNavBox from '../components/ItemsNavBox/ItemsNavBox';
import LocationFilter from '../components/LocationFilter/LocationFilter';
import ItemList from '../components/ItemsList/ItemList';

const ItemsPage = () => {

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try{
      const response = await axios.get('http://localhost:8000/api/items/');
      setItems(response.data);
    }catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
     {/* <Navbar/> */}
     <ItemsNavBox addItem={addItem}/>
      <CollectionFilter/> 
      <LocationFilter/> 
      <ItemList items={items}/>
    </>
   
  );
};

export default ItemsPage;