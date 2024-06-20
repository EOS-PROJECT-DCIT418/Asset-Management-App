import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading, Button, Text } from './CollectionFilter.styled';

const CollectionFilter = ({ filterItemsByCollection }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/collections/');
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <Container>
      <Heading>
        Filter by collection
        <Button onClick={() => filterItemsByCollection(null)}>+</Button>
      </Heading>
      <Text>Select a collection to filter the items</Text>
      <div>
        {collections.map(collection => (
          <Button key={collection.id} onClick={() => filterItemsByCollection(collection.id)}>
            {collection.name}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default CollectionFilter;
