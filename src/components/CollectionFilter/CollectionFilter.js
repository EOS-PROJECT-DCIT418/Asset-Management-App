import React from 'react';
import { Container, Heading, Button, Text } from './CollectionFilter.styled';

const CollectionFilter = () => {
  return (
    <Container>
      <Heading>
        Filter by collection
        <Button>+</Button>
      </Heading>
      <Text>Select a collection to filter the items</Text>
    </Container>
  );
}

export default CollectionFilter;
