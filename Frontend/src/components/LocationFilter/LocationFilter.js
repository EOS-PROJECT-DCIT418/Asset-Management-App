// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Heading, Button, Text } from './LocationFilter.styled';

// const LocationFilter = ({ filterItemsByLocation }) => {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/locations/');
//         setLocations(response.data);
//       } catch (error) {
//         console.error('Error fetching locations:', error);
//       }
//     };

//     fetchLocations();
//   }, []);

//   return (
//     <Container>
//       <Heading>
//         Filter by Location
//         <Button onClick={() => filterItemsByLocation(null)}>+</Button>
//       </Heading>
//       <Text>Select a location to filter the items</Text>
//       <div>
//         {locations.map(location => (
//           <Button key={location.id} onClick={() => filterItemsByLocation(location.id)}>
//             {location.name}
//           </Button>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default LocationFilter;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Heading, Button, Text } from './LocationFilter.styled';

// const LocationFilter = ({ filterItemsByLocation }) => {
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null); // Add a state for the selected location

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/locations/');
//         setLocations(response.data);
//       } catch (error) {
//         console.error('Error fetching locations:', error);
//       }
//     };
//     fetchLocations();
//   }, []);

//   return (
//     <Container>
//       <Heading>
//         Filter by Location
//         <Button onClick={() => filterItemsByLocation(null)}>+</Button>
//       </Heading>
//       <Text>Select a location to filter the items</Text>
//       <div>
//         {locations.map(location => (
//           <Button
//             key={(location.id)}
//             onClick={() => {
//               setSelectedLocation((location.id)); // Update the selected location when a button is clicked
//               filterItemsByLocation((location.id));
//             }}
//             style={{
//               backgroundColor: selectedLocation === (location.id) ? 'gray' : 'white', // Highlight the selected location
//             }}
//           >
//             {location.name}
//           </Button>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default LocationFilter;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, Button, Text, ButtonContainer } from './LocationFilter.styled';

const LocationFilter = ({ filterItemsByLocation }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/locations/');
        console.log('Fetched locations:', response.data); // Debugging log
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    console.log('Selected location:', selectedLocation); // Debugging log
  }, [selectedLocation]);

  return (
    <Container>
      <Heading>
        Filter by Location
        <Button onClick={() => {
          setSelectedLocation(null); // Update the selected location to null
          filterItemsByLocation(null);
          console.log('Reset to show all locations');
        }}>+</Button>
      </Heading>
      <Text>Select a location to filter the items</Text>
      <ButtonContainer>
        {locations.map(location => (
          <Button
            key={location.id}
            onClick={() => {
              setSelectedLocation(location.id); // Update the selected location when a button is clicked
              filterItemsByLocation(location.id);
              console.log('Selected location:', location.id);
            }}
            // style={{
            //   backgroundColor: selectedLocation === location.id ? 'gray' : 'rgba(247, 86, 102, 0.1)', // Highlight the selected location
            //   color: selectedLocation === location.id ? '#ffffff' : '#EFC000',
            // }}
          >
            {location.name}
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default LocationFilter;
