import React from 'react'
import CollectionFilter from '../components/CollectionFilter/CollectionFilter';
import ItemsNavBox from '../components/ItemsNavBox/ItemsNavBox';
import LocationFilter from '../components/LocationFilter/LocationFilter';
import ItemList from '../components/ItemsList/ItemList';

const ItemsPage = () => {
  return (
    <>
     <ItemsNavBox/>
      <CollectionFilter/> 
      <LocationFilter/> 
      <ItemList/>
    </>
   
  )
}

export default ItemsPage