import React from 'react'
import Navbar from '../components/Navbar';
import CollectionFilter from '../components/CollectionFilter/CollectionFilter';
import ItemsNavBox from '../components/ItemsNavBox/ItemsNavBox';
import LocationFilter from '../components/LocationFilter/LocationFilter';
import ItemList from '../components/ItemsList/ItemList';

const ItemsPage = () => {
  return (
    <>
     {/* <Navbar/> */}
     <ItemsNavBox/>
      <CollectionFilter/> 
      <LocationFilter/> 
      <ItemList/>
    </>
   
  )
}

export default ItemsPage