import React from 'react';
import Navbar from '../components/Navbar.js'
import PageTitle from '../components/PageTitle.js';
import InputSection from '../components/InputSection.js';

const Collections = () => {
    return(
        <>
           <Navbar />
           <PageTitle title="Collections" />
           <InputSection></InputSection>
        </>

    );
}

export default Collections;