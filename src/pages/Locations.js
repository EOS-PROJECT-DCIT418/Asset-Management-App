import React from 'react';
import Navbar from '../components/Navbar.js'
import PageTitle from '../components/PageTitle.js';
import ListContainer from '../components/ListContainter.js';

const Locations = () => {
    return(
        <>
           <Navbar />
           <PageTitle title="Locations" />
           <ListContainer title="Locations"></ListContainer>
        </>

    );
}

export default Locations;