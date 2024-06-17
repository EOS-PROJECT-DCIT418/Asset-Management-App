import React from 'react';
import Navbar from '../components/Navbar.js'
import PageTitle from '../components/PageTitle.js';

import ListContainer from '../components/ListContainter.js';

const Collections = () => {
    return(
        <>
           <Navbar />
           <PageTitle title="Collections" />
           
           <ListContainer title="Collections"></ListContainer>
        </>

    );
}

export default Collections;