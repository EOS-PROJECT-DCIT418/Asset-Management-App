import React from 'react';
import Navbar from '../components/Navbar.js'
import ListContainer from '../components/ListContainter.js';
import AddSection from '../components/AddSection.js';

const Locations = () => {
    return(
        <>
           <Navbar />
           <AddSection title="Locations" />
           <ListContainer title="Locations"></ListContainer>
        </>

    );
}

export default Locations;