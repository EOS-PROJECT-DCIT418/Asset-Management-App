import React from 'react';
import Navbar from '../components/Navbar.js';
import ListContainer from '../components/ListContainter.js';
import AddSection from '../components/AddSection.js';

const Collections = () => {
    return(
        <>
           <Navbar />
           <AddSection title="Collections" />
           <ListContainer title="Collections"></ListContainer>
        </>

    );
}

export default Collections;