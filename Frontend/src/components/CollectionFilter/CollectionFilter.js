// import React from 'react';
// import { Container, Heading, Button, Text } from './CollectionFilter.styled';

// const CollectionFilter = () => {
//   return (
//     <Container>
//       <Heading>
//         Filter by collection
//         <Button>+</Button>
//       </Heading>
//       <Text>Select a collection to filter the items</Text>
//     </Container>
//   );
// }

// export default CollectionFilter;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, Button, Text } from './CollectionFilter.styled';

const CollectionFilter = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch collections and items when the component mounts
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/collections/');
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchCollections();
    fetchItems();
  }, []);

  // Filter items based on the selected collection
  useEffect(() => {
    if (selectedCollection) {
      setFilteredItems(items.filter(item => item.collection === selectedCollection));
    } else {
      setFilteredItems(items);
    }
  }, [selectedCollection, items]);

  return (
    <Container>
      <Heading>
        Filter by collection
        <Button onClick={() => setSelectedCollection(null)}>+</Button>
      </Heading>
      <Text>Select a collection to filter the items</Text>
      {/* <div>
        {collections.map(collection => (
          <Button key={collection.id} onClick={() => setSelectedCollection(collection.id)}>
            {collection.name}
          </Button>
        ))}
      </div> */}
      {/* <div>
        {filteredItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div> */}
    </Container>
  );
};

export default CollectionFilter;
