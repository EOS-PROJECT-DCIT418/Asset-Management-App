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
import { Container, Heading, Button, Text } from './LocationFilter.styled';

const LocationFilter = ({ filterItemsByLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/locations/');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  // useEffect(() => {
  //   console.log('Selected location:', selectedLocation); // Debugging log
  // }, [selectedLocation]);

  return (
    <Container>
      <Heading>
        Filter by Location
        <Button onClick={() => filterItemsByLocation(null)}>+</Button>
      </Heading>
      <Text>Select a location to filter the items</Text>
      <div>
        {locations.map(location => (
          <Button key={location.id} onClick={() => filterItemsByLocation(location.id)}>
            {location.name}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default LocationFilter;
