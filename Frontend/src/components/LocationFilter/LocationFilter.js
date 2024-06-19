import React from 'react';
import { Container, Heading, Button, Text } from './LocationFilter.styled';

const LocationFilter = () => {
  return (
    <Container>
      <Heading>
        Filter by Location
        <Button>+</Button>
      </Heading>
      <Text>Select a location to filter the items</Text>
    </Container>
  );
}

export default LocationFilter;
