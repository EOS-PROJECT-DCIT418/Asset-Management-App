import React from 'react';
import Navbar from '../components/Navbar.js'
import PageTitle from '../components/PageTitle.js';
import InputSection from '../components/InputSection.js';

const Locations = () => {
    return(
        <>
           <Navbar />
           <PageTitle title="Locations" />
           <InputSection></InputSection>
        </>

    );
}

export default Locations;