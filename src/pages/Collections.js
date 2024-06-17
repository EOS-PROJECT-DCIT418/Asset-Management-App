import React from 'react';
import Navbar from '../components/Navbar.js'
import PageTitle from '../components/PageTitle.js';
import InputSection from '../components/InputSection.js';
import ListContainer from '../components/ListContainter.js';

const Collections = () => {
    return(
        <>
           <Navbar />
           <PageTitle title="Collections" />
           <InputSection></InputSection>
           <ListContainer title="Collections"></ListContainer>
        </>

    );
}

export default Collections;